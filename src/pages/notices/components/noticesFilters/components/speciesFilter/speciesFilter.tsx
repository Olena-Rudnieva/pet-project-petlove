import { useSelector } from 'react-redux';
import Select from 'react-select';
import { selectSpecies } from '../../../../../../redux/notices';
import { customStyles } from './speciesFilter.styled';

type SelectOption = {
  value: string;
  label: string;
};

interface SpeciesFilterProps {
  species: string;
  setSpecies: React.Dispatch<React.SetStateAction<string>>;
}

export const SpeciesFilter = ({ species, setSpecies }: SpeciesFilterProps) => {
  const speciesData = useSelector(selectSpecies);

  const speciesOptions: SelectOption[] = [
    ...speciesData.map((species: string) => ({
      value: species,
      label: species.charAt(0).toUpperCase() + species.slice(1),
    })),
    { value: '', label: 'Show all' },
  ];

  const handleSpeciesChange = (selectedOption: SelectOption | null) => {
    if (selectedOption) {
      setSpecies(selectedOption.value);
    }
  };
  return (
    <label>
      <Select
        id="species"
        value={
          species === ''
            ? null
            : speciesOptions.find(option => option.value === species)
        }
        onChange={handleSpeciesChange}
        options={speciesOptions}
        isSearchable
        styles={customStyles}
        placeholder="By type"
      />
    </label>
  );
};
