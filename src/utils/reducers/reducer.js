import {
    INITIAL_LOAD_FAILURE,
    INITIAL_LOAD_START,
    INITIAL_LOAD_SUCCESS,
    LOGIN_DEVELOPER_START,
    LOGIN_DEVELOPER_SUCCESS,
    LOGIN_DEVELOPER_FAILURE,
} from '../actions/actionsIndex';

const initialState = {
    isLoading: false,
    error: null,
    user:['test User'],
    projects: [],
    businesses: [],
}


function actionReducer(state = initialState, action){
    console.log('reducer', action.type);
    switch(action.type){
        case INITIAL_LOAD_START:
            console.log("Initial load start in reducer")
            return {
                ...state,
                isLoading: true,
                error:null,

            }
        case INITIAL_LOAD_SUCCESS:
            console.log("Initial load success in reducer")
            return{
                ...state,
                isLoading: false,
                error: null,
                projects: action.payload.projects,
                businesses: action.payload.businesses,
            }
        case INITIAL_LOAD_FAILURE:
            console.log("Initial load failure in reducer")
            return{
                ...state,
                isLoading: false,
                error: action.payload,
            }

        case LOGIN_DEVELOPER_START:
            console.log("Login developer start reducer")
            return{
                ...state,
                isLoading: true,
                error: null,
            }
        case LOGIN_DEVELOPER_SUCCESS:
            console.log("Login developer success reducer")
            return {
                ...state,
                isLoading: false,
                error: null,
                user: action.payload.user,
            }
        case LOGIN_DEVELOPER_FAILURE:
            console.log("Login developer failure reducer")
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                user: [],
            }
        default:
            return state;
    }

}


export default actionReducer;