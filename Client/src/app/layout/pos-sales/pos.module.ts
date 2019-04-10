import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { DataTablesModule } from 'angular-datatables';
import { actionReducer } from 'src/app/shared/store/reducers';

import { PosRoutingModule } from './pos-routing.module';
import { PosSalesComponent } from './pos-sales.component';

export function tokenGetter() {
  return localStorage.getItem('Token');
}
@NgModule({
  declarations: [
    PosSalesComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    StoreModule.forRoot({pos: actionReducer}),
    PosRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['http://localhost:4200']
      }
    }),
  ],

})
export class PosModule { }
