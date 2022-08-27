import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './index.css';

const Rejuvenecedor = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    age: 0,
  });

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire(
      `${formValues.name}, tu nueva y feliz edad es ${formValues.age - 10}`
    );
    setFormValues({
      name: '',
      age: 0,
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <input
          name="name"
          minLength="1"
          required
          value={formValues.name}
          onChange={handleInputChange}
        />
        <input
          name="age"
          type="number"
          min="1"
          required
          value={formValues.age}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Rejuvenecedor;
