import { useMemo } from 'react';
import { FieldListPropsReadOnly } from './FieldList.types';

import { OL, UL } from './FieldList.styles';

import Label from '../Label';

type SubGroup = { label?: string; items: string[] };

function FieldListReadOnly({
  label,
  list,
  ordered,
}: FieldListPropsReadOnly): JSX.Element {
  const groupedList: SubGroup[] = useMemo(() => {
    const grouped: SubGroup[] = [];
    let currentSubGroup: SubGroup = { items: [] };

    list.forEach(({ heading, text }) => {
      if (heading) {
        // TODO: If the first group does not have a header, add to the main grouping when
        // a group with a header is found. Idealy I should prevent this from ever happening
        // However, it does not look too bad
        if (
          currentSubGroup.items.length > 0 &&
          grouped.includes(currentSubGroup) === false
        ) {
          grouped.push(currentSubGroup);
        }
        currentSubGroup = {
          label: text,
          items: [],
        };
        grouped.push(currentSubGroup);
      } else {
        currentSubGroup.items.push(text);
      }
    });
    if (grouped.length === 0) grouped.push(currentSubGroup);
    return grouped;
  }, [list]);

  const ListComp = ordered ? OL : UL;
  return (
    <Label>
      {label}
      {groupedList.map((group) => {
        const sublist = (
          <ListComp>
            {group.items.map((item) => (
              <li>{item}</li>
            ))}
          </ListComp>
        );
        if (group.label) {
          return (
            <Label>
              {group.label}
              {sublist}
            </Label>
          );
        }
        return sublist;
      })}
    </Label>
  );
}

export default FieldListReadOnly;
