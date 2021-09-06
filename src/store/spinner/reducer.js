import { createReducer } from '@reduxjs/toolkit';
import { hideSpinner, showSpinner } from './actions';

const initialState = {
  isSpinner: false,
};

export default createReducer(initialState, {
  [showSpinner]: (state) => ({ ...state, isSpinner: true }),
  [hideSpinner]: (state) => ({ ...state, isSpinner: false }),
});

// export default function createReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'SHOW_SPINNER': {
//       return { ...state, isSpinner: true };
//     }
//     case 'HIDE_SPINNER': {
//       return { ...state, isSpinner: false };
//     }
//     default:
//       return state;
//   }
// }
