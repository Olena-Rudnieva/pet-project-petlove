import {
  FemaleIcon,
  MaleIcon,
  MultipleIcon,
  SelectionWrapper,
  StyledRadioWrapper,
} from './genderSelection.styled';
import { Field } from 'formik';
import sprite from 'assets/sprite.svg';
import { useState } from 'react';

interface GenderSelectionProps {
  setFieldValue: (field: string, value: any) => void;
}

export const GenderSelection = ({ setFieldValue }: GenderSelectionProps) => {
  const [selectedGender, setSelectedGender] = useState<string>('');

  const handleGenderChange = (value: string): void => {
    setSelectedGender(value);
    setFieldValue('sex', value);
  };

  return (
    <SelectionWrapper>
      <StyledRadioWrapper
        backgroundcolor={
          selectedGender === 'female' ? '#F43F5E' : 'rgba(244, 63, 94, 0.1)'
        }
        bordercolor="transparent"
      >
        <label>
          <Field
            type="radio"
            name="sex"
            value="female"
            onChange={() => handleGenderChange('female')}
          />
          <span>
            <FemaleIcon selected={selectedGender === 'female'}>
              <use href={sprite + '#icon-female'}></use>
            </FemaleIcon>
          </span>
        </label>
      </StyledRadioWrapper>

      <StyledRadioWrapper
        backgroundcolor={
          selectedGender === 'male' ? '#4792d8' : 'rgba(84, 173, 255, 0.1)'
        }
        bordercolor="transparent"
      >
        <label>
          <Field
            type="radio"
            name="sex"
            value="male"
            onChange={() => handleGenderChange('male')}
          />
          <span>
            <MaleIcon selected={selectedGender === 'male'}>
              <use href={sprite + '#icon-male'}></use>
            </MaleIcon>
          </span>
        </label>
      </StyledRadioWrapper>
      <StyledRadioWrapper
        backgroundcolor={selectedGender === 'mixed' ? '#e1c184' : '#FFF4DF'}
        bordercolor="transparent"
      >
        <label>
          <Field
            type="radio"
            name="sex"
            value="mixed"
            onChange={() => handleGenderChange('mixed')}
          />
          <span>
            <MultipleIcon selected={selectedGender === 'mixed'}>
              <use href={sprite + '#icon-multiple'}></use>
            </MultipleIcon>
          </span>
        </label>
      </StyledRadioWrapper>
    </SelectionWrapper>
  );
};
