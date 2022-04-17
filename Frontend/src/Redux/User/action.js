import axios from "axios"

export const ADD_USER_SUCCESS="ADD_USER_SUCCESS"
export const ADD_ONE_USER_SUCCESS="ADD_ONE_USER_SUCCESS"
export const ADD_USER_LOADING="ADD_USER_LOADING"
export const ADD_ADMIN_LOGIN="ADD_ADMIN_LOGIN"
export const ADD_ADMIN_LOGOUT="ADD_ADMIN_LOGOUT"


export const adminLogin=(payload)=>{
    return {type:ADD_ADMIN_LOGIN,payload}

}

export const adminLogout=()=>{
    return {type:ADD_ADMIN_LOGOUT}

}

export const addOneTeacherSuccess=(payload)=>{
    return {type:ADD_ONE_USER_SUCCESS,payload}

}
export const addTeacherSuccess=(payload)=>{
    return {type:ADD_USER_SUCCESS,payload}

}
export const addTeacherLoading=()=>{
    return {type:ADD_USER_LOADING}

}

export const loginAdmin=(payload)=>(dispatch)=>{

   
    axios.post("https://sleepy-earth-50594.herokuapp.com/users/login",payload).then((res)=>{
        dispatch(adminLogin((res.data.user)))
    
        localStorage.setItem("Admin", true);
        
    }
    )


}

export const getSortTeacher=({age,gender,page})=>(dispatch)=>{

    dispatch(addTeacherLoading())
        axios.get(`https://sleepy-earth-50594.herokuapp.com/users/${age}/${gender}${page}`).then((res)=>{
       
        dispatch(addTeacherSuccess(res.data))}
        )}

export const getTeacher=()=>(dispatch)=>{

dispatch(addTeacherLoading())
    axios.get(`https://sleepy-earth-50594.herokuapp.com/users/0/0`).then((res)=>
        dispatch(addTeacherSuccess(res.data))
    )}

    export const getOneTeacher=({name})=>(dispatch)=>{

            axios.get(`https://sleepy-earth-50594.herokuapp.com/users/${name}`).then((res)=>
            dispatch(addOneTeacherSuccess(res.data))
                
            )}

export const postUser=(payload)=>(dispatch)=>{

        axios.post("https://sleepy-earth-50594.herokuapp.com/users",payload).then((res)=>
            dispatch(getTeacher())
        )
    
    
    }