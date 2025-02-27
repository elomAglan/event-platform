import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  animation: fadeIn 0.3s ease-in-out forwards;
  backdrop-filter: blur(5px);

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalContainer = styled.div`
  background: white;
  padding: 25px;
  border-radius: 12px;
  width: 90%;
  max-width: 450px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transform: translateY(-20px) scale(0.95);
  opacity: 0;
  animation: slideZoomIn 0.3s ease-in-out forwards;
  transition: all 0.3s ease-in-out;

  @keyframes slideZoomIn {
    from {
      transform: translateY(-20px) scale(0.95);
      opacity: 0;
    }
    to {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding-bottom: 12px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  color: #777;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #d9534f;
  }
`;

const ModalBody = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 12px; /* Ajoute un espacement entre les éléments */
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const Modal = ({ title, children, onClose }) => {
  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <Header>
          <h2>{title}</h2>
          <CloseButton onClick={onClose}>✖</CloseButton>
        </Header>
        <ModalBody>{children}</ModalBody>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
