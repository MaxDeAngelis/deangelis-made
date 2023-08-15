import { styled } from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 50rem;
  margin: auto;
  row-gap: 1rem;
`;

export const Row = styled.a`
  display: grid;
  grid-template-columns: minmax(10px, 1fr) 5fr;
  column-gap: 1rem;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h3`
  border-bottom: 1px solid gray;
  margin: 5px 0;
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
  border-top: 1px solid gray;
  margin: 5px 0;
`;
