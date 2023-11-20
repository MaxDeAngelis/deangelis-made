import { useMemo } from 'react';
import { RecipeListItemProps } from '../../types/recipe.types';
import { SubGroup } from './FieldList.types';

const groupedList = (list: RecipeListItemProps[]): SubGroup[] =>
  useMemo(() => {
    const grouped: SubGroup[] = [];
    let currentSubGroup: SubGroup = { originalIndex: 0, items: [] };

    list.forEach(({ heading, text }, originalIndex) => {
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
          text,
          originalIndex,
          items: [],
        };
        grouped.push(currentSubGroup);
      } else {
        currentSubGroup.items.push({
          text,
          originalIndex,
        });
      }
    });
    if (grouped.length === 0) grouped.push(currentSubGroup);
    return grouped;
  }, [list]);
export default groupedList;
