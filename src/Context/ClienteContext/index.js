import React, { useState, createContext } from 'react'

export const Clientecontext = createContext();
export function ClienteProvider({ children }) {

    const [isLogged, setIsLogged] = useState(false);

    return (
        <Clientecontext.Provider value={{ isLogged, setIsLogged }}>
            {children}
        </Clientecontext.Provider>
    )
};
