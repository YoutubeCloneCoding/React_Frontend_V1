import back from "assets/delete.svg";
import Upload from "pages/upload";

interface ModalProps {
  onClose: () => void;
}

const Modal = ({ onClose }: ModalProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div
        id="scroll"
        className="flex flex-col w-3/5 h-5/6 rounded-lg bg-white shadow-md "
      >
        <div className="flex  border-b-2 border-hr-gray">
          <p className="flex text-base p-3 text-xl">동영상 업로드</p>
          <img
            className="flex cursor-pointer ml-auto p-4"
            src={back}
            alt=""
            onClick={onClose}
          />
        </div>
        <Upload />
      </div>
    </div>
  );
};

export default Modal;
