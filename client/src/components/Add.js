import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import("../App.css");

const Add = () => {
  const [inputData, setInputData] = useState({ Name: "", Age: "", City: "" });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/info", inputData)
      .then((res) => {
        alert("Data Added Successfully");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-light p-5">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="Name"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, Name: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input
              type="text"
              name="Age"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, Age: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="city">City:</label>
            <input
              type="text"
              name="City"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, City: e.target.value })
              }
            />
          </div>
          <button type="submit" className="btn btn-info" id="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
