import { createAction } from '@reduxjs/toolkit';
import { HIDE_SPINNER, SHOW_SPINNER } from './actionTypes';

export const showSpinner = createAction(SHOW_SPINNER);
export const hideSpinner = createAction(HIDE_SPINNER);
