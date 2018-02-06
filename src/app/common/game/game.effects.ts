import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { GameService } from './game.service';
import * as games from './actions';
import { GameActionTypes, LoadGamesSuccessAction, LoadGamesFailedAction } from './actions';

@Injectable()
export class GameEffects {
    constructor(private _actions: Actions, private _service: GameService) { }

    @Effect() loadGames$ = this._actions.ofType(GameActionTypes.LOAD)
        .switchMap(() => this._service.query()
            .map((games) => {
                return new LoadGamesSuccessAction(games);
            }))
        .catch(() => Observable.of(new LoadGamesFailedAction()));

}
