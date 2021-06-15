import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  /* align-items: center; */
  justify-content: space-between;
`;

export const Input = styled.input`
  width: 18rem;
  height: 3rem;
  padding: 1rem;
  border: 0;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
`;

export const ContainerIcon = styled.div`
  display: flex;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: var(--lightGreen);
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
