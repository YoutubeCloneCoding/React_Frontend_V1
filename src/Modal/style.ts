import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 60rem;
  height: 40rem;
  border-radius: 8px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.3);
`;

export const ModalHeader = styled.div`
  display: flex;
  border-bottom: solid 2px #f1f3f5;
`;

export const ModalText = styled.p`
  display: flex;
  font-size: 20px;
  padding: 2%;
`;

export const CloseButton = styled.img`
  display: flex;
  cursor: pointer;
  margin-left: auto;
  padding: 2%;
`;
