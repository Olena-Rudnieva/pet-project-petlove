import {
  Avatar,
  AvatarWrapper,
  ButtonWrapper,
  FavoriteBtn,
  Heart,
  IconEmpty,
  IconFavorite,
  Image,
  Label,
  List,
  ListItem,
  Text,
  Title,
  UserIconAvatar,
  Value,
  Wrapper,
} from './modalNotice.styled';
import sprite from 'assets/sprite.svg';
import { Button } from 'ui';
import { ButtonSize, ButtonVariant, Notice } from 'types';
import { formattedDate, wordFromBigLetter } from 'utils';

interface ModalNoticeProps {
  handleModalToggle: () => void;
  item: Notice;
  isFavorite: boolean;
  handleAddFavorites: (id: string) => void;
  handleRemoveFavorites: (id: string) => void;
}
export const ModalNotice = ({
  handleModalToggle,
  item,
  isFavorite,
  handleAddFavorites,
  handleRemoveFavorites,
}: ModalNoticeProps) => {
  const { title, imgURL, comment, name, birthday, sex, species } = item;

  const details = [
    { label: 'Name', value: name },
    { label: 'Birthday', value: formattedDate(birthday) },
    { label: 'Sex', value: wordFromBigLetter(sex) },
    { label: 'Species', value: wordFromBigLetter(species) },
  ];

  const handleToggleHeart = () => {
    if (isFavorite) {
      handleRemoveFavorites(item._id);
      handleModalToggle();
    } else {
      handleAddFavorites(item._id);
      handleModalToggle();
    }
  };

  const handleContact = () => {
    handleModalToggle();
  };

  return (
    <Wrapper>
      <AvatarWrapper>
        <Avatar>
          {imgURL ? (
            <Image src={imgURL} alt="Pet" />
          ) : (
            <UserIconAvatar>
              <use href={sprite + '#icon-pet'}></use>
            </UserIconAvatar>
          )}
        </Avatar>
      </AvatarWrapper>
      <Title>{title}</Title>
      <List>
        {details.map((detail, index) => (
          <ListItem key={index}>
            <Label>{detail.label}</Label>
            <Value> {detail.value}</Value>
          </ListItem>
        ))}
      </List>
      <Text>{comment}</Text>
      <ButtonWrapper>
        <FavoriteBtn type={'button'} onClick={handleToggleHeart}>
          {isFavorite ? 'Remove from' : 'Add to'}
          <Heart>
            {isFavorite ? (
              <IconFavorite>
                <use href={sprite + '#icon-heart'}></use>
              </IconFavorite>
            ) : (
              <IconEmpty>
                <use href={sprite + '#icon-heart'}></use>
              </IconEmpty>
            )}
          </Heart>
        </FavoriteBtn>
        <Button
          type={'button'}
          size={ButtonSize.small}
          variant={ButtonVariant.beige}
          onClick={handleContact}
        >
          Contact
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};
