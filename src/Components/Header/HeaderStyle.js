import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

export const Container = styled.div`
  background-image: url("img/background.jpg");
  background-color: #cccccc;
  height: 350px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Head = styled.h1`
  margin: 0;
  display: block;
  color: white;
  text-align: center;
  margin-bottom: 20px;
`;

export const SearchInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  font-family: "Bitter", serif;
`;

export const Connective = styled.div`
  width: 40%;
  display: block;
  position: relative;
  box-sizing: border-box;
`;
export const SearchIcon = styled(BsSearch)`
  position: absolute;
  font-size: 20px;
  top: 14px;
  right: 8px;
`;
export const SearchInputCont = styled.div`
  width: 100%;
  position: relative;
`;
