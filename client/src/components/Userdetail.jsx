import React, { createContext, useEffect, useState } from 'react'
export const contexthook = createContext();

const Userdetail = ({ children }) => {
    const [context, setContext] = useState({});
    const handleContext = (obj) => {
        setContext({ obj })
    }
    // useEffect(()=>{console.log("context",context)},[context])
    return (
        <contexthook.Provider value={{ context, handleContext }}>
            {children}
        </contexthook.Provider>
    )
}

export default Userdetail;