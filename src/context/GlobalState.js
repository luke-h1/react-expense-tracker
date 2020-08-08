import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// init state
// expense = negative number
// income = postivie number

const initialState = {
    transactions: [
        { id: 1, text: 'Macbook', amount: -2200 },
        { id: 2, text: 'Salary', amount: 4400 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 300 },
    ],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return <GlobalContext.Provider value={{
      transactions: state.transactions 
    }}>  
    
    {children} 
    
    </GlobalContext.Provider>;
};
