import FieldListProps from './FieldList.types';

import { Input, TextArea, Heading, OL, UL, Row } from './FieldList.styles';
import Label from '../Label';
import Button from '../Button';

import Trash from './Trash.svg';
import Plus from './Plus.svg';

function FieldList({
  label,
  list,
  variant,
  ordered,
  propName,
  onChange,
}: FieldListProps): JSX.Element {
  const ListComponent: React.ElementType = ordered === true ? OL : UL;

  return (
    <div>
      <Label htmlFor={propName}>{label}</Label>
      <ListComponent>
        {list.map(({ text: rowText, heading }, rowIndex) => {
          let FormComponent: React.ElementType =
            variant === 'multi' ? TextArea : Input;

          if (heading) FormComponent = Heading;
          return (
            // TODO: Find better key, problem is that there is no idea since it is generated on server
            // eslint-disable-next-line react/no-array-index-key
            <li key={rowIndex}>
              <Row>
                <FormComponent
                  type='text'
                  value={rowText}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    onChange(
                      propName,
                      list.map(({ text: storedText, ...restProps }, i) => ({
                        text: i === rowIndex ? e.target.value : storedText,
                        ...restProps,
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
          );
        })}
      </ListComponent>
      <Button
        type='button'
        onClick={() => onChange(propName, [...list, { text: '' }])}
      >
        <img src={Plus} alt='add' />
        Add
      </Button>
      <Button
        type='button'
        onClick={() => {
          const newItem = {
            text: '',
            heading: true,
          };
          const newList =
            list[0]?.heading === true ? [...list, newItem] : [newItem, ...list];
          onChange(propName, newList);
        }}
      >
        <img src={Plus} alt='add' />
        Add header
      </Button>
    </div>
  );
}
export default FieldList;
