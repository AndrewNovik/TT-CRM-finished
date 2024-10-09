import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

const enum LocalStorageKey {
  Token = 'TestTask',
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userName: string = this.token || 'Not logged';
  userRole: string = (this.token && 'Пользователь') || 'Not logged';

  get token(): string | null {
    return localStorage.getItem(LocalStorageKey.Token);
  }

  get isLoggedIn(): boolean {
    return this.token !== null;
  }

  constructor(private router: Router) {}

  login(login: string, pass: string): boolean {
    if (!login && !pass) {
      return false;
    }

    this.userName = login;
    this.userRole = 'Пользователь';
    localStorage.setItem(LocalStorageKey.Token, login);
    this.router.navigate(['/main-page']);
    return true;
  }

  logout() {
    this.userName = 'Not logged';
    this.userRole = 'Not logged';
    localStorage.removeItem(LocalStorageKey.Token);
    this.router.navigate(['/welcome']);
  }
}
