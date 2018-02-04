import { Action } from '@ngrx/store';

/* Layout actions are defined here */
export const LayoutActionTypes = {
    // left sidenav actions
    OPEN_LEFT_SIDENAV: '[Layout] Open Leftsidenav',
    CLOSE_LEFT_SIDENAV: '[Layout] Close Leftsidenav',

    // right sidenav actions
    OPEN_RIGHT_SIDENAV: '[Layout] Open Rightsidenav',
    CLOSE_RIGHT_SIDENAV: '[Layout] Close Rightsidenav',
};

export class OpenLeftSidenavAction implements Action {
    type = LayoutActionTypes.OPEN_LEFT_SIDENAV;

    constructor() { }
}

export class CloseLeftSidenavAction implements Action {
    type = LayoutActionTypes.CLOSE_LEFT_SIDENAV;

    constructor() { }
}

export class OpenRightSidenavAction implements Action {
    type = LayoutActionTypes.OPEN_RIGHT_SIDENAV;

    constructor() { }
}

export class CloseRightSidenavAction implements Action {
    type = LayoutActionTypes.CLOSE_RIGHT_SIDENAV;

    constructor() { }
}

/* The action classes will be added here once they are defined */
export type LayoutActions = OpenLeftSidenavAction |
                            CloseLeftSidenavAction |
                            OpenRightSidenavAction |
                            CloseRightSidenavAction;
