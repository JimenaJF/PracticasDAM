type CheckboxProps = {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  id?: string;
  name?: string;
  className?: string;
};

export default function Checkbox({checked,onChange,id, name, className,}: CheckboxProps) {
  return (
    <input
      type="checkbox"
      id={id}
      name={name}
      className={className}
      checked={checked}
      onChange={(e) => onChange?.(e.target.checked)}
    />
  );
}