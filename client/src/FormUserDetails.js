import React, { useContext, useState } from 'react'
import { GlobalContext } from './context/GlobalState';

export default function FormUserDetails() {
    const { step, nextStep, email, firstName, lastName, firstForm } = useContext(GlobalContext)
    const [stateFirstName, setFirstName] = useState(firstName)
    const [stateLastName, setLastName] = useState(lastName)
    const [stateEmail, setEmail] = useState(email)



    
    const onSubmit = (e)=> {

        e.preventDefault();
        const detailOne = {
            firstName: stateFirstName,
            lastName: stateLastName,
            email: stateEmail
        }
        firstForm(detailOne)
        nextStep();
    }

    
    return (
      <>
        <br />
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <form onSubmit={onSubmit}>
             
              <div className="form-group">
                <label >Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id=""
                  placeholder="Enter email"
                  value = {stateEmail}
                  onChange = { e => setEmail(e.target.value) }
                />
              </div>

              <div className="form-group">
                <label >First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id=""
                  placeholder="First Name"
                  value = {stateFirstName}
                  onChange = { e => setFirstName(e.target.value ) }
                />
              </div>

              <div className="form-group">
                <label >Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id=""
                  placeholder="Last Name"
                  value = {stateLastName}
                  onChange = { e => setLastName(e.target.value ) }
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Next
              </button>

            </form>
          </div>
          <div className="col-md-4"></div>
        </div>
      </>
    );
}
