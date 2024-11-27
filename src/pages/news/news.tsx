import { List, Section, Wrapper } from './news.styled';
import { Container, Pagination, SearchField, Title } from 'ui';
import { NewsItem } from 'components';
import { useNews } from './hooks';

const News = () => {
  const {
    news,
    totalPages,
    searchQuery,
    handleChange,
    handleSubmit,
    handleClear,
    handlePageChange,
  } = useNews();

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
