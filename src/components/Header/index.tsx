import React from "react";
import logo from "assets/logo.svg";
import search from "assets/search.svg";
import userIcon from "assets/userIcon.svg";
import * as S from "./style";

const Header = () => {
  return (
    <S.Layout>
      <S.Logo src={logo} />
      <S.SearchBox>
        <S.SearchInputBox>
          <S.SearchInput placeholder="검색" />
        </S.SearchInputBox>
        <S.SearchButtonBox>
          <S.Search src={search} />
        </S.SearchButtonBox>
      </S.SearchBox>
      <S.UserBox>
        <S.UserLoginBox>
          <S.UserLoginA href="https://youtube.anys34.com/oauth2/authorization/google">
            <S.UserIcon src={userIcon} />
            로그인
          </S.UserLoginA>
        </S.UserLoginBox>
      </S.UserBox>
    </S.Layout>
  );
};

export default Header;
