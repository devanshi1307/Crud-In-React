import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Create() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: ''
  });
  
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:4000/users', values)
      .then(res => {
        console.log(res);
        navigate('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="create-container d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="form-container w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1 className="text-center mb-4">Create User</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Name"
              onChange={e => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Email"
              onChange={e => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input type="number" className="form-control" id="phone" placeholder="Number"
              onChange={e => setValues({ ...values, phone: e.target.value })}
            />
          </div>
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-success">Create User</button>
            <Link to="/" className="btn btn-danger">Back</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;
