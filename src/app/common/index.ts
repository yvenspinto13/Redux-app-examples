/* Import createSelector from reselect to make selection of different parts of the state fast efficient */
import { createSelector } from 'reselect';
/* Import the store logger to log all the actions to the console */
import { storeLogger } from 'ngrx-store-logger';
/* Import the layout state */
import * as fromLayout from './layout/layout.reducer';
import { compose } from '@ngrx/core';
import { combineReducers } from '@ngrx/store';

export interface AppState {
    reducer: {
        layout: fromLayout.State;
    };
}

export const layout_reducers = { layout: fromLayout.reducer };

const layoutDevelopmentReducer: Function = compose(storeLogger(), combineReducers)(layout_reducers);

export function metaReducer(state: any, action: any) {
    return layoutDevelopmentReducer(state, action);
}

/** * Layout selectors */
export const getLayoutState = (state: AppState) => state.reducer.layout;

export const getLayoutLeftSidenavState = createSelector(getLayoutState, fromLayout.getLeftSidenavState);
export const getLayoutRightSidenavState = createSelector(getLayoutState, fromLayout.getRightSidenavState);
