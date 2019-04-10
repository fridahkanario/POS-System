import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { StatModule } from '../../shared';
import { counterReducer} from './reducer';
import {StoreModule} from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        DashboardRoutingModule,
        StatModule,
        ReactiveFormsModule,
        HttpClientModule,
        StoreModule.forRoot({count: counterReducer})
    ],
    declarations: [
        DashboardComponent,
    ]
})
export class DashboardModule {}
