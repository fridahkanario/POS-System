import { Action } from '@ngrx/store';
import { Pos } from './pos.model';

export const ADD = '[POS] ADD';

export class AddPos implements Action {
  readonly type = ADD;

    constructor(public payload: Pos) {}
  }

  export type Actions = AddPos;

