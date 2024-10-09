import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(
    private router: Router,
    private auth: AuthService,
  ) {}

  canActivate(): boolean {
    if (this.auth.isLoggedIn) {
      return true;
    }
    this.router.navigate(['/welcome']);
    return false;
  }
}
