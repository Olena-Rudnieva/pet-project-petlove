import {
  Description,
  Image,
  ImageWrapper,
  Link,
  Text,
  TextWrapper,
} from './notFoundDetails.styled';
import notFoundImg from 'assets/images/notFoundImg.png';

export const NotFoundDetails = () => {
  return (
    <>
      <TextWrapper>
        <Text>4</Text>
        <ImageWrapper>
          <Image src={notFoundImg} alt="The Cat" />
        </ImageWrapper>
        <Text>4</Text>
      </TextWrapper>
      <Description>Ooops! This page not found :(</Description>
      <Link to="/">To home page</Link>
    </>
  );
};
