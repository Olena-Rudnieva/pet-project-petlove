import { Section, TitleWrapper, Wrapper } from './notices.styled';
import { NoticesFilters, NoticesList } from './components';
import { Container, Pagination, SearchField, Title } from 'ui';
import { useNotices } from './hooks';

const Notices = () => {
  const {
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
  } = useNotices();

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
