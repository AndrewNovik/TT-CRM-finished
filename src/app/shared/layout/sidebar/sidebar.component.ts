import { CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { AuthService } from '../../../services/auth.service';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterModule,
    NgxBootstrapIconsModule,
    NgClass,
    CommonModule,
    NgbDropdownModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Input() isExpanded = false;

  get isLoggedIn() {
    return this.auth.isLoggedIn;
  }
  get userName() {
    return this.auth.userName;
  }
  get userRole() {
    return this.auth.userRole;
  }

  constructor(public auth: AuthService) {}

  logout() {
    this.auth.logout();
  }
}
