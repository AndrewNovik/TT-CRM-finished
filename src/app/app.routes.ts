import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ManagementComponent } from './pages/management/management.component';
import { SubagentsComponent } from './pages/subagents/subagents.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LayoutComponent } from './shared/layout/layout.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'welcome', loadComponent: () => WelcomeComponent },
      {
        path: 'main-page',
        loadComponent: () => MainPageComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'management',
        loadComponent: () => ManagementComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'subagents',
        loadComponent: () => SubagentsComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];
