import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {HomeComponent} from './containers/home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AppComponent} from '../app.component';
import {SharedModule} from '../shared/shared.module';

export const COMPONENTS = [
  AppComponent,
  HeaderComponent,
  HomeComponent,
  NotFoundComponent
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CoreModule {}
