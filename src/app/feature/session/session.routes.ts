import { Routes } from '@angular/router';
import { SessionComponent } from './session.component';

export const sessionRoutes: Routes = [
    {
        path: '',
        component: SessionComponent,
        children: [
          {
            path: 'entries',
            loadComponent: () => import('./entries/entries.component').then(c => c.EntriesComponent),
            data: { breadcrumb: 'Entries' }
          },
          {
            path: 'printing',
            loadComponent: () => import('./printing/printing.component').then(c => c.PrintingComponent),
            data: { breadcrumb: 'Printing' }
          }
        ]
      }
];
