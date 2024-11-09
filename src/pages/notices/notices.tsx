import { Section, TitleWrapper, Wrapper } from './notices.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { topScroll } from 'utils/topScroll';
import { NoticesFilters, NoticesList } from './components';
import { Container, Pagination, SearchField, Title } from 'ui';
import {
  fetchCategories,
  fetchGender,
  fetchNotices,
  fetchSpecies,
} from '../../redux/notices';
import {
  selectNotices,
  selectTotalPagesNotices,
} from '../../redux/notices/noticesSelectors';
import { AppDispatch } from 'redux/store';
import { Notice } from 'types';

const Notices = () => {
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
        keyword: keyword,
        category,
        gender,
        species,
      })
    );
  }, [dispatch, selectedPage, keyword, category, gender, species]);

  return (
    <Section>
      <Container>
        <TitleWrapper>
          <Title name={'Find your favorite pet'} />
        </TitleWrapper>
        <Wrapper>
          <SearchField
            handleSubmit={handleSearchSubmit}
            isSearching={searchQuery.length > 0}
            handleChange={handleSearchChange}
            handleClear={handleClear}
            value={searchQuery}
          />
          <NoticesFilters
            category={category}
            setCategory={setCategory}
            gender={gender}
            setGender={setGender}
            species={species}
            setSpecies={setSpecies}
          />
        </Wrapper>
        <NoticesList notices={notices} />
        <Pagination totalPages={totalPages} onPageChange={handlePageChange} />
      </Container>
    </Section>
  );
};

export default Notices;
