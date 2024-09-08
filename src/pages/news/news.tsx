import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { Section, Wrapper } from './news.styled';
import { Container } from 'ui/container';

import { topScroll } from 'utils';
import { SearchField } from 'ui/searchField';

import { Pagination } from 'ui/pagination';
// import { NewsSelectors } from 'redux';
import { Title } from 'ui/title';

interface PageChangeEvent {
  selected: number;
}

const News = () => {
  const [selectedPage, setSelectedPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();

  // const news = useSelector(NewsSelectors.news);
  //   const totalPages = useSelector(selectTotalPages);
  const totalPages = 10;

  const handlePageChange = (e: PageChangeEvent) => {
    // console.log(`Selected page: ${page}`);
    // setSelectedPage(page);
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
    // dispatch(fetchNews(selectedPage));
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
