import axios from "axios"

export const ADD_CLASS_SUCCESS="ADD_CLASS_SUCCESS"
export const ADD_CLASS_LOADING="ADD_CLASS_LOADING"




export const addClassSuccess=(payload)=>{
    return {type:ADD_CLASS_SUCCESS,payload}

}
export const addClassLoading=()=>{
    return {type:ADD_CLASS_LOADING}

}


export const getClass=()=>(dispatch)=>{

dispatch(addClassLoading())
    axios.get("https://sleepy-earth-50594.herokuapp.com/class/all").then((res)=>
        dispatch(addClassSuccess(res.data))
    )}


export const postClass=(payload)=>(dispatch)=>{

        axios.post("https://sleepy-earth-50594.herokuapp.com/class",payload).then((res)=>
            dispatch(getClass())
        )}