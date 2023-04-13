import axios from 'axios';
import { toast } from 'react-toastify';

const BACK_ENDPOINT = "http://localhost:3001"

export const REGISTER_USER = "REGISTER_USER";
export const LOGIN_USER = "LOGIN_USER";


export const registerUser = (formData) => {
    return async function (dispatch){
        const response = await axios.post(`${BACK_ENDPOINT}/user/sign-up`, formData)
        dispatch({
            type: REGISTER_USER,
            payload: response.data
        })
    }
}


export const loginUser = (formData) => {
    return async function(dispatch){
        try {
            const response = await axios.post(`${BACK_ENDPOINT}/user/login`, formData)
            dispatch({
                type: LOGIN_USER,
                payload: response.data
            })
            toast("Iniciaste Sesion con exito" , {
                position: "top-center",
                theme: "light",
                });
        } catch (error) {
            toast("Usuario y/o Contraseña inválida intente de nuevo." , {
                position: "top-center",
                theme: "dark",
                });
        }
    }
}