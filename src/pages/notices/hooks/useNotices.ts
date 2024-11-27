import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { topScroll } from 'utils/topScroll';

import { AppDispatch } from 'redux/store';
import { Notice } from 'types';
import {
  fetchCategories,
  fetchGender,
  fetchNotices,
  fetchSpecies,
  selectNotices,
  selectTotalPagesNotices,
} from '../../../redux/notices';

export const useNotices = () => {
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [keyword, setKeyword] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [species, setSpecies] = useState<string>('');

  const dispatch = useDispatch<AppDispatch>();

  const notices = useSelector(selectNotices) as Notice[];
  const totalPages = useSelector(selectTotalPagesNotices) ?? 1;

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchGender());
    dispatch(fetchSpecies());
  }, [dispatch]);

  const handlePageChange = (e: { selected: number }) => {
    setSelectedPage(e.selected + 1);
    topScroll();
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setKeyword(searchQuery);
    dispatch(
      fetchNotices({
        pageNumber: selectedPage,
        keyword: searchQuery,
        category,
        gender,
        species,
      })
    );
  };

  const handleClear = () => {
    setSearchQuery('');
    setKeyword('');
    dispatch(
      fetchNotices({
        pageNumber: selectedPage,
        keyword: '',
        category,
        gender,
        species,
      })
    );
  };

  useEffect(() => {
    dispatch(
      fetchNotices({
        pageNumber: selectedPage,
        keyword,
        category,
        gender,
        species,
      })
    );
  }, [dispatch, selectedPage, keyword, category, gender, species]);

  return {
    notices,
    totalPages,
    searchQuery,
    handleSearchChange,
    handleSearchSubmit,
    handleClear,
    handlePageChange,
    category,
    setCategory,
    gender,
    setGender,
    species,
    setSpecies,
  };
};
