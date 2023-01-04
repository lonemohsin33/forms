import React, { useState } from "react";
import Alert from "./Alert";


export default function Form() {
    const [state, setState] = useState({});
    const [alert, setAlert] = useState(null);

    const showalert = (message, type) => {
        setAlert({
            message: message,
            type:type
        })
        
    }

  const handleChange = (event) => {
    let value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
    };
    const handleClick = () => {
        
        if (state.firstname===undefined ||state.firstname.length === 0 ) {
          //   console.log("This is fn eror")
          showalert("FirstName should not be Empty", "success")  
          const fn=state.firstname
          setState({ fn:"this field is mand"})
        }
    }
    
  return (
      <>
          
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
            value={state.firstname}
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
            value={state.lastname}
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
            value={state.gender}
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
            value={state.country}
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
