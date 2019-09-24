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
        data: action.payload
      }
    case READ_CHARACTER:
      return {
        ...state,
        data: action.payload
      }

    default:
      return state;
  }
}