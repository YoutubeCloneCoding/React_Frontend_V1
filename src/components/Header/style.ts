import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  width: 100%;
  height: 56px;
`;

export const Logo = styled.img`
  width: 97px;
`;

export const SearchBox = styled.div`
  display: flex;
  flex: 0 1 732px;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const SearchInputBox = styled.div`
  margin-left: 50px;
  max-width: 536px;
  width: 100%;
  height: 40px;
  border-radius: 50px 0 0 50px;
  border: 1px solid #ccc;
  overflow: hidden;
`;

export const SearchInput = styled.input`
  outline: none;
  font-size: 1rem;
  padding-left: 20px;
  width: 100%;
  height: 100%;
  border: none;
`;

export const SearchButtonBox = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 0 50px 50px 0;
  border: 1px solid #ccc;
  border-left: none;
  height: 40px;
  width: 64px;
  background: #f8f8f8;
  &:hover {
    border-color: #c6c6c6;
    background-color: #f0f0f0;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  }
`;

export const Search = styled.img`
  width: 24px;
`;

export const UserBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50px;
  min-width: 225px;
`;

export const UserLoginBox = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  flex-basis: 1e-9px;
`;

export const UserLoginA = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  height: 36px;
  padding: 0 15px;
  border-radius: 18px;
  color: #065fd4;
  text-decoration: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: #def1ff;
    border-color: transparent;
  }
`;

export const UserIcon = styled.img`
  font-size: 24px;
  margin-right: 6px;
  margin-left: -6px;
`;
