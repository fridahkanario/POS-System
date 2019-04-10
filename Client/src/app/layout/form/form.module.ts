import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { PageHeaderModule } from './../../shared';
import { ReactiveFormsModule } from '@angular/forms';
import { counterReducer} from './reducer';


@NgModule({
    imports: [
        CommonModule,
        FormRoutingModule,
        PageHeaderModule,
        ReactiveFormsModule,
        StoreModule.forRoot({count: counterReducer}) ],
    declarations: [FormComponent]
})
export class FormModule {}
