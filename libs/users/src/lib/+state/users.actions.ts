import { createAction, props } from '@ngrx/store';

import { User } from '../models/user';

export const init = createAction('[Users Page] Init');

export const buildUserSession = createAction(
  '[Users] Build User Session'
);

export const buildUserSessionSuccess = createAction(
  '[Users/API] Build User Session Success',
  props<{ user: User }>()
);

export const buildUserSessionFailure = createAction(
  '[Users/API] Build User Session Failure',
  props<{ error: any }>()
);
