import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  public user: any;

  constructor(
      private breakpointObserver: BreakpointObserver,
      private authService: AuthService,
      private router: Router
  ){
      this.user = this.parseUser();
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  parseUser(): any{
      let parsed = localStorage.getItem('login_data') || '{}';
      return JSON.parse(parsed);
  }

  logoutProcess(): void{
      this.authService.logout().subscribe(result => {
          localStorage.clear();
          this.router.navigateByUrl('/');
      });
  }

}
