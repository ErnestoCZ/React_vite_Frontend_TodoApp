import { createContext, FC ,PropsWithChildren, ProviderProps, Reducer, useReducer} from "react";

const AuthContext = createContext()

const initialState = {

    user:null,
    isAuthenticated:false
}

const reducer: Reducer<S,A> = (state,action) => {

}

export const AuthProvider : FC<> = ({children}) => {
    const [{user,isAuthenticated}, dispatch] = useReducer(reducer,initialState)
    return(
        <AuthContext.Provider value={{user,isAuthenticated}}>

        </AuthContext.Provider>
    )
}