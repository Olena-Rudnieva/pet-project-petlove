import {
  BottomWrapper,
  FiltersBlock,
  Form,
  UpperWrapper,
} from './noticesFilters.styled';

import { CategoriesFilter, GenderFilter, SpeciesFilter } from './components';

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
    <Form>
      <UpperWrapper>
        <FiltersBlock>
          <CategoriesFilter category={category} setCategory={setCategory} />
        </FiltersBlock>
        <FiltersBlock>
          <GenderFilter gender={gender} setGender={setGender} />
        </FiltersBlock>
      </UpperWrapper>
      <BottomWrapper>
        <SpeciesFilter species={species} setSpecies={setSpecies} />
      </BottomWrapper>
    </Form>
  );
};
