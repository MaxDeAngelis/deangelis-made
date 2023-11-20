import { useCallback } from 'react';
import FieldListProps from './FieldList.types';

const useHandleAdd = (
  genericChange: FieldListProps['onChange'],
  propName: FieldListProps['propName'],
  list: { text: string; heading?: boolean }[],
): any =>
  useCallback(
    (heading: boolean, selectedIndex: number | null) => {
      const newItem: { text: string; heading?: boolean } = {
        text: '',
        heading: heading || undefined,
      };
      if (selectedIndex !== null) {
        list.splice(selectedIndex + 1, 0, newItem);
        genericChange(propName, [...list]);
      } else {
        genericChange(propName, [...list, newItem]);
      }
    },
    [list],
  );

export default useHandleAdd;
