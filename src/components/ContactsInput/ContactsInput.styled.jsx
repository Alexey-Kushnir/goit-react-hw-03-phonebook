import styled from 'styled-components';

export const Container = styled.form`
  /* height: 200px; */
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 10px;
`;

export const InputName = styled.label`
  font-size: 20px;
  font-weight: normal;
  margin: 10px 10px 10px 0px;
`;

export const InputValue = styled.input`
  height: 22px;
  font-size: 16px;
`;

export const SubmitButton = styled.button`
  font-size: 14px;
  cursor: pointer;
`;
