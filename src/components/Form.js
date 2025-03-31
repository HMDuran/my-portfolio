import React from "react";
import "../styles/Form.css";
import Button from "./Button";

function Form({ fields, onSubmit, buttonText, isSubmitting }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group-row">
        {fields.slice(0, 2).map((field, index) => (
          <div className="form-group small-field" key={index}>
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
            />
          </div>
        ))}
      </div>
      <div className="form-group large-field">
        <input
          type={fields[2].type}
          name={fields[2].name}
          placeholder={fields[2].placeholder}
          required={fields[2].required}
        />
      </div>

      <div className="form-group large-field">
        <textarea
          name={fields[3].name}
          placeholder={fields[3].placeholder}
          rows={fields[3].rows || 4}
          required={fields[3].required}
        ></textarea>
      </div>

      <Button
        label={buttonText}
        type="primary"
        disabled={isSubmitting} 
      />
    </form>
  );
}

export default Form;