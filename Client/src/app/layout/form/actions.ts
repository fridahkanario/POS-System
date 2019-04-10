import { Action } from '@ngrx/store';

export enum ActionTypes {
 ADD = 'INCREASE_COUNTER',
}

export class ADD implements Action {
    readonly type = ActionTypes.ADD;
  }

