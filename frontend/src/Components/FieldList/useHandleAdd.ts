import { useCallback } from 'react';
import FieldListProps from './FieldList.types';

const useHandleAdd = (
  genericChange: FieldListProps['onChange'],
  propName: FieldListProps['propName'],
  list: FieldListProps['list'],
): any =>
  useCallback(
    (heading: boolean) => {
      const newItem: { text: string; heading?: boolean } = {
        text: '',
      };
      if (heading) {
        newItem.heading = true;
      }
      genericChange(propName, [...list, newItem]);
    },
    [list],
  );

export default useHandleAdd;
