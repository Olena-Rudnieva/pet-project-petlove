import { useSelector } from 'react-redux';
import Select from 'react-select';
import { selectCategories } from '../../../../../../redux/notices';
import { customStyles } from './categoriesFilter.styled';

type SelectOption = {
  value: string;
  label: string;
};

interface CategoriesFilterProps {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

export const CategoriesFilter = ({
  category,
  setCategory,
}: CategoriesFilterProps) => {
  const categories = useSelector(selectCategories);

  const categoryOptions: SelectOption[] = [
    ...categories.map((category: string) => ({
      value: category,
      label: category.charAt(0).toUpperCase() + category.slice(1),
    })),
    { value: '', label: 'Show all' },
  ];

  const handleCategoryChange = (selectedOption: SelectOption | null) => {
    if (selectedOption) {
      setCategory(selectedOption.value);
    }
  };
  return (
    <label>
      <Select
        id="category"
        value={
          category === ''
            ? null
            : categoryOptions.find(option => option.value === category)
        }
        onChange={handleCategoryChange}
        options={categoryOptions}
        isSearchable
        styles={customStyles}
        placeholder="Categories"
      />
    </label>
  );
};
