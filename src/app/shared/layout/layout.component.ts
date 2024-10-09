import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterOutlet } from '@angular/router';
import { HeaderNavBarComponent } from './header-nav-bar/header-nav-bar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    SidebarComponent,
    HeaderNavBarComponent,
    NgbDropdownModule,
    RouterOutlet,
    CommonModule,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  isExpanded = false;
}
