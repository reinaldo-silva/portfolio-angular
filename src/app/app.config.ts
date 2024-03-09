import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import {
  AlarmClockOff,
  ChevronDown,
  Home,
  LucideAngularModule,
  Menu,
} from 'lucide-angular';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      LucideAngularModule.pick({ Home, Menu, AlarmClockOff, ChevronDown })
    ),
    provideClientHydration(),
  ],
};
