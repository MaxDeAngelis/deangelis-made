import FieldListProps from './FieldList.types';

import { Input, TextArea, OL, UL } from './FieldList.styles';

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
    <label htmlFor={propName}>
      {heading}
      <ListComponent>
        {list.map(({ _id: rowId, text: rowText }) => (
          <li key={rowId}>
            <FormComponent
              type='text'
              value={rowText}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                onChange(
                  propName,
                  list.map(({ _id: storedId, text: storedText }) => ({
                    _id: storedId,
                    text: storedId === rowId ? e.target.value : storedText,
                  })),
                );
              }}
            />
          </li>
        ))}
      </ListComponent>
      <button
        type='button'
        onClick={() => onChange(propName, [...list, { text: '' }])}
      >
        Add
      </button>
    </label>
  );
}
export default FieldList;
