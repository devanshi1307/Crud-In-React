import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Update() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: ''
  })

  //const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const handelUpdate = (event) => {
    event.preventDefault();
    axios.put('http://localhost:4000/users/' + id, values)
    .then(res => {
      console.log(res);
      navigate('/');
    })
      .catch(err => (console.log(err)));
  }

  useEffect(() => {
    axios.get(`http://localhost:4000/users/` + id)
      .then(res => setValues(res.data))
      .catch(err => (console.log(err)));
  }, [])

  return (
    <div className="update-container d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="form-container w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1 className="text-center mb-4">Update User</h1>
        <form onSubmit={handelUpdate}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Name"
              value={values.name}
              onChange={e => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Email"
              value={values.email}
              onChange={e => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input type="number" className="form-control" id="phone" placeholder="Number"
              value={values.phone}
              onChange={e => setValues({ ...values, phone: e.target.value })}
            />
          </div>
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-success">Update User</button>
            <Link to="/" className="btn btn-danger">Back</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Update