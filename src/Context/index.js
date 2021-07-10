import React, { useState, createContext } from 'react'

export const Formcontext = createContext();
export function FormProvider({ children }) {

    const [isLogged, setIsLogged] = useState(false);

    return (
        <Formcontext.Provider value={{ isLogged, setIsLogged }}>
            {children}
        </Formcontext.Provider>
    )
};
