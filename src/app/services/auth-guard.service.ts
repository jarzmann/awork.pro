import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthenticationService, private router: Router) {}

  canActivate(): boolean {
    this.auth.authenticationState.subscribe(state => {
      if (!state) {
        this.router.navigate(['login']);
      }
    });

    return this.auth.isAuthenticated(); // get user auth state
  }
}
