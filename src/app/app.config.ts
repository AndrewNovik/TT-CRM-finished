import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { allIcons, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NgbAccordionModule,
  NgbDateAdapter,
  NgbDateNativeAdapter,
} from '@ng-bootstrap/ng-bootstrap';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(APP_ROUTES),
    provideHttpClient(),
    importProvidersFrom(
      NgxBootstrapIconsModule.pick(allIcons, {
        width: '1.2em',
        height: '1.2em',
      }),
    ),
    importProvidersFrom(ReactiveFormsModule),
    importProvidersFrom(NgbAccordionModule),
    { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter },
  ],
};
