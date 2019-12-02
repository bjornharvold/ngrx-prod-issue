import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApplication from '../../store/reducers';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  url = ['/', 'org', 'list'];
  code = '{\n' +
    '  "data": {\n' +
    '  "connect": "to travel inventory",\n' +
    '  "display": "premium content",\n' +
    '  "sell": [\n' +
    '      {\n' +
    '      "rooms": ✅,\n' +
    '      "packages / add-ons": ✅,\n' +
    '      "facilities": ✅,\n' +
    '      "experiences": ✅,\n' +
    '      "flights": ✅,\n' +
    '      "cars": ✅\n' +
    '    }\n' +
    '  ],\n' +
    '  "seller": [\n' +
    '      {\n' +
    '      "type": "travel tech startup"\n' +
    '    }\n' +
    '  ]\n' +
    '}';
  isAuthenticated$: Observable<boolean>;

  ngOnInit() {
  }

  constructor(private readonly store: Store<fromApplication.State>) {
    this.isAuthenticated$ = of(false);
  }
}
