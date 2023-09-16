import {
  Container,
  Row,
  Info,
  Icon,
  Title,
  Author,
  Time,
} from './RecipeList.styles';
import RecipeListProps from './RecipeList.types';

function RecipeList({ heading, recipes }: RecipeListProps): JSX.Element {
  return (
    <>
      {heading && <h2>{heading}</h2>}
      <Container>
        {recipes.map(({ image, name, url, prepTime, cookTime, author }) => (
          <Row key={url} href={`/recipe/${url}`}>
            <Icon src={image} />
            <Info>
              <Title>{name}</Title>
              <Author>{author}</Author>
              <Time>
                <label htmlFor='prepTime'>
                  Prep
                  <span>{`${prepTime.amount} ${prepTime.unit}`}</span>
                </label>
                <label htmlFor='cookTime'>
                  Cook
                  <span>{`${cookTime.amount} ${cookTime.unit}`}</span>
                </label>
              </Time>
            </Info>
          </Row>
        ))}
      </Container>
    </>
  );
}
export default RecipeList;
