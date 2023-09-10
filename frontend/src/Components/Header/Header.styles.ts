import { styled } from 'styled-components';

export const StyledIcon = styled.a`
  display: flex;
  margin: 0.5rem;
  width: 6rem;
`;

export const StyledLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #4caf50;
  padding: 0 1rem;
`;

export const StyledHeader = styled.nav`
  height: 6rem;
  display: flex;
  background-color: white;
  z-index: 10;
  box-shadow: 0 0.125rem 0.375rem rgb(0 0 0 / 15%);
  position: fixed;
  width: 100%;
`;

export const StyledHeaderContent = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & > * {
    margin: 0 1rem 0 0;
  }
`;
