import { Component } from '@angular/core';
import { OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    formGroup: FormGroup;
    resourcesLoaded: boolean = false;

    constructor(
        private authService: AuthService,
        private router: Router,
    ){
        this.formGroup = new FormGroup({
            username: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required])
        });
    };
    
    ngOnInit(): void {
        // ...
    }

    loginProcess(): void{
        if (this.formGroup.valid) {
            this.resourcesLoaded = true;
            this.authService.login(this.formGroup.value).subscribe(result => {
                if (result.success) {
                    localStorage.setItem('login_data', JSON.stringify(result.datas));
                    this.router.navigateByUrl('/find');
                } else {
                    console.log(result);
                }
                this.resourcesLoaded = false;
            });
        }
    }
}
