import React, { useContext, useEffect } from 'react'
import { GlobalContext } from './context/GlobalState';

export default function FormUserDetails() {
    const {step, prevStep, nextStep, firstName, lastName, email, bio, city, occupation, addFormData} = useContext(GlobalContext)
    const formData = {
      firstName,
      lastName,
      email,
      city,
      bio,
      pic: "#"
    }

    
    const onSubmit = (e)=> {

        e.preventDefault();
        addFormData(formData);
        nextStep();
    }

    
    return (
      <>
        <br />
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <form onSubmit={onSubmit}>
              <a href="#" className="list-group-item active">
                Summary Details
              </a>

              <a href="#" className="list-group-item">
                
                {email}
              </a>
              <a href="#" className="list-group-item">
                {firstName}
              </a>
              <a href="#" className="list-group-item">
                {lastName}
              </a>
              <a href="#" className="list-group-item">
                {city}
              </a>
              <a href="#" className="list-group-item">
                {occupation}
              </a>
              <a href="#" className="list-group-item">
                {bio}
              </a>
              <br/>
              <button className = "btn btn-success" type="submit">submit</button>
            </form>
            <br />
            <button className="btn btn-danger" onClick={prevStep}>
              Go back
            </button>
          </div>
          <div className="col-md-4"></div>
        </div>
      </>
    );
}
