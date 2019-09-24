// characterReducer.js

import { CREATE_CHARACTER, READ_CHARACTER, UPDATE_CHARACTER, DELETE_CHARACTER } from '../actions/types';
import isEmpty from '../validation/is-empty';

const initialState = {
  data: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_CHARACTER:
      return {
        ...state,
        data: [...state.data, action.payload]
      }
    case READ_CHARACTER:
      return {
        ...state,
        data: action.payload
      }
    case DELETE_CHARACTER:
      const newData = state.data.filter(value => action.payload._id != value._id);
      return {
        ...state,
        data: newData
      }
    default:
      return state;
  }
}