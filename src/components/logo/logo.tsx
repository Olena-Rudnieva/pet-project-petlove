import { IconHeart, LogoText, LogoWrapper } from './logo.styled';
import sprite from 'assets/sprite.svg';

export const Logo = () => {
  return (
    <LogoWrapper>
      <LogoText>petl</LogoText>
      <IconHeart>
        <use href={sprite + '#icon-logo-heart'}></use>
      </IconHeart>
      <LogoText>ve</LogoText>
    </LogoWrapper>
  );
};
