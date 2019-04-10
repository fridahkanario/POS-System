
import { Action } from '@ngrx/store';
import { ActionTypes} from './actions';

export const initialState = 0;

export function counterReducer( state = initialState, action: Action) {

  if (action.type ===  ActionTypes.ADD) {
        return state + 1;
    }
  return state;
}
