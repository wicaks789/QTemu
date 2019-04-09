import axios from 'axios';

export const increment = () => ({
    type:'INCREMENT'
})

export const decrement =(payload)=>({
    type:'DECREMENT',
    payload
})

export const reset = () => ({
    type:'RESET'
})

export const fetchUser = () =>{
    return  (dispatch) => {
        axios.get('https://swapi.co/api/people/')
        .then(response=> {
            dispatch(addUserToReducer(response.data.results));              
    })
    }   
}

export const addUserToReducer = (userData) => ({
    type:'ADDUSER',
    payload:userData
})

