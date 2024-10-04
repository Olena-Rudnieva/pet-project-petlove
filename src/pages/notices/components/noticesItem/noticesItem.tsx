import { ButtonSize, ButtonVariant } from 'types';
import {
  ButtonWrapper,
  Image,
  ImageWrapper,
  Label,
  List,
  ListItem,
  NoticesItemWrapper,
  Text,
  Title,
  Value,
} from './noticesItem.styled';
import { Button } from 'ui';

interface NoticesItemProps {
  item: {
    title: string;
    imgURL: string;
    comment: string;
    name?: string;
    birthday?: string;
    sex?: string;
    species?: string;
    category?: string;
  };
}

export const NoticesItem = ({ item }: NoticesItemProps) => {
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
      <ButtonWrapper>
        <Button
          // padding={'14px 89px'}
          //   width={'257px'}
          size={ButtonSize.small}
          variant={ButtonVariant.orange}
          type="button"
          //   onClick={toggleModal}
        >
          Learn more
        </Button>

        {/* <FavoritesHeart item={item} /> */}
      </ButtonWrapper>
    </NoticesItemWrapper>
  );
};
