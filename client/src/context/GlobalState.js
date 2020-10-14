import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios'

// Initial state
const initialState = {
  db: [],
  step: 1,
  firstName: '',
  lastName: '',
  occupation: '',
  city: '',
  bio: '',
  email: 'abc@gmail.com',
  error: null
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);


  // Actions

  //send Form data to server
  async function addFormData(formData) {
    const config = {
      'Content-Type': 'application/json'
    }

    try {
      const res = await axios.post('http://localhost:5000/api/v1/formData', formData, config)

      dispatch({
        type: 'ADD_DATA',
        payload: res.data.data
      })
    } catch (error) {
      dispatch({
        type: 'ERROR',
        payload: error.response
      })
    }
  }

  //get all form data
  async function allFormData() {
    try {
      const res = await axios.get('http://localhost:5000/api/v1/270/formData')
      dispatch({
        type: 'ALL_DATA',
        payload: res.data.data
      })
      console.log("hahaha ", state.db)
    } catch(err) {
         console.log(err)
    } 
  }




  //fill first form
  function firstForm(detailOne) {
    const { email, firstName, lastName } = detailOne;
    dispatch({
      type: 'FORM_ONE',
      payload: detailOne
    })

  }

    //fill first form
    function secondForm(detailTwo) {
      const { occupation, city, bio } = detailTwo;
      dispatch({
        type: 'FORM_TWO',
        payload: detailTwo
      })
  
    }

  //go to next step
  function nextStep() {
    const { step } = state;
    console.log("hii i am "+step)
    dispatch({
        type: 'NEXT_STEP',
        payload: step
    })

  };

  // Go back to prev step
  function prevStep() {
    const { step } = state;
    dispatch({
        type: 'PREV_STEP',
        payload: step
    })

  };

  

  return (<GlobalContext.Provider value={{
    allFormData,
    step: state.step,
    firstName: state.firstName,
    lastName: state.lastName,
    occupation: state.occupation,
    city: state.city,
    bio: state.bio,
    email: state.email,
    db: state.db,
    nextStep,
    prevStep,
    firstForm,
    secondForm,
    // error: state.error,
    // deleteTransaction,
     addFormData
  }}>
    {children}
  </GlobalContext.Provider>);
}