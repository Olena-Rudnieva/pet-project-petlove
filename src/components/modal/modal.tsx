import { Backdrop, CloseButton, ModalWrapper } from './modal.styled';
import ReactDOM from 'react-dom';
import { IoMdClose } from 'react-icons/io';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  width?: string;
  closeOnBackdropClick?: boolean;
}

export const Modal = ({
  isOpen,
  onClose,
  children,
  width = '500px',
  closeOnBackdropClick = true,
}: ModalProps) => {
  if (!isOpen) return null;

  const handleBackdropClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (closeOnBackdropClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalWrapper width={width}>
        <CloseButton onClick={onClose}>
          <IoMdClose size="24" />
        </CloseButton>
        {children}
      </ModalWrapper>
    </Backdrop>,
    document.getElementById('modal') as HTMLElement
  );
};
