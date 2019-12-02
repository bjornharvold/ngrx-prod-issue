import {Injectable, NgZone} from '@angular/core';
import {ActivatedRoute, Data, NavigationEnd, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {filter, map, mergeMap, tap} from 'rxjs/operators';
import * as fromApplication from '../reducers';
import {Store} from '@ngrx/store';
import {RouterActions} from '../actions';
import {ROUTER_NAVIGATED, RouterNavigationAction} from '@ngrx/router-store';

const APPEND_TITLE = ' | iko.travel - A travel platform for developers';

@Injectable()
export class RouterEffects {
  updateTitle$ = createEffect(
    () =>
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;

          // loop to last
          while (route.firstChild) {
            route = route.firstChild;
          }

          return route;
        }),
        filter((route: ActivatedRoute) => route != null),
        // tap((route: ActivatedRoute) => console.log(route.component)),
        mergeMap((route: ActivatedRoute) => route.data),
        filter((data: Data) => data != null),
        tap(title => this.titleService.setTitle(' Some title'))
      ),
    {
      dispatch: false,
    }
  );

  listenToRouteChange$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ROUTER_NAVIGATED),
        tap((r: RouterNavigationAction) => console.log('router navigated', r))
      ), {dispatch: false}
  );

  visitPage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RouterActions.visitPage),
        tap(({link}) => this.router.navigate(link))
      ), {dispatch: false}
  );

  visitUrl$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RouterActions.visitUrl),
        tap(({url}) => this.router.navigateByUrl(url))
      ), {dispatch: false}
  );


  constructor(private readonly router: Router,
              private readonly ngZone: NgZone,
              private readonly actions$: Actions,
              private readonly store: Store<fromApplication.State>,
              private readonly titleService: Title,
              private readonly activatedRoute: ActivatedRoute
  ) {
  }
}
