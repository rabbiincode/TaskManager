import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate{
  isLogin = false
  constructor(private auth: AuthService, private router: Router){
    this.auth.isLogin$?.subscribe((login: boolean) => {
      this.isLogin = login
    })
  }

  canActivate(): boolean{
    if (this.isLogin && !this.auth.isAdmin){
      return true
    } else{
      this.router.navigate(['/login'])
      return false
    }
  }
}
