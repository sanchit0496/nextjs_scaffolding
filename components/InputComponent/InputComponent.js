import React from 'react';

const InputComponent = ({
  label,
  id,
  name,
  type,
  value,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${error ? 'border-red-500' : ''}`}
      />
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  )
}

export default InputComponent;
