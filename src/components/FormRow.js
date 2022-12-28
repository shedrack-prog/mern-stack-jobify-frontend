import React from "react";

const FormRow = ({ name, type, value, labelText, handleChange }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {name || labelText}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
};

export default FormRow;
