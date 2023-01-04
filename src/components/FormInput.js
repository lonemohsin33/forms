import React, { useState } from 'react'
import Alert from './Alert';

export default function FormInput(props) {
  const [value, setValue] = useState({});
  const [alert, setAlert] = useState(null)
  const showalert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const handleChange = (e) => {
    const val = e.target.value;
    setValue({
      ...value,
      [e.target.name]: val,
    });
  };
  const handleClick = () => {
    if (!value.firstname || value.firstname.length<3) {
      return showalert("First Name is Required!", "danger")
    }
    if (!value.lastname) {
      return showalert("Last Name is Required!", "danger");
    }if (!value.gender) {
      return showalert("Gender is Required!", "danger");
    }if (!value.country) {
      return showalert("Country is Required!", "danger");
    }
    const details= {fn:value.firstname, ln:value.lastname, ct:value.country, gn:value.gender}
    console.log(details)
    return showalert("", "success");

  }

  return (
    <>
      <Alert alert={alert} />
      <div className="mb-3 row mx-3">
        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
          First Name
        </label>
        <div className="col-sm-2">
          <input
            type="text"
            className="form-control"
            id="staticEmail"
            name="firstname"
            value={value.firstname}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mb-3 row mx-3">
        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
          Last Name
        </label>
        <div className="col-sm-2">
          <input
            type="text"
            className="form-control"
            id="staticEmail"
            name="lastname"
            value={value.lastname}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mb-3 row mx-3">
        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
          Gender
        </label>
        <div className="col-sm-2">
          <input
            type="text"
            className="form-control"
            id="staticEmail"
            name="gender"
            value={value.gender}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mb-3 row mx-3">
        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
          Country
        </label>
        <div className="col-sm-2">
          <input
            type="text"
            className="form-control"
            id="staticEmail"
            name="country"
            value={value.country}
            onChange={handleChange}
          />
        </div>
      </div>

      <button type="button" className="btn btn-dark mx-3" onClick={handleClick}>
        Submit
      </button>
    </>
  );
}
