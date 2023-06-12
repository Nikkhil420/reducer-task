import { createContext } from "react";


export const MyContext = createContext({name:'' , id: 0});

export const AuthContext = createContext({isLogin:false});





export const reducerFunc = (state:any , action:any) => {

switch (action.type) {
    case "setLogin":
        
        return {
            isLogin : action.payload.isLogin,
        };


        case "setUserData":
        
        return {
            name: action.payload.name,
            id : action.payload.id
        };

    default:
        return state;
}

}