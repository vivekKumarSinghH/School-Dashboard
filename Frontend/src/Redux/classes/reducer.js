import {  ADD_CLASS_LOADING, ADD_CLASS_SUCCESS } from "./action";

const init = {
  loading: false,
  classes: []
};

export const ClassReducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_CLASS_LOADING:
      return { ...state, loading: true };

    case ADD_CLASS_SUCCESS:
      return { ...state, classes: payload, loading: false };
    default:
      return state;
  }
};
