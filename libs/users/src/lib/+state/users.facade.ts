import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as UsersActions from './users.actions';
import * as UserSelectors from './users.selectors';


@Injectable()
export class UsersFacade {
  currentUser$ = this.store.pipe(
    select(UserSelectors.getUser)
  );
  isAuthenticated$ = this.store.pipe(
    select(UserSelectors.getUserIsAuth)
  );

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  buildUserSession() {
    this.store.dispatch(UsersActions.buildUserSession());
  }
}
