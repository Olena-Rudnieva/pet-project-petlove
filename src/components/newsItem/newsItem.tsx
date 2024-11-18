import { formattedDateForNews } from 'utils';
import {
  BottomList,
  Date,
  Image,
  ImageWrapper,
  Link,
  NewsItemWrapper,
  Text,
  Title,
} from './newsItem.styled';

export const NewsItem = ({ item }: any) => {
  const { title, text, imgUrl, url, date } = item;

  return (
    <NewsItemWrapper>
      <ImageWrapper>
        <Image src={imgUrl} alt={title} />
      </ImageWrapper>
      <Title>{title}</Title>
      <Text>{text}</Text>
      <BottomList>
        <Date>{formattedDateForNews(date)}</Date>
        <Link to={url} target="_blank" rel="noopener noreferrer">
          Read more
        </Link>
      </BottomList>
    </NewsItemWrapper>
  );
};
