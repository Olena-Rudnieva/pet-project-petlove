import {
  Link,
  PlusIcon,
  Title,
  UpperWrapper,
  Wrapper,
} from './petsBlock.styled';
import sprite from '../../images/sprite.svg';

export const PetsBlock = () => {
  return (
    <Wrapper>
      <UpperWrapper>
        <Title>My pets</Title>
        <Link to="/add-pet">
          Add pet
          <PlusIcon>
            <use href={sprite + '#icon-plus'}></use>
          </PlusIcon>
        </Link>
      </UpperWrapper>
    </Wrapper>
  );
};
