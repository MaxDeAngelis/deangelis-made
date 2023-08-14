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
  icon: string;
  title: string;
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
      {recipes.map(({ id, icon, title, description, author }) => (
        <Row key={id}>
          <Icon src={icon} />
          <Info>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Author>{author}</Author>
          </Info>
        </Row>
      ))}
    </Container>
  );
}
export default RecipeList;
