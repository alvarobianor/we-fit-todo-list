import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--backgroundGray);
  width: 22rem;
  height: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  align-items: center;
  justify-content: space-between;

  img {
    cursor: pointer;
  }
`;
