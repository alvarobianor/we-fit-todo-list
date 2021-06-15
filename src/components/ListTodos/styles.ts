import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 1.5rem;
`;

export const Content = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  align-content: flex-start;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 0.5rem;
`;

export const Square = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: tomato;
`;
