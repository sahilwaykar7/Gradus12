import { Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { C } from '@angular/cdk/keycodes';
import { ConstantsService } from '../core/services/constants.service';
import { AppComponent } from '../app.component';

export const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./dashboard/dashboard.component').then(c => c.DashboardComponent),
        data: { breadcrumb: 'Dashboard' }
      },
      // {
      //   path: 'users',
      //   loadComponent: () => import('./users/users.component').then(c => c.UsersComponent),
      //   data: { breadcrumb: 'Users' }
      // },
      // {
      //   path: 'ui',
      //   loadChildren: () => import('./ui/ui.routes').then(p => p.routes),
      //   data: { breadcrumb: 'UI' }
      // },
      // {
      //   path: 'dynamic-menu',
      //   loadComponent: () => import('./dynamic-menu/dynamic-menu.component').then(c => c.DynamicMenuComponent),
      //   data: { breadcrumb: 'Dynamic Menu' }
      // },
      // {
      //   path: 'mailbox',
      //   loadComponent: () => import('./mailbox/mailbox.component').then(c => c.MailboxComponent),
      //   data: { breadcrumb: 'Mailbox' }
      // },
      // {
      //   path: 'chat',
      //   loadComponent: () => import('./chat/chat.component').then(c => c.ChatComponent),
      //   data: { breadcrumb: 'Chat' }
      // },
      // {
      //   path: 'form-controls',
      //   loadChildren: () => import('./form-controls/form-controls.routes').then(p => p.routes),
      //   data: { breadcrumb: 'Form Controls' }
      // },
      // {
      //   path: 'tables',
      //   loadChildren: () => import('./tables/tables.routes').then(p => p.routes),
      //   data: { breadcrumb: 'Tables' }
      // },
      // { 
      //   path: 'profile', 
      //   loadChildren: () => import('./profile/profile.routes').then(p => p.routes),
      //   data: { breadcrumb: 'Profile' } 
      // },
      // {
      //   path: 'schedule',
      //   loadComponent: () => import('./schedule/schedule.component').then(c => c.ScheduleComponent),
      //   data: { breadcrumb: 'Schedule' }
      // },
      // {
      //   path: 'maps',
      //   loadChildren: () => import('./maps/maps.routes').then(p => p.routes),
      //   data: { breadcrumb: 'Maps' }
      // },
      // {
      //   path: 'charts',
      //   loadChildren: () => import('./charts/charts.routes').then(p => p.routes),
      //   data: { breadcrumb: 'Charts' }
      // },
      // {
      //   path: 'drag-drop',
      //   loadComponent: () => import('./drag-drop/drag-drop.component').then(c => c.DragDropComponent),
      //   data: { breadcrumb: 'Drag & Drop' }
      // },
      // {
      //   path: 'icons',
      //   loadComponent: () => import('./icons/icons.component').then(c => c.IconsComponent),
      //   data: { breadcrumb: 'Icons' }
      // },
      // {
      //   path: 'blank',
      //   loadComponent: () => import('./blank/blank.component').then(c => c.BlankComponent),
      //   data: { breadcrumb: 'Blank page' }
      // },
      // {
      //   path: 'search',
      //   loadComponent: () => import('./search/search.component').then(c => c.SearchComponent),
      //   data: { breadcrumb: 'Search' }
      // },
      // { 
      //   path: 'entries',
      //   loadComponent: () => import('../feature/session/entries/entries.component').then(c => c.EntriesComponent),
      // },
      // { 
      //   path: 'printing ',         
      //   loadComponent: () => import('../feature/session/printing/printing.component').then(c => c.PrintingComponent),
      //   data: { breadcrumb: 'Printing' }
      // },
      // { 
      //   path: 'query',         
      //   loadComponent: () => import('./query/query.component').then(c => c.QueryComponent),
      //   data: { breadcrumb: 'Query' }
      // },
      // {
      //   path: 'followup',
      //   loadComponent: () => import('./followup/followup.component').then(c => c.FollowupComponent),
      // },
      // {
      //   path:'reports',
      //   loadComponent: () => import('./reports/reports.component').then(c => c.ReportsComponent),
      // },
      // {
      //   path: 'masters',
      //   loadComponent: () => import ('./master/masters.component').then(c => c.MastersComponent),
      // },
      // {
      //   path: 'miscellaneous',
      //   loadComponent: () => import('./miscellaneous/miscellaneous.component').then(c => c.MiscellaneousComponent),
      // },

      //login page with in a page component working condition 
      // {
      //   path: ConstantsService.ROUTE_LOGIN,
      //   loadComponent: () => import('../feature/non-session/login/login.component').then(m => m.LoginComponent),
      // }


    ]
  }
];