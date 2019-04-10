
import { Action } from '@ngrx/store';
import * as PosActions from './actions';
import {Pos} from './pos.model';

export const initialState: Pos = {
  id: 1,
  serialNumber: 'hdrtyjj2',
  make: 'ghhcggffg',
  owner: 'hhhhhb',
  date: '22/11/2018'
};

export function counterReducer(  state: Pos[] = [initialState], action: PosActions.Actions) {

  if (action.type ===  PosActions.ADD) {
    const pos: Pos = action.payload;
        return[ ...state, pos];
    }
  return state;
}
