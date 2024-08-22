import { act, createContext, FC, PropsWithChildren, Reducer, useContext, useMemo, useReducer} from "react";
import { loginRequest, logoutRequest } from "../services/apiAuth";
import { User } from "../models/todo.model";


type AuthContextType = {
    isAuthenticated: boolean;
    login: (email:string,password:string) => Promise<User>;
    logout: () => void;
    user: {id:string};

}

const AuthContext = createContext<AuthContextType | null>(null);

const initialState = {
    user:null,
    isAuthenticated:false
}

const reducer: Reducer<{user:{id:string},isAuthenticated:string},{type:string, payload:string}> = (state,action) => {
    switch (action.type) {
        case 'logout':
            return {...state, isAuthenticated: false, user: action.payload};
            break;
        case 'login':
            return {...state, isAuthenticated: true, user: action.payload};
            break;
        case 'reset':
            return initialState;
            break;
        default:
            throw new Error('unknown action')
    }
}

const AuthProvider : FC<PropsWithChildren> = ({children}) => {
    const [{user,isAuthenticated}, dispatch] = useReducer(reducer,initialState)

    async function login(email:string, password:string){
        const user = await loginRequest(email,password)
        console.log(user, "AuthProvider login function")
        return user;

    }
    async function logout(){
        const response = await logoutRequest();
        console.log(response,'logout in AuthProvider')
        return response;
    }

    const values = useMemo<AuthContextType>(() => {
        return {
            login,
            logout,
            isAuthenticated,
            user,
        }
    }, [isAuthenticated,user])

    return(
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context : AuthContextType | null = useContext(AuthContext);
    if(context === undefined) {
        throw new Error('AuthContext was used outside of the AuthProvider');
    }
    return context;
}

export {useAuth, AuthProvider}