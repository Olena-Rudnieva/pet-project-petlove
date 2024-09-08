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
}

export const SearchField = ({
  handleSubmit,
  isSearching,
  handleChange,
}: SearchFieldProps) => {
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FormField
        name="search"
        type="text"
        onChange={handleChange}
        placeholder="Search"
      />

      <Loupe type="submit">
        <Icon>
          <use href={sprite + '#icon-search'}></use>
        </Icon>
      </Loupe>

      {!isSearching && (
        <Close type="submit" name="clear">
          <CloseIcon />
        </Close>
      )}
    </FormWrapper>
  );
};
