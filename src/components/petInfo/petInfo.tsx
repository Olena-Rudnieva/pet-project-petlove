import { Pet } from 'types';
import {
  Accent,
  Avatar,
  Image,
  InfoText,
  InfoWrapper,
  Text,
  TextWrapper,
  Title,
} from './petInfo.styled';

interface PetInfoProps {
  pet: Pet.Pet;
}

export const PetInfo = ({ pet }: PetInfoProps) => {
  const { avatar, name, birthday, description } = pet;
  return (
    <InfoWrapper>
      <Avatar>
        <Image src={avatar} alt="Avatar" />
      </Avatar>
      <div>
        <TextWrapper>
          <Title>{name}</Title>
          <Text>
            Birthday: <Accent>{birthday}</Accent>
          </Text>
        </TextWrapper>
        <InfoText>{description}</InfoText>
      </div>
    </InfoWrapper>
  );
};
