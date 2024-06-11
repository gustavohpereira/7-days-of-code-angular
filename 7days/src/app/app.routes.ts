import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { HomewComponent } from './homew/homew.component';

export const routes: Routes = [
    {
        path: '',
        component: HomewComponent,
      },
      {
        path: 'list',
        component: ListComponent,
      },
];
