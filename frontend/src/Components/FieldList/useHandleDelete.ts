import { useCallback } from 'react';
import FieldListProps from './FieldList.types';

const useHandleDelete = (
  genericChange: FieldListProps['onChange'],
  propName: FieldListProps['propName'],
  list: FieldListProps['list'],
): any =>
  useCallback(
    (originalIndex: number) => {
      genericChange(
        propName,
        list.filter((_, i) => i !== originalIndex),
      );
    },
    [list],
  );

export default useHandleDelete;
