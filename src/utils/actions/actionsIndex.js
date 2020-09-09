import axios from 'axios';
import { axiosWithAuth } from '../axiosWithAuth';
import { useHistory } from 'react-router-dom';

export const INITIAL_LOAD_START = 'INITIAL_LOAD_START'
export const INITIAL_LOAD_SUCCESS = 'INITIAL_LOAD_SUCCESS'
export const INITIAL_LOAD_FAILURE = 'INITIAL_LOAD_FAILURE'

//login Developer
export const LOGIN_DEVELOPER_START = 'LOGIN_DEVELOPER_START'
export const LOGIN_DEVELOPER_SUCCESS = 'LOGIN_DEVELOPER_SUCCESS'
export const LOGIN_DEVELOPER_FAILURE = 'LOGIN_DEVELOPER_FAILURE'

const apiURL = 'srsrtser'
const apiURL_Login_Developer = 'asdfasfda'

export const initialLoad = () => dispatch =>{


        dispatch({ type: INITIAL_LOAD_START })
        axios.get(apiURL)
            .then(res => {
                dispatch({type: INITIAL_LOAD_SUCCESS, payload: res.data})
            })
            .catch(err => {

                dispatch({type: INITIAL_LOAD_FAILURE, payload: err})
            })

}

export const loginDeveloper = (credentials) => {

    return (dispatch) =>{
        dispatch({ type: LOGIN_DEVELOPER_START})
        return axiosWithAuth()
            .post(apiURL_Login_Developer, credentials)
            .then(res=>{

                dispatch({ type: LOGIN_DEVELOPER_SUCCESS, payload: res.data})
            })
            .catch(err=>{
                dispatch({ type: LOGIN_DEVELOPER_FAILURE})
            })
    }
}

