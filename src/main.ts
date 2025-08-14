import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { initLoadingScreen } from './app/loading-screen';

initLoadingScreen();

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
