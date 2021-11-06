import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, concatMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

import * as UsersActions from './users.actions';
import { LocalStorageService } from '../services/local-storage.service';
import { UsersService } from '../services/users.service';

@Injectable()
export class UsersEffects {
  buildUserSession$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.buildUserSession),
      concatMap(() => {
        if (this.localStorageService.isValidToken()) {
          const userId = this.localStorageService.getUserIdFromToken();
          console.log('user effects', userId);
          return this.usersService.getUser(userId).pipe(
            map(user => UsersActions.buildUserSessionSuccess({ user })),
            catchError(() => of(UsersActions.buildUserSessionFailure({ error: null })))
          );
        }
        return of(UsersActions.buildUserSessionFailure({ error: null }));
      })
    ));

  constructor(
    private readonly actions$: Actions,
    private localStorageService: LocalStorageService,
    private usersService: UsersService
  ) {
  }
}
