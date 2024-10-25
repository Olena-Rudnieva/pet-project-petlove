import styled from 'styled-components';
import { theme } from 'constants/theme';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(38, 38, 38, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div<{ width: string }>`
  background: #fff;
  border-radius: 8px;
  width: ${({ width }) => width};
  max-width: 100%;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const ModalWrapper = styled.div<{ width: string }>`
  position: absolute;
  overflow-y: auto;
  display: flex;
  max-height: 100%;
  width: ${({ width }) => width};
  justify-content: center;
  border-radius: 24px;
  background-color: ${theme.colors.white};
  padding: 50px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  z-index: 200;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
    stroke: ${theme.colors.black};
    transition: transform ${theme.transition}, stroke ${theme.transition};

    &:hover,
    &:focus {
      stroke: ${theme.colors.accent};
      transform: scale(1.2);
    }
  }
`;
