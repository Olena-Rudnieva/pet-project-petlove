import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 16px;
  }
`;

export const UpperWrapper = styled.div`
  display: flex;
  gap: 8px;

  @media (min-width: 768px) {
    gap: 16px;
  }
`;

export const FiltersBlock = styled.div`
  width: 100%;
`;

export const BottomWrapper = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 190px;
  }
`;
