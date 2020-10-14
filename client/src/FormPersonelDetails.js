import React, { useContext, useState } from 'react'
import { GlobalContext } from './context/GlobalState';

export default function FormUserDetails() {
    const { step, nextStep, occupation, city, bio, secondForm, prevStep } = useContext(GlobalContext)
    const [stateBio, setBio] = useState(bio)
    const [stateOcccupation, setOccupation] = useState(occupation)
    const [stateCity, setCity] = useState(city)
    



    
    const onSubmit = (e)=> {

        e.preventDefault();
        const detailTwo = {
            occupation: stateOcccupation,
            city: stateCity,
            bio: stateBio
        }
        secondForm(detailTwo)
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
                <label >City</label>
                <input
                  type="text"
                  className="form-control"
                  id=""
                  placeholder="Enter City"
                  value = {stateCity}
                  onChange = { e => setCity(e.target.value) }
                />
              </div>

              <div className="form-group">
                <label >Occupation</label>
                <input
                  type="text"
                  className="form-control"
                  id=""
                  placeholder="Occupation..."
                  value = {stateOcccupation}
                  onChange = { e => setOccupation(e.target.value ) }
                />
              </div>

              <div className="form-group">
                <label >Bio</label>
                <textarea
                  type="text"
                  className="form-control"
                  id=""
                  rows ="4"
                  placeholder="Last Name"
                  value = {stateBio}
                  onChange = { e => setBio(e.target.value ) }
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Next
              </button>

            </form>
            <br/>
            <button  className = "btn btn-danger" onClick = {prevStep}>Go back</button>

          </div>
          <div className="col-md-4"></div>
        </div>
      </>
    );
}
