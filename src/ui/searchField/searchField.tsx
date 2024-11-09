import sprite from 'assets/sprite.svg';
import {
  Close,
  CloseIcon,
  FormField,
  FormWrapper,
  Icon,
  Loupe,
} from './searchField.styled';

interface SearchFieldProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isSearching: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClear: () => void;
  value: string;
}

export const SearchField = ({
  handleSubmit,
  isSearching,
  handleChange,
  handleClear,
  value,
}: SearchFieldProps) => {
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FormField
        name="search"
        type="text"
        onChange={handleChange}
        placeholder="Search"
        value={value}
      />

      <Loupe type="submit">
        <Icon>
          <use href={sprite + '#icon-search'}></use>
        </Icon>
      </Loupe>

      {isSearching && (
        <Close type="button" onClick={handleClear} name="clear">
          <CloseIcon />
        </Close>
      )}
    </FormWrapper>
  );
};
