import { useCallback } from 'react';
import FieldListProps from './FieldList.types';

const useHandleChange = (
  genericChange: FieldListProps['onChange'],
  propName: FieldListProps['propName'],
  list: FieldListProps['list'],
): any =>
  useCallback(
    (value: string, originalIndex: number) => {
      genericChange(
        propName,
        list.map(({ text, ...restProps }: { text: string }, i) => ({
          text: i === originalIndex ? value : text,
          ...restProps,
        })),
      );
    },
    [list],
  );

export default useHandleChange;
