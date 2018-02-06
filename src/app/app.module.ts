import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IAppState, rootReducer, INITIAL_STATE } from './common/to-do/store';

import { StoreModule } from '@ngrx/store';
import { metaReducer } from './common/index';
import { TemplateModalComponent } from './template-modal/template-modal.component';
import { FinancialComponent } from './financial/financial.component';
import { SidebarWatchDirective } from './sidebar-watch.directive';
import { SidebarToggleDirective } from './sidebar-toggle.directive';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { AlertsListComponent } from './alerts-list/alerts-list.component';
import { TodoOverviewComponent } from './todo-overview/todo-overview.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { GamesListComponent } from './games-list/games-list.component';
import { GameService } from './common/game/game.service';
import { EffectsModule } from '@ngrx/effects';
import { GameEffects } from './common/game/game.effects';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, JsonpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    TemplateModalComponent,
    FinancialComponent,
    SidebarWatchDirective,
    SidebarToggleDirective,
    LeftSidebarComponent,
    RightSidebarComponent,
    AlertsListComponent,
    TodoOverviewComponent,
    TodoListComponent,
    GamesListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    StoreModule.forRoot({ reducer: metaReducer }),
    NgReduxModule,
    FormsModule,
    EffectsModule.forRoot([GameEffects]),
    HttpModule,
    HttpClientModule,
    JsonpModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, ) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
