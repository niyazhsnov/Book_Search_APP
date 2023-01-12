import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
export const ModalDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: #fff;
  padding: 50px 25px;
  z-index: 1000;
  border-radius: 2;
  transition: 0.5s all;
  width: 40%;
  transform: translate(-50%, -50%);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;
export const CloseIcon = styled(AiOutlineCloseCircle)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 30px;
  color: #ff2800;
  transition: 0.2s all;
  &:hover {
    color: red;
    cursor: pointer;
  }
`;
export const Image = styled.img`
  width: 25%;
  height: 200px;
  margin-left: auto;
  object-fit: contain;
  float: left;
  margin-right: auto;
`;

export const TextContainer = styled.div`
  width: 70%;
  float: left;
  margin: 10px 0;
  box-sizing: border-box;
  padding: 5px 15px;
`;

export const Title = styled.h4`
  padding: 10px 15px;
  text-align: center;
  margin: 0px;
`;

export const Desc = styled.p`
  max-height: 400px;
  overflow: auto;
  word-spacing: 1px;
  letter-spacing: 0.2px;
  line-height: 22px;
  font-size: 14px;
`;
export const Author = styled.h5`
  margin: 2px;
  display: inline-block;
  background-color: rgba(220, 220, 220, 0.4);
  padding: 6px;
  border-radius: 20px;
  color: black;
`;

export const Date = styled.p`
  text-align: center;
  margin-bottom: 10px;
  color: rgba(120, 120, 120);
  margin-top: -5px;
`;
