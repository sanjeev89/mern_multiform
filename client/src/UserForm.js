import React, { useContext, useState } from 'react'
import  FormUserDetails  from './FormUserDetails'
import  FormPersonelDetails  from './FormPersonelDetails'

import  Success  from './Success'
import Confirm from  './Confirm'

import { GlobalContext } from './context/GlobalState';
import { GlobalProvider } from './context/GlobalState'


export default function UserForm() {
    const { step } = useContext(GlobalContext)

    console.log("the step from basic is ", step)
    switch(step) {
        case 1: 
            return (
                // <GlobalProvider>
                     <FormUserDetails/>
                /* </GlobalProvider> */
        );
        case 2:
            return (
                // <GlobalProvider>
                    <FormPersonelDetails/>
                // </GlobalProvider>
            );
        case 3:
            return (
                // <GlobalProvider>
                    <Confirm/>
                // </GlobalProvider>
            )
        case 4: return (
            // <GlobalProvider>
                <Success/>
            // </GlobalProvider>
        )
    }
    
}