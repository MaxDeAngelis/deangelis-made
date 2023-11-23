import { useState } from 'react';
import useGroupedList from './useGroupedList';
import useHandleChange from './useHandleChange';
import useHandleDelete from './useHandleDelete';
import useHandleAdd from './useHandleAdd';
import FieldListProps, { SubGroup } from './FieldList.types';

import { Input, TextArea, Heading, OL, UL, Row } from './FieldList.styles';
import Label from '../Label';
import Button from '../Button';

import Trash from './Trash.svg';
import Plus from './Plus.svg';

function Add({
  text,
  onClick,
}: {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <Button type='button' onClick={onClick}>
      <img src={Plus} alt='add' />
      {text}
    </Button>
  );
}

function Delete({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <Button shape='round' type='button' onClick={onClick}>
      <img src={Trash} alt='delete' />
    </Button>
  );
}

function FieldList({
  label,
  list,
  variant,
  ordered,
  propName,
  onChange,
}: FieldListProps): JSX.Element {
  const handleChange = useHandleChange(onChange, propName, list);
  const handleDelete = useHandleDelete(onChange, propName, list);
  const handleAdd = useHandleAdd(onChange, propName, list);
  const groupedList: SubGroup[] = useGroupedList(list);
  const [focused, setFocused] = useState<number | null>(null);
  const [added, setAdded] = useState<boolean>(false);
  const ListComponent: React.ElementType = ordered === true ? OL : UL;
  const FormComponent: React.ElementType =
    variant === 'multi' ? TextArea : Input;
  return (
    <div>
      <Label varient='large'>{label}</Label>
      {groupedList.map((group) => {
        const sublist = (
          <ListComponent>
            {group.items.map(({ text, originalIndex }) => (
              <li key={originalIndex}>
                <Row>
                  <FormComponent
                    type='text'
                    value={text}
                    placeholder={`Please add a new ${label
                      .toLowerCase()
                      .substring(0, label.length - 1)}`}
                    ref={(input: HTMLInputElement) => {
                      if (added && input && originalIndex === focused) {
                        input.focus();
                        setAdded(false);
                      }
                    }}
                    onFocus={() => setFocused(originalIndex)}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleChange(e.target.value, originalIndex)
                    }
                  />
                  <Delete onClick={() => handleDelete(originalIndex)} />
                </Row>
              </li>
            ))}
          </ListComponent>
        );
        return (
          <div key={group.originalIndex}>
            {group.text !== undefined && (
              <Row>
                <Heading
                  type='text'
                  value={group.text}
                  placeholder='Please add a heading'
                  ref={(input: HTMLInputElement) => {
                    if (added && input && group.originalIndex === focused) {
                      input.focus();
                      setAdded(false);
                    }
                  }}
                  onFocus={() => setFocused(group.originalIndex)}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(e.target.value, group.originalIndex)
                  }
                />
                <Delete onClick={() => handleDelete(group.originalIndex)} />
              </Row>
            )}
            {sublist}
          </div>
        );
      })}
      <Add
        text='Add'
        onClick={() => {
          handleAdd(false, focused);
          if (focused) setFocused(focused + 1);
          setAdded(true);
        }}
      />
      <Add
        text='Add header'
        onClick={() => {
          handleAdd(true, focused);
          if (focused) setFocused(focused + 1);
          setAdded(true);
        }}
      />
    </div>
  );
}
export default FieldList;
