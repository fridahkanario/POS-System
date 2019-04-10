import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { Router } from '@angular/router';
import { AppService } from '../shared/services/app-service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    RegisterForm = this.fb.group({
        username: ['', Validators.required],
        email: [''],
        phone: [''],
        password: ['']
    });

    constructor(private router: Router, private appService: AppService, private fb: FormBuilder) {}
    submit(): void {
        // tslint:disable-next-line:max-line-length
        if (this.RegisterForm.value.username && this.RegisterForm.value.email && this.RegisterForm.value.phone && this.RegisterForm.value.password) {
        console.log(this.RegisterForm.value);
        this.appService.createPerson(JSON.stringify(this.RegisterForm.value)).subscribe(data => console.log(data));
        this.RegisterForm.reset();
        this.router.navigate(['/login']);
        alert('Registration was successful!');
        } else {
        alert('Registration not successful! All fields are required');
        }
    }

    ngOnInit() {}

}
