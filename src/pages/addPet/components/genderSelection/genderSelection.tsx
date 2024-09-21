import {
  FemaleIcon,
  MaleIcon,
  MultipleIcon,
  SelectionWrapper,
  StyledRadioWrapper,
} from './genderSelection.styled';
import { Field } from 'formik';
import sprite from 'assets/sprite.svg';

export const GenderSelection = () => {
  return (
    <SelectionWrapper>
      <StyledRadioWrapper backgroundcolor="#eb1035" bordercolor="#892d3e">
        <label>
          <Field type="radio" name="sex" value="female" />
          <span>
            <FemaleIcon>
              <use href={sprite + '#icon-female'}></use>
            </FemaleIcon>
          </span>
        </label>
      </StyledRadioWrapper>

      <StyledRadioWrapper
        backgroundcolor="rgba(84, 173, 255, 0.1)"
        bordercolor="rgba(49, 87, 125, 0.3)"
      >
        <label>
          <Field type="radio" name="sex" value="male" />
          <span>
            <MaleIcon>
              <use href={sprite + '#icon-male'}></use>
            </MaleIcon>
          </span>
        </label>
      </StyledRadioWrapper>
      <StyledRadioWrapper backgroundcolor="#FFF4DF" bordercolor="#e1c184">
        <label>
          <Field type="radio" name="sex" value="mixed" />
          <span>
            <MultipleIcon>
              <use href={sprite + '#icon-multiple'}></use>
            </MultipleIcon>
          </span>
        </label>
      </StyledRadioWrapper>
    </SelectionWrapper>
  );
};
