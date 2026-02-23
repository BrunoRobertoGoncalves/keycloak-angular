import { ApplicationConfig } from '@angular/core';
import { provideAuth } from './core/auth/auth.providers';

export const appConfig: ApplicationConfig = {
  providers: [
    ...provideAuth()
  ]
};