import {
  BottomWrapper,
  FiltersBlock,
  Form,
  UpperWrapper,
} from './noticesFilters.styled';

import {
  selectCategories,
  selectGender,
  selectSpecies,
} from '../../../../redux/notices';
import { SelectFilter } from '../selectFilter';

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
          <SelectFilter
            value={category}
            setValue={setCategory}
            selector={selectCategories}
            placeholder="Categories"
          />
        </FiltersBlock>
        <FiltersBlock>
          <SelectFilter
            value={gender}
            setValue={setGender}
            selector={selectGender}
            placeholder="By gender"
          />
        </FiltersBlock>
      </UpperWrapper>
      <BottomWrapper>
        <SelectFilter
          value={species}
          setValue={setSpecies}
          selector={selectSpecies}
          placeholder="By type"
        />
      </BottomWrapper>
    </Form>
  );
};
