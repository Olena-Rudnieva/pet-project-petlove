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

interface FavoriteCardProps {
  item: Notice;
}

export const FavoriteCard = ({ item }: FavoriteCardProps) => {
  const { title, imgURL, comment } = item;

  const details = [
    { label: 'Name', value: item.name },
    { label: 'Birthday', value: item.birthday },
    { label: 'Sex', value: item.sex },
    { label: 'Species', value: item.species },
    { label: 'Category', value: item.category },
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
