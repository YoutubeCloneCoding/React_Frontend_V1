import IUser from "interfaces/IUser";
import logoutImg from "assets/logout.svg";
import makeVideo from "assets/makeVideo.svg";
import React from "react";

interface UserModalProps {
  user: IUser;
  logout: () => void;
}

const UserModal = ({ user, logout }: UserModalProps) => {
  return (
    <div
      id="modal"
      className="fixed top-[45px] left-[calc(100%-340px)] w-[300px] bg-white shadow-[0_4px_32px_0_rgba(0,0,0,0.1)] rounded-[12px]"
    >
      <div className="flex p-[16px]">
        <img
          className="rounded-full size-[40px] cursor-pointer mr-[16px]"
          src={user.profile}
          alt="아이콘"
        />
        <div>
          <div>{user.nickname}</div>
          <div className="mb-[5px] break-all">{user.email}</div>
          <a
            className="text-login-blue text-[14px]"
            href="https://www.youtube.com/channel/UCh5Crce0bSXb-sms3pizhsw"
          >
            내 채널 보기
          </a>
        </div>
      </div>
      <hr />
      <div className="py-[8px]">
        <div
          className="flex items-center cursor-pointer px-[16px] py-[6px] hover:bg-black/[0.05]"
        >
          <img src={makeVideo} alt="영상 만들기" />
          <div className="ml-[16px] text-[14px] text-text-gray">만들기</div>
        </div>
      </div>
      <div className="pb-[8px]">
        <div
          onClick={logout}
          className="flex items-center cursor-pointer px-[16px] py-[6px] hover:bg-black/[0.05]"
        >
          <img src={logoutImg} alt="로그아웃" />
          <div className="ml-[16px] text-[14px] text-text-gray">로그아웃</div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
