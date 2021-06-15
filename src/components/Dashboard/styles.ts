import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 25rem;
  width: 25rem;
  background-color: var(--background);

  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 1.5rem;
`;
export const Background = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: var(--background);
`;
