import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { FeatureComponent } from './app/feature/feature.component';

//for ng2-dragula
(window as any).global = window;

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
