import {
  ApplicationConfig,
  ErrorHandler,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { GlobalErrorHandler } from './core/handlers/global-error.handler';
import { loggingInterceptor } from './core/interceptors/logging.interceptor';
import { authConfig } from './auth/auth.config';
import { AuthInterceptor, provideAuth } from 'angular-auth-oidc-client';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([loggingInterceptor])),
    provideAuth(authConfig),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
    },
    provideAnimationsAsync(),
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
    provideAuth(authConfig),
  ],
};
