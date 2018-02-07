import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
/** * Import the root state in order to select parts of it. */
import * as fromRoot from './common/index';
/* * Import the layout actions to make dispatching from the component possible. */
import * as layout from './common/layout/layout.actions';
import * as games from './common/game/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public openedModalName$: Observable<any>;
  public alerts$: Observable<any>;
  public games$: Observable<any>;
  public gamesCount$: Observable<number>;
  public gamesPage$: Observable<number>;
  public gamesLoading$: Observable<boolean>;

  constructor(private store: Store<fromRoot.AppState>) {
    // this.openedModalName$ = store.select(fromRoot.getLayoutOpenedModalName);
    this.games$ = store.select(fromRoot.getGamesEntities);
    this.gamesCount$ = store.select(fromRoot.getGamesCount);
    this.gamesPage$ = store.select(fromRoot.getGamesPage);
    this.gamesLoading$ = store.select(fromRoot.getGamesLoadingState);
  }

  ngOnInit() {
    this.store.dispatch(new games.LoadGamesAction(1));
  }

  handleOpenModal(modalName: string) {
    //  this.store.dispatch(new layout.OpenModalAction(modalName));
  }

  handleCloseModal(modalName: string) {
    //  this.store.dispatch(new layout.CloseModalAction(modalName));
  }

  onGamesPageChanged(page: number) {
    this.store.dispatch(new games.LoadGamesAction(page));
  }
}
