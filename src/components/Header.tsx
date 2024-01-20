import useUser from "hooks/useUser";
import logo from "assets/logo.svg";
import search from "assets/search.svg";
import userIcon from "assets/userIcon.svg";
import UserModal from "./UserModal";
import useModal from "hooks/useModal";
import Modal from "Modal/index";
import useModalOpen from "hooks/useModalOpen";

const Header = () => {
  const { isModalOpen, setIsModalOpen } = useModal();
  const { issModalOpen, handleCloseModal, handleModalClick } = useModalOpen();
  const { user, isLogin, logout } = useUser();

  return (
    <div className="flex justify-between items-center px-[50px] h-[56px]">
      <img
        className="w-[97px] cursor-pointer"
        src={logo}
        alt="로고"
        onClick={() => (window.location.href = "/")}
      />
      <div className="flex basis-[732px] justify-end items-center">
        <div className="flex basis-[536px] ml-[50px] h-[40px] border-[1px] rounded-s-[50px] border-border-gray overflow-hidden">
          <input
            className="outline-0 text-base pl-[20px] size-full border-0"
            placeholder="검색"
          />
        </div>
        <div
          className="flex cursor-pointer justify-center items-center border-[1px] border-l-0 rounded-r-[50px] border-border-gray hover:border-hover-border-gray w-[64px] h-[40px] bg-button-gray hover:bg-hover-button-gray hover:shadow-sm"
          onClick={handleModalClick}
        >
          <img src={search} alt="검색" />
        </div>
      </div>
      <div className="flex justify-end w-[50px] min-w-[225px]">
        <div className="flex flex-1 justify-end">
          {isLogin ? (
            <img
              className="rounded-full size-[32px] cursor-pointer"
              src={user.profile}
              alt="아이콘"
              onClick={() => setIsModalOpen(true)}
            />
          ) : (
            <a
              className="flex justify-center items-center text-sm text-login-blue h-[36px] px-[15px] border-[1px] border-back/[.1] rounded-full hover:bg-hover-login-bg hover:border-transparent"
              href="https://youtube.anys34.com/oauth2/authorization/google"
            >
              <img
                className="ml-[-6px] mr-[6px]"
                src={userIcon}
                alt="유저아이콘"
              />
              로그인
            </a>
          )}
        </div>
      </div>
      {isModalOpen && <UserModal user={user} logout={logout} />}
      {issModalOpen && <Modal onClose={handleCloseModal} />}
    </div>
  );
};

export default Header;
