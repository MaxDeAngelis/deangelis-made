import { Label, ReadOnlyLabel, TimeInput, UnitSelect } from './Time.style';
import { TimeProps } from './Time.types';

function Time({
  label,
  amount,
  unit,
  readonly,
  propName,
  onChange,
}: TimeProps): JSX.Element {
  if (readonly)
    return (
      <ReadOnlyLabel>
        {label}
        <span>{amount}</span>
        <span>{unit}</span>
      </ReadOnlyLabel>
    );

  const changeUnit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange)
      onChange(propName, {
        amount,
        unit: e.target.value,
      });
  };
  const changeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange)
      onChange(propName, {
        unit,
        amount: e.target.value,
      });
  };
  return (
    <Label htmlFor={propName}>
      {label}
      <TimeInput
        type='number'
        name={propName}
        value={amount}
        onChange={changeAmount}
      />
      <UnitSelect onChange={changeUnit} value={unit}>
        <option value='mins'>mins</option>
        <option value='hours'>hours</option>
        <option value='days'>days</option>
      </UnitSelect>
    </Label>
  );
}
export default Time;
