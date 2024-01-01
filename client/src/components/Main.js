import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Main = () => {
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/info')
      .then(res => setRecords(res.data))
      .catch(err => console.log(err));
  }, []);

  function handleDelete(id) {
    const conf = window.confirm('Do you want to delete?');
    if (conf) {
      axios.delete(`http://localhost:5000/info/del/${id}`)
        .then(res => {
          alert('Record has been deleted');
          navigate('/');
        })
        .catch(err => console.log(err));
    }
  }

  return (
    <div className='container mt-5'>
      <h1 className='text-center'>STUDENT MANAGEMENT SYSTEM</h1>
      <div className='text-end'>
        <Link to='/create' className='btn btn-primary'>Add+</Link>
      </div>
      <div className='table-responsive'>
        <table className='table table-striped table-hover'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {records.map((d, i) => (
              <tr key={i}>
                <td>{d.Name}</td>
                <td>{d.Age}</td>
                <td>{d.City}</td>
                <td>
                  <Link to={`/update/${d._id}`} className='btn btn-success me-2'>
                    Update
                  </Link>
                  <button onClick={() => handleDelete(d._id)} className='btn btn-danger'>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Main;
