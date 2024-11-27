import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { AppDispatch } from 'redux/store';
import { topScroll } from 'utils';
import { News as NewsType } from 'types';
import {
  fetchNews,
  selectNews,
  selectTotalPagesNews,
} from '../../../redux/news';

interface PageChangeEvent {
  selected: number;
}

export const useNews = () => {
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [keyword, setKeyword] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();

  const news = useSelector(selectNews) as NewsType[];
  const totalPages = useSelector(selectTotalPagesNews) ?? 1;

  const handlePageChange = (e: PageChangeEvent) => {
    setSelectedPage(e.selected + 1);
    topScroll();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setKeyword(searchQuery);
    dispatch(fetchNews({ pageNumber: selectedPage, keyword: searchQuery }));
  };

  const handleClear = () => {
    setSearchQuery('');
    setKeyword('');
    dispatch(fetchNews({ pageNumber: selectedPage, keyword: '' }));
  };

  useEffect(() => {
    dispatch(fetchNews({ pageNumber: selectedPage, keyword }));
  }, [dispatch, selectedPage, keyword]);

  return {
    news,
    totalPages,
    searchQuery,
    handleChange,
    handleSubmit,
    handleClear,
    handlePageChange,
  };
};
