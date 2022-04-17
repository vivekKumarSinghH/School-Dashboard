
import { ADD_ADMIN_LOGIN, ADD_ADMIN_LOGOUT, ADD_ONE_USER_SUCCESS, ADD_USER_LOADING, ADD_USER_SUCCESS } from "./action";

const init = {
  loading: false,
  adminlogin: JSON.parse( localStorage.getItem("Admin"))?true:false,
  teachers: [],
  singleteacher:false,
  page:""
};

export const TeacherReducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_USER_LOADING:
      return { ...state, loading: true };

    case ADD_USER_SUCCESS:
      return { ...state, 
        teachers: payload.user,
        page:payload.totalpage, 
        loading: false };
    case ADD_ADMIN_LOGIN:
      return { ...state, adminlogin: true };

      
    case ADD_ONE_USER_SUCCESS:
      return { ...state, singleteacher: payload };

      case ADD_ADMIN_LOGOUT:
        localStorage.removeItem("Admin");

      return {...state,adminlogin: false}
    default:
      return state;
  }
};
