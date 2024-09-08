import { StyledTitle } from './title.styled';

interface TitleProps {
  name: string;
}

export const Title = ({ name }: TitleProps) => {
  return <StyledTitle>{name}</StyledTitle>;
};
