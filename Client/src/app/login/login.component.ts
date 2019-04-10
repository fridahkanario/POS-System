import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../shared/services/app-service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    LoginForm = this.fb.group({
        username: ['', [Validators.required]],
        password: ['']
    });

    constructor(public router: Router, private fb: FormBuilder, private appService: AppService) {}

    onLoggedin(): void {
        console.log(this.LoginForm.value);
        this.appService.loginPerson(this.LoginForm.value).subscribe(data => {
            if (data.state) {
                localStorage.setItem('isLoggedin', 'true');
                this.router.navigate(['/dashboard']);
                this.LoginForm.reset();
            }
        });

        this.router.navigate(['/login']);
    }

    ngOnInit() {}

    // onLoggedin() {localStorage.setItem('isLoggedin', 'true'); }
}
