import { InputHTMLAttributes } from 'react';

type CustomInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const Input = ({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  name,
  disabled = false,
  required = false,
  ...rest
}: CustomInputProps) => {
  return (
    <>
      {label && (
        <label htmlFor={name} className="block text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        id={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        disabled={disabled}
        required={required}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...rest}
      />
    </>
  );
};

export default Input;
