import {ChangeEvent, FC} from "react";

type NumberInputPropsType = {
  label: string
  name: string
  value: number
  onChangeCallback: (e: ChangeEvent<HTMLInputElement>) => void
  inputClassName: string
}

export const NumberInput: FC<NumberInputPropsType> = (
  {label, name, value, onChangeCallback, inputClassName}
) => {
  return (
    <label>
      {label}:
      <input
        type={"number"}
        name={name}
        value={value}
        onChange={onChangeCallback}
        className={inputClassName}
      />
    </label>
  );
};