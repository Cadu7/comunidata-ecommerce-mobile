import React, { useState, createContext } from 'react'

export const Clientecontext = createContext();
export function AppProvider({ children }) {

    const [isLogged, setIsLogged] = useState(false);

    return (
        <Clentecontext.Provider value={{ isLogged, setIsLogged }}>
            {children}
        </Clentecontext.Provider>
    )
};
