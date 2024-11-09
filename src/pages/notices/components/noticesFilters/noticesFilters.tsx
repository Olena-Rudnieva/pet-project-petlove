import { FilterWrapper, Form, Wrapper } from './noticesFilters.styled';
import { CategoriesFilter } from './components/categoriesFilter';
import { GenderFilter, SpeciesFilter } from './components';

interface NoticesFiltersProps {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  gender: string;
  setGender: React.Dispatch<React.SetStateAction<string>>;
  species: string;
  setSpecies: React.Dispatch<React.SetStateAction<string>>;
}

export const NoticesFilters = ({
  category,
  setCategory,
  gender,
  setGender,
  species,
  setSpecies,
}: NoticesFiltersProps) => {
  return (
    <Wrapper>
      <Form>
        <FilterWrapper>
          <CategoriesFilter category={category} setCategory={setCategory} />
          <GenderFilter gender={gender} setGender={setGender} />
          <SpeciesFilter species={species} setSpecies={setSpecies} />
        </FilterWrapper>
      </Form>
    </Wrapper>
  );
};
