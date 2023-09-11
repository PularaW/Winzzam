import { createContext, useReducer } from "react"

export const StudentContext = createContext()
export const studentReducer = (state, action) => {
    switch(action.type) {
        case 'SET_STUDENTS':
            return {
                students: action.payload
            }
        default:
            return state
    }
}

export const StudentContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(studentReducer, {
        students: null
    })

    
    return(
        <StudentContext.Provider value={{...state, dispatch}}>
            { children }
        </StudentContext.Provider>
    )
}

