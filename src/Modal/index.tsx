import * as S from "./style";
import back from "assets/delete.svg";
import Upload from "../pages/upload";

interface ModalProps {
  onClose: () => void;
}

const Modal = ({ onClose }: ModalProps) => {
  return (
    <S.ModalOverlay>
      <S.ModalContentBox>
        <S.ModalHeader>
          <S.ModalText>동영상 업로드</S.ModalText>
          <S.CloseButton src={back} onClick={onClose} />
        </S.ModalHeader>
        <Upload />
      </S.ModalContentBox>
    </S.ModalOverlay>
  );
};

export default Modal;
