import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchNews } from '../../redux/news/newsOperations';
import { List, Section, Wrapper } from './news.styled';
import { topScroll } from 'utils';
import { Container, Pagination, SearchField, Title } from 'ui';
import {
  selectNews,
  selectTotalPagesNews,
} from '../../redux/news/newsSelectors';
import { AppDispatch } from 'redux/store';
import { NewsItem } from 'components';
import { News as NewsType } from 'types';

interface PageChangeEvent {
  selected: number;
}

const News = () => {
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
    dispatch(fetchNews({ pageNumber: selectedPage, keyword: keyword }));
  }, [dispatch, selectedPage, keyword]);

  return (
    <Section>
      <Container>
        <Wrapper>
          <Title name={'News'} />
          <SearchField
            handleSubmit={handleSubmit}
            isSearching={searchQuery.length > 0}
            handleChange={handleChange}
            handleClear={handleClear}
            value={searchQuery}
          />
        </Wrapper>

        <List>
          {news?.map(item => (
            <NewsItem key={item._id} item={item} />
          ))}
        </List>
        <Pagination totalPages={totalPages} onPageChange={handlePageChange} />
      </Container>
    </Section>
  );
};

export default News;
