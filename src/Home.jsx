import './App.css';
import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


function Home() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
  
    const fetchData = () => {
      axios.get('http://localhost:4000/users')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    };
  
    useEffect(() => {
        fetchData();  // Fetch data when component mounts
      }, []);
  
    const handelDelete = (id) => {
      const confirm = window.confirm("Are you sure?");
      if (confirm) {
        axios.delete("http://localhost:4000/users/" + id)
          .then(res => {
            console.log(res);
            fetchData();  // Re-fetch data after deleting
          })
          .catch(err => console.log(err));
      }
    };
  
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center bg-light vh-100">
        <h1 className="mb-4">List of Users</h1>
        <div className="table-container w-75 rounded bg-white border shadow p-4">
          <div className="d-flex justify-content-between mb-3">
            <h2>User Details</h2>
            <Link to="/create" className="btn btn-success">Add New User</Link>
          </div>
          <table className="table table-hover table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
                    <tbody>
                        {
                            data.map((d, i) => (
                                <tr key={i} >
                                    <td>{i+1}</td>
                                    <td>{d.name}</td>
                                    <td>{d.email}</td>
                                    <td>{d.phone}</td>
                                    <td>
                                        <Link to={`/read/${d.id}`} className="btn btn-warning m-2">Read</Link>
                                        <Link to={`/update/${d.id}`} className="btn btn-info m-2">Update</Link>
                                        <button onClick={ e=> handelDelete(d.id)} type="button" className="btn btn-danger m-2">Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home