import heroImgDesktop from 'assets/images/heroImgDesktop.jpg';
import heroImgTablet from 'assets/images/heroImgTablet.jpg';
import heroImgMobile from 'assets/images/heroImgMobile.jpg';
import {
  Accent,
  HeroWrapper,
  Image,
  Text,
  TextWrapper,
  Title,
} from './hero.styled';
import { useMediaQuery } from 'react-responsive';

export const Hero = () => {
  const ismobile = useMediaQuery({ query: '(max-width: 767px)' });
  const istablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1279px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  return (
    <HeroWrapper>
      <TextWrapper>
        <Title>
          Take good <Accent>care</Accent> of your small pets
        </Title>
        <Text>
          Choosing a pet for your home is a choice that is meant to enrich your
          life with immeasurable joy and tenderness.
        </Text>
      </TextWrapper>

      {ismobile && <Image src={heroImgMobile} alt="Girl with a dog" />}
      {istablet && <Image src={heroImgTablet} alt="Girl with a dog" />}
      {isDesktop && <Image src={heroImgDesktop} alt="Girl with a dog" />}
    </HeroWrapper>
  );
};
