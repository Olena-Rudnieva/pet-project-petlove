// import { formattedDate } from 'utils';
import {
  BottomList,
  Image,
  ImageWrapper,
  Link,
  NewsItemWrapper,
  Text,
  Title,
} from './newsItem.styled';

export const NewsItem = ({ item }: any) => {
  const { title, text, imgUrl, url } = item;

  return (
    <NewsItemWrapper>
      <div>
        <ImageWrapper>
          <Image src={imgUrl} alt={title} />
        </ImageWrapper>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </div>
      <BottomList>
        {/* <Date>{formattedDate(date)}</Date> */}
        <Link to={url} target="_blank" rel="noopener noreferrer">
          Read more
        </Link>
      </BottomList>
    </NewsItemWrapper>
  );
};
