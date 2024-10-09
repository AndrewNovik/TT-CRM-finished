import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';

@Component({
  selector: 'app-header-nav-bar',
  standalone: true,
  imports: [NgbDropdownModule, CommonModule, NgxBootstrapIconsModule],
  templateUrl: './header-nav-bar.component.html',
  styleUrl: './header-nav-bar.component.css',
})
export class HeaderNavBarComponent {
  get isLoggedIn() {
    return this.auth.isLoggedIn;
  }
  get userName() {
    return this.auth.userName;
  }
  get userRole() {
    return this.auth.userRole;
  }

  isExpanded = false;

  @Output() expand = new EventEmitter<boolean>();

  constructor(public auth: AuthService) {}

  logout() {
    this.auth.logout();
  }

  expandToggle() {
    this.isExpanded = !this.isExpanded;
    this.expand.emit(this.isExpanded);
  }
}
