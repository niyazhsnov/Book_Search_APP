import styled from "styled-components";
export const Container = styled.div`
  width: 98%;
  margin: auto;
  margin-top: 20px;
  min-height: 55vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Book = styled.div`
  width: 300px;
  margin: 20px;
  display: inline-block;
  text-align: center;
  background-color: white;
  padding: 15px 10px;
  border-radius: 5px;
  box-shadow: rgba(90, 90, 90, 0.54) 0px 3px 8px;
`;

export const Image = styled.img`
  width: 95%;
  height: 220px;
  margin-left: auto;
  object-fit: contain;
  margin-right: auto;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(220, 220, 220);
`;

export const Title = styled.h5`
  margin-top: 10px;
  font-size: 18px;
`;
export const Author = styled.h6`
  margin-top: 0;
  margin-bottom: 15px;
  display: inline-block;
  border-top: 1px solid rgba(220, 220, 220);
  padding: 5px;
  padding-top: 20px;
  font-size: 16px;
  opacity: 0.7;
`;

export const Button = styled.a`
  display: inline-block;
  text-decoration: none;
  color: rgba(120, 120, 120);
  margin: 10px;
  transition: 0.3s all;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const SearchBook = styled.div`
  margin: 80px 0 40px;
  font-size: 45px;
  font-weight: 800;
`;
