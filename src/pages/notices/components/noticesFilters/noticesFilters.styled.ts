import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const Label = styled.label`
  position: absolute;
  top: -28px;
  color: var(--grey);
  font-weight: 500;
  line-height: 1.28;
`;

export const LeftInput = styled.input`
  width: 120px;
  height: 48px;
  padding: 14px 41px 14px 24px;
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background: #f7f7fb;
  border: 1px solid transparent;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  font-weight: 500;
  font-size: 18px;
  outline: none;
  color: var(--black);

  &:hover,
  &:focus {
    border: 1px solid #2684ff;
  }

  &::placeholder {
    color: var(--black);
    font-family: Manrope;
    font-size: 14px;
    font-weight: 500;
  }

  @media (min-width: 768px) {
    width: 160px;
    &::placeholder {
      font-size: 18px;
    }
  }
`;

export const RightInput = styled.input`
  width: 120px;
  height: 48px;
  padding: 14px 41px 14px 24px;
  border-radius: 0px 14px 14px 0px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background: #f7f7fb;
  border: 1px solid transparent;
  border-right: none;
  font-weight: 500;
  font-size: 18px;
  outline: none;
  color: var(--black);

  &:hover,
  &:focus {
    border: 1px solid #2684ff;
  }

  &::placeholder {
    color: var(--black);
    font-family: Manrope;
    font-size: 14px;
    font-weight: 500;
  }
`;

export const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    width: '100%',
    padding: '8px 8px 8px 14px',
    fontSize: '16px',
    color: '#000',
    fontWeight: '500',
    lineHeight: '20px',
    letterSpacing: '3%',
    border: state.isFocused ? '1px solid #F6B83D' : '1px solid #e0e0e0',
    borderRadius: '30px',
    boxShadow: 'none',
    '&:hover': {
      borderColor: '#F6B83D',
    },
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: '#a0a0a0',
    fontWeight: '400',
  }),
  menu: (provided: any) => ({
    ...provided,
    borderRadius: '10px',
    marginTop: '0',
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#F6B83D' : '#fff',
    color: state.isSelected ? '#fff' : '#000',
    border: 'none',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: '#F6B83D',
      color: '#fff',
    },
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: '#000',
  }),
};
