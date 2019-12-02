import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './core/containers/home/home.component';
import {NotFoundComponent} from './core/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    data: {
      pageTitle: {title: 'PAGE.TITLE', translate: true},
      breadcrumb: {title: 'PAGE.HOME', translate: true, routerLink: ['/']}
    },
    children: [
      {
        path: '',
        component: HomeComponent,
        data: {
          showBreadcrumb: false,
          skipBreadcrumb: false
        }
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
