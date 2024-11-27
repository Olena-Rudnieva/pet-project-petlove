import { useSelector } from 'react-redux';
import Select from 'react-select';
import { customStyles } from './selectFilter.styled';

type SelectOption = {
  value: string;
  label: string;
};

interface SelectFilterProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  selector: (state: any) => string[];
  placeholder: string;
}

export const SelectFilter = ({
  value,
  setValue,
  selector,
  placeholder,
}: SelectFilterProps) => {
  const optionsData = useSelector(selector);

  const options: SelectOption[] = [
    ...optionsData.map((item: string) => ({
      value: item,
      label: item.charAt(0).toUpperCase() + item.slice(1),
    })),
    { value: '', label: 'Show all' },
  ];

  const handleChange = (selectedOption: SelectOption | null) => {
    if (selectedOption) {
      setValue(selectedOption.value);
    }
  };

  return (
    <label>
      <Select
        id={placeholder.toLowerCase().replace(' ', '-')}
        value={
          value === '' ? null : options.find(option => option.value === value)
        }
        onChange={handleChange}
        options={options}
        isSearchable
        styles={customStyles}
        placeholder={placeholder}
      />
    </label>
  );
};
