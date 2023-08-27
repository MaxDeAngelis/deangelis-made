import FieldListProps from './FieldList.types';

import { Input, TextArea, OL, UL, Row } from './FieldList.styles';
import Label from '../Label';
import Button from '../Button';

import Trash from './Trash.svg';
import Plus from './Plus.svg';

function FieldList({
  heading,
  list,
  variant,
  ordered,
  propName,
  onChange,
}: FieldListProps): JSX.Element {
  const ListComponent: React.ElementType = ordered === true ? OL : UL;

  const FormComponent: React.ElementType =
    variant === 'multi' ? TextArea : Input;

  return (
    <Label htmlFor={propName}>
      {heading}
      <ListComponent>
        {list.map(({ _id: rowId, text: rowText }, rowIndex) => (
          <li key={rowId}>
            <Row>
              <FormComponent
                type='text'
                value={rowText}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  onChange(
                    propName,
                    list.map(({ _id: storedId, text: storedText }, i) => ({
                      _id: storedId,
                      text: i === rowIndex ? e.target.value : storedText,
                    })),
                  );
                }}
              />
              <Button
                shape='round'
                type='button'
                onClick={() =>
                  onChange(
                    propName,
                    list.filter((_, i) => i !== rowIndex),
                  )
                }
              >
                <img src={Trash} alt='delete' />
              </Button>
            </Row>
          </li>
        ))}
      </ListComponent>
      <Button
        type='button'
        onClick={() => onChange(propName, [...list, { text: '' }])}
      >
        <img src={Plus} alt='add' />
        Add
      </Button>
    </Label>
  );
}
export default FieldList;
