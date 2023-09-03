import { Container, Row, Info, Icon, Title, Author } from './RecipeList.styles';

import RecipeListProps from './RecipeList.types';

function RecipeList({ heading, recipes }: RecipeListProps): JSX.Element {
  return (
    <>
      <h2>{heading}</h2>
      <Container>
        {recipes.map(({ id, image, name, url, author }) => (
          <Row key={id} href={`/recipe/${url}`}>
            <Icon src={image} />
            <Info>
              <Title>{name}</Title>
              <Author>{author}</Author>
            </Info>
          </Row>
        ))}
      </Container>
    </>
  );
}
export default RecipeList;
