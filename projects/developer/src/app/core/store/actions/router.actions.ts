import {createAction, props} from '@ngrx/store';

export const visitPage = createAction('[Router] Visit page', props<{ link: Array<string | any> }>());
export const visitUrl = createAction('[Router] Visit url', props<{ url: string }>());
