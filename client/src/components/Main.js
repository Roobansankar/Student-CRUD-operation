import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import("../App.css")

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
      <h1 style={{marginLeft:"350px"}}> STUDENT FORM</h1>
      <div className='text-end'>
        <Link to='/create' className='btn btn-primary'>Add+</Link>
      </div>
      <table className='table'>
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>Name</th>
            <th>Age</th>
            <th id='city'>City</th>
            <th className='actions' id="act">Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((d, i) => (
            <tr key={i}>
              {/* <td>{d._id}</td> */}
              <td>{d.Name}</td>
              <td>{d.Age}</td>
              <td>{d.City}</td>
              <td>
              <Link to={`/update/${d._id}`} className='btn btn-sm btn-success'>
          Update
        </Link>
                <button onClick={() => handleDelete(d._id)} className='btn btn-sm btn-danger'>
                  Delete
                </button>
              </td>
              {/* <td>
                <button onClick={() => handleDelete(d._id)} className='btn btn-sm btn-danger'>
                  Delete
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Main;




















