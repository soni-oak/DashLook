import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isCollapsed = true;

  navbarTitle = 'Navbar';
  navLinks = [
    { title: 'Home', link: '#' },
    { title: 'Features', link: '#' },
    { title: 'Pricing', link: '#' }
    // Add more navigation items as needed
  ];


  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
