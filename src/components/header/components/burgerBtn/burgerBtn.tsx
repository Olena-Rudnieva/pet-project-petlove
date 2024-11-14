import { BurgerBtnWrapper, BurgerIcon } from './burgerBtn.styled';
import sprite from 'assets/sprite.svg';

type BurgerBtnProps = {
  onClick: () => void;
};

export const BurgerBtn = ({ onClick }: BurgerBtnProps) => {
  return (
    <BurgerBtnWrapper onClick={onClick}>
      <BurgerIcon>
        <use href={sprite + '#icon-burger-menu'}></use>
      </BurgerIcon>
    </BurgerBtnWrapper>
  );
};
