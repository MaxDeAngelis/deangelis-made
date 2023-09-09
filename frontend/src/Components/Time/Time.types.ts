import RecipeProps, { RecipeTimeProps } from '../../types/recipe.types';

export interface TimeProps {
  /** Label to appear before time  */
  label: string;

  /** Amount of time as a number  */
  amount: RecipeTimeProps['amount'];

  /** Unit of measurement used  */
  unit: RecipeTimeProps['unit'];

  /** Boolean flag to control when to display in a read only mode  */
  readonly?: boolean;

  /** Name of prop to store back into the DB and to be used by input for name  */
  propName: keyof RecipeProps;

  /** Change callback, used to pass value back and update recipe state */
  onChange: (propName: keyof RecipeProps, value: any) => void;
}
