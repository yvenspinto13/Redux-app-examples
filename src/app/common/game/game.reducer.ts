import { createSelector } from 'reselect';
import { GameActionTypes } from './actions';

export interface GameState {
    loaded: boolean;
    loading: boolean;
    entities: Array<any>;
    count: number;
    page: number;
}

export const INITIAL_GAME_STATE: GameState = {
    loaded: false,
    loading: false,
    entities: [],
    count: 0,
    page: 1
};

export function gameRootReducer(state: GameState, action): GameState {

    switch (action.type) {
        case GameActionTypes.LOAD:
            const page = action.payload;
            return Object.assign({}, state, {
                loading: true,
                page: page === null ? state.page : page
            });
        case GameActionTypes.LOAD_SUCCESS:
            const games = action.payload['results'];
            const gamesCount = action.payload['number_of_total_results'];
            return Object.assign({}, state, {
                loaded: true,
                loading: false,
                entities: games,
                count: gamesCount
            });
        case GameActionTypes.LOAD_FAILURE:
            return Object.assign({}, state, {
                loaded: true,
                loading: false,
                entities: [],
                count: 0
            });
        default:
            return state;
    }
}

// create selectors

export const getEntities = (state: GameState) => state.entities;
export const getPage = (state: GameState) => state.page;
export const getCount = (state: GameState) => state.count;
export const getLoadingState = (state: GameState) => state.loading;
