import { styled } from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1rem;
  column-gap: 1rem;
`;

export const Row = styled.a`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  text-decoration: none;
  color: black;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    & h3 {
      text-decoration: underline;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Icon = styled.img`
  background-color: gray;
  aspect-ratio: 1/1;
  width: 100%;
  /* TEMP */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  color: white;
`;
export const Description = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
`;
export const Author = styled.h4`
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  color: gray;
`;
