import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/shared/services/app-service';
import { Store , select} from '@ngrx/store';
import { ADD} from './actions' ;
import { Observable } from 'rxjs';
import { Pos } from '../dashboard/dashboard.component';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {
    public count: Observable<number>;
    pos;

id: number;
    AddPos = this.fb.group({
        serialNumber: ['', Validators.required],
        make: [''],
        owner: [''],
    });
    // tslint:disable-next-line:max-line-length
    constructor(private router: Router, private route: ActivatedRoute, private appService: AppService, private fb: FormBuilder, private store: Store<{count: number}>) {
        this.count = store.pipe (select('count'));
    }

    increase() {
        this.store.dispatch(new ADD());
      }
  submit(): void {
        // tslint:disable-next-line:max-line-length
        if (this.AddPos.value.serialNumber && this.AddPos.value.make && this.AddPos.value.owner) {
        console.log(this.AddPos.value);
        this.appService.createPos(JSON.stringify(this.AddPos.value)).subscribe(data =>   console.log(data));
        this.AddPos.reset();
        this.router.navigate(['/dashboard']);
        alert('Adding POS was successful!');
        } else {
        alert('Adding POS not successful! All fields are required');
        }


    }

    editPos() {
        this.id = this.route.snapshot.params['id'];
        this.pos = new Pos (1, '', '', '');
            this.appService.getPos( this.id).subscribe(

              data => this.pos = data
            );
          }

    ngOnInit() {
        this.store.dispatch(new ADD());

    }
}
