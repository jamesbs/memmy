import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HomeRoutingService {
  constructor(private router: Router) { }

  goHome() {
    this.router.navigate(['']);
  }

  goToDashboard() {
    this.router.navigate(['']);
  }
  
  goToLoggedOut() {
    this.router.navigate(['logged-out']);
  }
}
