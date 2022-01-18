import React, {createContext, useState} from 'react'
import data from "./data"
const Context = createContext()

const ContextProvider = ({children}) => {

    const [tour, setTour] = useState(data)

    return (
        <Context.Provider value={{ tour }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
