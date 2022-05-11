import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  align-items: center;
  background-color: lightblue;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Input = styled.input`
  border-radius: 10px;
  border-color: black;
  border-width: 1px;
  width: 100px;
  height: 50px;
  line-height: 10;
`;

export const SubmitButton = styled.button`
  border-radius: 10px;
  border-color: black;
  border-width: 1px;
  width: 100px;
  height: 50px;
  cursor: pointer;
`;
