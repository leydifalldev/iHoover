import { createReducer, on } from '@ngrx/store';
import { goLeft, goRight, changeDirection } from './app.actions';

export const initialState = 0;

const positionReducer = createReducer(initialState,
  on(goLeft, state => state + 1),
  on(goRight, state => state - 1),
  on(changeDirection, state => 0),
);

export function getPositionReducer(state, action) {
  return positionReducer(state, action);
}
