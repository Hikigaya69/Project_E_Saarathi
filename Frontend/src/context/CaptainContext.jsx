import React, { createContext, useState } from 'react';

export const CaptainDataContext = createContext()

const CaptainContext = ({children}) => { // children is the App component
    const [captain,setCaptain] = useState(null);  // captain is the initial state
    const [isLoading,setIsLoading] = useState(false);  // isLoading is the initial state
    const [error,setError] = useState(null);  // error is the initial state

    const updateCaptain = (captainData) => { // updateCaptain is the function that updates the state
        setCaptain(captainData);  // setCaptain is the function that updates the state
    };

    const value = {   // value is the object that contains the states and functions
        captain, 
        setCaptain,
        updateCaptain,
        isLoading,
        setIsLoading,
        error,
        setError

    }
    // CaptainDataContext.Provider is the provider that provides the states and functions to the children
  return (
    <div>
        <CaptainDataContext.Provider value={value}>  
              {children}
        </CaptainDataContext.Provider>
    
    </div>
  )
}

export default CaptainContext
