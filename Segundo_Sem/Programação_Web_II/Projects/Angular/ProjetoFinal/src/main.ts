// main.ts
import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app/app.routes';
import { UserService } from '../Service/user.service';
import { DogService } from '../Service/dog.service';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideRouter(routes, withComponentInputBinding()),
    UserService,
    DogService,
    importProvidersFrom(HttpClientModule),
    provideClientHydration(),
  ]
})
  .catch(err => console.error(err));