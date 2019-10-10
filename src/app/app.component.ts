import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { goLeft, goRight, changeDirection } from './app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iHoover';
  nbCase = 10;
  matrix = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }

  goLeft() {
    this.store.dispatch(goLeft());
  }

  decrement() {
    this.store.dispatch(goRight());
  }

  changeDirection() {
    this.store.dispatch(changeDirection());
  }
}
