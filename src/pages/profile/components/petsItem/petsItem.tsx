import { Pet } from 'types';
import {
  DeleteIcon,
  IconWrapper,
  Image,
  ImageWrapper,
  Label,
  List,
  ListItem,
  PetIcon,
  TextWrapper,
  Title,
  Value,
  Wrapper,
} from './petsItem.styled';
import sprite from 'assets/sprite.svg';
import { TbTrash } from 'react-icons/tb';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/store';
import { removePet } from '../../../../redux/pets';
import { wordFromBigLetter } from 'utils';

interface PetsItemProps {
  pet: Pet;
}

export const PetsItem = ({ pet }: PetsItemProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const transformDate = (date: string) => {
    const [year, month, day] = date.split('-');
    return `${day}.${month}.${year}`;
  };

  const details = [
    { label: 'Name', value: pet.name },
    { label: 'Birthday', value: transformDate(pet.birthday) },
    { label: 'Sex', value: wordFromBigLetter(pet.sex) },
    { label: 'Species', value: wordFromBigLetter(pet.species) },
  ];

  const handleDelete = () => {
    if (pet._id) {
      dispatch(removePet(pet._id));
    } else {
      console.error('Pet ID is undefined.');
    }
  };

  return (
    <Wrapper>
      <ImageWrapper>
        {pet.imgURL ? (
          <Image src={pet.imgURL} alt="Pet" />
        ) : (
          <PetIcon>
            <use href={sprite + '#icon-pet'}></use>
          </PetIcon>
        )}
      </ImageWrapper>
      <TextWrapper>
        <Title>{pet.name}</Title>
        <List>
          {details.map((detail, index) => (
            <div key={index}>
              <ListItem>
                <Label>{detail.label}</Label>
                <Value> {detail.value}</Value>
              </ListItem>
            </div>
          ))}
        </List>
      </TextWrapper>

      <IconWrapper>
        <DeleteIcon onClick={handleDelete}>
          <TbTrash />
        </DeleteIcon>
      </IconWrapper>
    </Wrapper>
  );
};
