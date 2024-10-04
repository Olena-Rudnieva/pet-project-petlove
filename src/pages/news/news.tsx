import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchNews } from '../../redux/news/newsOperations';
import { Section, Wrapper } from './news.styled';
import { topScroll } from 'utils';

import { Container, Pagination, SearchField, Title } from 'ui';
import {
  selectNews,
  selectTotalPagesNews,
} from '../../redux/news/newsSelectors';
// import { NewsItem } from 'components';
import { AppDispatch } from 'redux/store';

interface PageChangeEvent {
  selected: number;
}

const News = () => {
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();

  const news = useSelector(selectNews);
  console.log('news', news);

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
    // Implement search logic here
    console.log('Search query submitted:', searchQuery);
    // Example: dispatch(fetchNews(selectedPage, searchQuery));
  };

  useEffect(() => {
    dispatch(fetchNews(selectedPage));
  }, [dispatch, selectedPage]);

  return (
    <Section>
      <Container>
        <Wrapper>
          <Title name={'News'} />
          <SearchField
            handleSubmit={handleSubmit}
            isSearching={searchQuery.length > 0}
            handleChange={handleChange}
          />
        </Wrapper>

        {/* <List>
          {news?.map(item => (
            <NewsItem key={item._id} item={item} />
          ))}
        </List> */}
        <Pagination totalPages={totalPages} onPageChange={handlePageChange} />
      </Container>
    </Section>
  );
};

export default News;
