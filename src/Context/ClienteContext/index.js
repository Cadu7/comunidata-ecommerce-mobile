import React, { useState, createContext } from 'react'

export const ClienteContext = createContext();
export function ClienteProvider({ children }) {

    const [isLogged, setIsLogged] = useState(false);

    return (
        <ClienteContext.Provider value={{ isLogged, setIsLogged }}>
            {children}
        </ClienteContext.Provider>
    )
};
