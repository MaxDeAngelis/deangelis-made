import {
  Container,
  Row,
  Info,
  Icon,
  Title,
  Description,
  Author,
} from './RecipeList.styles';

type RecipeSummary = {
  id: number;
  image: string;
  name: string;
  url: string;
  description: string;
  author: string;
};

type RecipeListProps = {
  heading: string;
  recipes: RecipeSummary[];
};

function RecipeList({ heading, recipes }: RecipeListProps): JSX.Element {
  return (
    <Container>
      <h2>{heading}</h2>
      {recipes.map(({ id, image, name, url, description, author }) => (
        <Row key={id} href={`/recipe/${url}`}>
          <Icon src={image} />
          <Info>
            <Title>{name}</Title>
            <Description>{description}</Description>
            <Author>{author}</Author>
          </Info>
        </Row>
      ))}
    </Container>
  );
}
export default RecipeList;