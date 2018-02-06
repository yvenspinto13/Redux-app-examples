import { Action } from '@ngrx/store';

export const GameActionTypes = {
    LOAD: '[Games] load games',
    LOAD_SUCCESS: '[Games] successfully loaded games',
    LOAD_FAILURE: '[Games] failed to load games',
};

export class LoadGamesAction implements Action {
    type = GameActionTypes.LOAD;
    constructor(public payload: any) {}
}

export class LoadGamesFailedAction implements Action {
    type = GameActionTypes.LOAD_FAILURE;
    constructor() { }
}

export class LoadGamesSuccessAction implements Action {
    type = GameActionTypes.LOAD_SUCCESS;
    constructor(public payload: any) { }
}

export type GameActions = LoadGamesAction | LoadGamesFailedAction | LoadGamesSuccessAction;
