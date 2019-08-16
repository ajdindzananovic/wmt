import React from "react";

const Input = ({ onChange, name, label, value, type }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        onChange={onChange}
        value={value}
        name={name}
        type={type}
        className="form-control"
        id={name}
      />
    </div>
  );
};

export default Input;
