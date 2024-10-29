import { PetBlockInfo } from 'types';
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
  pet: PetBlockInfo;
}

export const PetInfo = ({ pet }: PetInfoProps) => {
  const { imgURL, name, birthday, title } = pet;
  return (
    <InfoWrapper>
      <Avatar>
        <Image src={imgURL} alt="Avatar" />
      </Avatar>
      <div>
        <TextWrapper>
          <Title>{name}</Title>
          <Text>
            Birthday: <Accent>{birthday}</Accent>
          </Text>
        </TextWrapper>
        <InfoText>{title}</InfoText>
      </div>
    </InfoWrapper>
  );
};
