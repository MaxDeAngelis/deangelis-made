import useGroupedList from './useGroupedList';
import { FieldListPropsReadOnly, SubGroup } from './FieldList.types';

import { OL, UL } from './FieldList.styles';

import Label from '../Label';

function FieldListReadOnly({
  label,
  list,
  ordered,
}: FieldListPropsReadOnly): JSX.Element {
  const groupedList: SubGroup[] = useGroupedList(list);
  const ListComp = ordered ? OL : UL;

  return (
    <div>
      <Label varient='large'>{label}</Label>
      {groupedList.map((group) => {
        const sublist = (
          <ListComp key={group.originalIndex}>
            {group.items.map((item) => (
              <li key={item.originalIndex}>{item.text}</li>
            ))}
          </ListComp>
        );
        if (group.text) {
          return (
            <Label key={group.originalIndex}>
              {group.text}
              {sublist}
            </Label>
          );
        }
        return sublist;
      })}
    </div>
  );
}

export default FieldListReadOnly;
