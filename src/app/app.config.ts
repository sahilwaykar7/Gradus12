import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { OverlayContainer } from '@angular/cdk/overlay';
import { CustomOverlayContainer } from './theme/utils/custom-overlay-container';
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { UsersData } from '@data/users-data';
import { HttpClient, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns'; 
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpService } from './core/services/http.service';

export const appConfig: ApplicationConfig = {
  providers: [
    // provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(
      routes,
      withPreloading(PreloadAllModules),  // comment this line for enable lazy-loading
    ), 
    provideAnimationsAsync(),
    provideHttpClient(),
    // importProvidersFrom(InMemoryWebApiModule.forRoot(UsersData, { delay: 1000 })),
    importProvidersFrom(CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })),
    importProvidersFrom(HttpClient),
    importProvidersFrom(),
    {
      provide: HTTP_INTERCEPTORS,                           
      useClass: HttpService,
      multi: true
    },
    // importProvidersFrom(HttpClientInMemoryWebApiModule.forFeature(UsersData, {
    //   passThruUnknownUrl: true,  // let real APIs work!
    //   dataEncapsulation: false,
    // })),
    
    { provide: OverlayContainer, useClass: CustomOverlayContainer },
  
  
  ]
};

 