import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

    public user: any;

    constructor(
        private authService: AuthService,
        private router: Router
    ){
        this.user = this.parseUser();
    }

    parseUser(): any{
        let parsed = localStorage.getItem('login_data') || '{}';
        return JSON.parse(parsed);
    }

    logoutProcess(): void{
        this.authService.logout().subscribe(result => {
            console.log(result);
            localStorage.clear();
            this.router.navigateByUrl('/');
        });
    }
}
