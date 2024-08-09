import styled, { css } from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
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

export const ModalHeader = styled.div`
  margin-bottom: 20px;
  h2 {
    margin: 0;
  }
`;

export const ModalBody = styled.div`
  margin-bottom: 20px;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;