import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pos } from 'src/app/shared/store/model/pos.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/store/state';
import * as PosActions from 'src/app/shared/store/actions';

@Component({
  selector: 'app-pos-sales',
  templateUrl: './pos-sales.component.html',
  styleUrls: ['./pos-sales.component.scss']
})
export class PosSalesComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  pos: Observable<Pos[]>;
  id = 2;
  constructor(private store: Store<AppState>) {
    this.pos = store.select('pos');
  }

  addPos(serial: string, a: number, q: number) {
    this.store.dispatch(new PosActions.AddPos({id: this.id++, serialNumber: serial, amount: a, quantity: q}));
  }

  deletePos(id) {
    this.store.dispatch(new PosActions.DeletePos(id));
  }

  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  }

}
