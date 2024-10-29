import styled from 'styled-components';

export const SelectionWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

interface StyledRadioWrapperProps {
  backgroundcolor?: string;
  bordercolor?: string;
}

export const StyledRadioWrapper = styled.div<StyledRadioWrapperProps>`
  span {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }

  input[type='radio'] {
    display: none;
  }

  input[type='radio'] + span {
    position: relative;
    background-color: ${props => props.backgroundcolor || 'transparent'};
  }

  input[type='radio']:checked + span::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 38px;
    height: 38px;
    border: 2px solid grey;
    border-color: ${props => props.bordercolor || 'transparent'};
    background-color: transparent;
    border-radius: 50%;
  }
`;

export const FemaleIcon = styled.svg<{ selected?: boolean }>`
  width: 24px;
  height: 24px;
  stroke: ${({ selected }) => (selected ? 'white' : '#f43f5e')};
  fill: transparent;

  &:hover {
    stroke: #892d3e;
  }
`;

export const MaleIcon = styled.svg<{ selected?: boolean }>`
  width: 24px;
  height: 24px;
  stroke: ${({ selected }) => (selected ? 'white' : '#54ADFF')};
  fill: transparent;
  &:hover {
    stroke: #31577d;
  }
`;

export const MultipleIcon = styled.svg<{ selected?: boolean }>`
  width: 24px;
  height: 24px;
  stroke: ${({ selected }) => (selected ? 'white' : '#F6B83D')};
  fill: transparent;
  &:hover {
    stroke: #86714c;
  }
`;
