import { useSelector } from 'react-redux';
import Select from 'react-select';
import { selectGender } from '../../../../../../redux/notices';
import { customStyles } from './genderFilter.styled';

type SelectOption = {
  value: string;
  label: string;
};

interface GenderFilterProps {
  gender: string;
  setGender: React.Dispatch<React.SetStateAction<string>>;
}

export const GenderFilter = ({ gender, setGender }: GenderFilterProps) => {
  const genders = useSelector(selectGender);

  const genderOptions: SelectOption[] = [
    ...genders.map((gender: string) => ({
      value: gender,
      label: gender.charAt(0).toUpperCase() + gender.slice(1),
    })),
    { value: '', label: 'Show all' },
  ];

  const handleGenderChange = (selectedOption: SelectOption | null) => {
    if (selectedOption) {
      setGender(selectedOption.value);
    }
  };
  return (
    <label>
      <Select
        id="category"
        value={
          gender === ''
            ? null
            : genderOptions.find(option => option.value === gender)
        }
        onChange={handleGenderChange}
        options={genderOptions}
        isSearchable
        styles={customStyles}
        placeholder="By gender"
      />
    </label>
  );
};
