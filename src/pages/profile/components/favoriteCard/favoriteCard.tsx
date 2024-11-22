import { Notice } from 'types';
import {
  Image,
  ImageWrapper,
  Label,
  List,
  ListItem,
  NoticesItemWrapper,
  Text,
  Title,
  Value,
} from './favoriteCard.styled';
import { formattedDate, wordFromBigLetter } from 'utils';

interface FavoriteCardProps {
  item: Notice;
}

export const FavoriteCard = ({ item }: FavoriteCardProps) => {
  const { title, imgURL, comment } = item;

  const details = [
    { label: 'Name', value: item.name },
    { label: 'Birthday', value: formattedDate(item.birthday) },
    { label: 'Sex', value: wordFromBigLetter(item.sex) },
    { label: 'Species', value: wordFromBigLetter(item.species) },
    { label: 'Category', value: wordFromBigLetter(item.category) },
  ];

  return (
    <NoticesItemWrapper>
      <ImageWrapper>
        <Image src={imgURL} alt={title} />
      </ImageWrapper>
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
    </NoticesItemWrapper>
  );
};
