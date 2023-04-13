import axios from 'axios';


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
            
        } catch (error) {
            alert("Invalid Credentials")
        }
    }
}