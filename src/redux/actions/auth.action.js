import { AuthTypes } from "../types/index";


export const login =(data) => {
    return({
        type : AuthTypes.LOGIN_SUCCESS ,
        playload : data
    });
}


export const logout =() => {
    return({
        type : AuthTypes.LOGOUT_REQUEST 
    });
}