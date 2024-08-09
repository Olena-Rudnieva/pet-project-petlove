import {
  Backdrop,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from './modal.styled';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  width?: string;
  closeOnBackdropClick?: boolean;
}

export const Modal = ({
  isOpen,
  onClose,
  title,
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

  return (
    <Backdrop onClick={handleBackdropClick}>
      <ModalContent width={width}>
        {title && (
          <ModalHeader>
            <h2>{title}</h2>
          </ModalHeader>
        )}
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <button onClick={onClose}>Close</button>
        </ModalFooter>
      </ModalContent>
    </Backdrop>
  );
};
