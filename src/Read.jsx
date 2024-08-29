import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function Read() {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get('http://localhost:4000/users/' + id)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, [id]);

  return (
    <div className="read-container d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="details-box w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h3 className="text-center mb-4">User Details</h3>
        <div className="mb-3">
          <strong className="d-block">Name:</strong> 
          <span>{data.name}</span>
        </div>
        <div className="mb-3">
          <strong className="d-block">Email:</strong> 
          <span>{data.email}</span>
        </div>
        <div className="mb-4">
          <strong className="d-block">Phone:</strong> 
          <span>{data.phone}</span>
        </div>
        <Link to="/" className="btn btn-primary w-100">Back</Link>
      </div>
    </div>
  );
}

export default Read;
