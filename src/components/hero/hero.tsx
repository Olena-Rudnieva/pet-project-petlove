import heroImg from 'assets/images/heroImg.jpg';
import {
  Accent,
  HeroWrapper,
  Image,
  Text,
  TextWrapper,
  Title,
} from './hero.styled';

export const Hero = () => {
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

      <Image src={heroImg} alt="Girl with a dog" />
    </HeroWrapper>
  );
};
