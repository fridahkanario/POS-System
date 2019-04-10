import { Action } from '@ngrx/store';
import { Pos } from './model/pos.model';
import * as PosActions from './actions';

const initialState: Pos = {
    id: 1,
    serialNumber: 'Srm001Trm',
    amount: 350,
    quantity: 1
};

export function actionReducer( state: Pos[] = [initialState], action: PosActions.Actions) {

    if (action.type === PosActions.ADD_POS) {
        return [...state, action.payload];
    }

    if (action.type === PosActions.DELETE_POS) {
        return state.filter(pos => pos.id !== action.payload);
    }

    return state;
}
