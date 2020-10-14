import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from './context/GlobalState';
import axios from 'axios'
import './App.css'

export default function Success() {
    const { db, allFormData } = useContext(GlobalContext);
    const [data, setdata] = useState([])
    let imgSrc = "https://joeschmoe.io/api/v1/"
    useEffect( () => {
      async function allFormData() {
        try {
          const res = await axios.get('http://localhost:5000/api/v1/270/formData')
          // dispatch({
          //   type: 'ALL_DATA',
          //   payload: res.data.data
          // })
          setdata(res.data.data)
          console.log(data)
          console.log(res.data.data)
        } catch(err) {
             console.log(err)
        } 
      }
      allFormData();

            
    }, [])
    
    return (
      <>
        <div style={{ margin: "20px" }} className="row">
          <br />
          {data.map((e) => {
            return (
              <div class="col-md-3" style={{padding: "5px"}}>
                <div class="card" style={{width: "18rem;"}}>
                  <img src={imgSrc + e.firstName} class="box card-img-top" alt="..." style = {{backgroundColor: "#B5B194", width: "130px", height: "220px"}} />
                  <br/>
                  <div class="card-body">
                    <h3 class="card-title">{e.bio}</h3>
                    <p class="card-text">{e.firstName}</p>
                    <p class="card-text">{e.lastName}</p>
                    <p class="card-text">{e.city}</p>
                    <a href={e.email} class="btn btn-primary">{e.email}</a>
                  </div>
                  <br/>
                </div>
              </div>
            );
          })}
        </div>
        <p style={{ textAlign: "center" }}>Data saved with success</p>
      </>
    );
}


// {db.map((e) => {
//     return <div className='col-md-4'>
//         <ul className='col-md-4'>
//             <li>{e.firstName}</li>
//             <li>{e.lastName}</li>
//             <li>{e.email}</li>
//             <li>{e.city}</li>
//             <li>{e.bio}</li>
//         </ul>
//     </div>
// })}