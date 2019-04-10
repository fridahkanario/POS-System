import { Injectable } from '@angular/core';
import { Action} from '@ngrx/store';
import { Pos } from './model/pos.model';
// actions
export const ADD_POS = '[POS] ADD_POS';
export const DELETE_POS = '[POS] DELETE_POS';

export class AddPos implements Action {
    readonly type = ADD_POS;

    constructor(public payload: Pos) {}
}

export class DeletePos implements Action {
    readonly type = DELETE_POS;

    constructor(public payload: number) {}
}

export type Actions = AddPos | DeletePos;
