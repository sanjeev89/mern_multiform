import React from 'react';
import  UserForm  from './UserForm'
import { GlobalProvider } from './context/GlobalState'

function App() {
  
  
  
  return (
    <div >
      <GlobalProvider>
         <UserForm/>    
      </GlobalProvider>
    </div>
  );
}

export default App;
