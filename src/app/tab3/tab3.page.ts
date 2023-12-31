import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor(private router: Router) {}

  navigateToQRPage() {
    this.router.navigate(['/qr-page']);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  async logout() {
    localStorage.removeItem('ingresado');
    this.router.navigate(['/login']);
  }
}
