import { Routes } from '@angular/router';
import { sessionRoutes } from './feature/session/session.routes';
import { ConstantsService } from './core/services/constants.service';
import { LoginComponent } from './feature/non-session/login/login.component';
import { PagesComponent } from './pages/pages.component';
import { AppComponent } from './app.component';

export const routes: Routes = [  
    // {
    //     path: '', 
    //     loadChildren: () => import('./pages/pages.routes').then(p => p.routes)
    // },
    // {
    //     path: ConstantsService.ROUTE_NON_SESSION,
    //     loadChildren: () => import('./feature/non-session/non-session.routing').then(m => m.nonSessionRoutes),
    //   },
    // {
    //     path: 'feature',
    //     loadComponent: () => import('./feature/feature.component').then(c => c.FeatureComponent),
    // },
    // { 
    //     path: 'landing', 
    //     loadComponent: () => import('./pages/landing/landing.component').then(c => c.LandingComponent),
    // },
    // { 
    //     path: ConstantsService.ROUTE_LOGIN, 4200
    //     loadChildren: () => import('./feature/non-session/login/login.component').then(m => m.LoginComponent),
    //     data: { breadcrumb: 'login' }
    // },
    // { 
    //     path: 'register', 
    //     loadComponent: () => import('./pages/register/register.component').then(c => c.RegisterComponent),
    // },
    // {
    //     path: ConstantsService.ROUTE_LOGIN,
    //     loadComponent: () => import('./feature/non-session/login/login.component').then(c => c.LoginComponent),
    // },
    // { 
    //     path: 'error', 
    //     loadComponent: () => import('./pages/errors/error/error.component').then(c => c.ErrorComponent),
    //     data: { breadcrumb: 'Error' }  
    // },
    // { 
    //     path: '**', 
    //     loadComponent: () => import('./pages/errors/not-found/not-found.component').then(c => c.NotFoundComponent)  
    // },
    // // {
    // //     path: '',
    // //     loadComponent: () => import('./feature/feature.component').then(c => c.FeatureComponent),
    // //     children: [
    // //       {
    // //         path: 'session',
    // //         children: sessionRoutes
    // //       }
    // //     ]
    // // }
    // // { path: 'login',component: LoginComponent},
    // // { path: '', redirectTo: 'login', pathMatch: 'full' },

{ path: '', redirectTo: ConstantsService.ROUTE_NON_SESSION_LOGIN, pathMatch: 'full' },
      
{
    path: ConstantsService.ROUTE_NON_SESSION,
    
    loadChildren: () => import('./feature/non-session/non-session.routing').then(m => m.nonSessionRoutes),
},
{
    path: ConstantsService.ROUTE_SESSION,
    loadChildren: () => import('./feature/session/session.routes').then(m => m.sessionRoutes),
},
{
    path: ConstantsService.ROUTE_DASHBOARD,
    loadChildren: () => import('./pages/pages.routes').then(p => p.routes),
},
{
    path: 'feature',
    loadComponent: () => import('./feature/feature.component').then(c => c.FeatureComponent),
},
{
    path: 'landing',
    loadComponent: () => import('./pages/landing/landing.component').then(c => c.LandingComponent),
},
{
    path: 'register',
    loadComponent: () => import('./pages/register/register.component').then(c => c.RegisterComponent),
},
{
    path: 'error',
    loadComponent: () => import('./pages/errors/error/error.component').then(c => c.ErrorComponent),
    data: { breadcrumb: 'Error' },
},
{
    path: '**',
    loadComponent: () => import('./pages/errors/not-found/not-found.component').then(c => c.NotFoundComponent),
},
];
      
