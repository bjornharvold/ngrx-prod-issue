import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromApplication from '../../store/reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  user: any;
  isAuthenticated$: Observable<boolean>;

  logout(): void {

  }

  ngOnInit() {
  }

  constructor(private readonly store: Store<fromApplication.State>) {
    this.isAuthenticated$ = of(false);
  }

}
