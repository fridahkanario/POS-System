import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router } from '@angular/router';
import { AppService } from 'src/app/shared/services/app-service';
import { Store , select} from '@ngrx/store';
import { ADD} from './actions' ;
import { Observable } from 'rxjs';
import { Pos } from './pos.model';
import { AppState } from './state';
import * as PosActions from './actions';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
  public count: Observable<number>;
  pos;
  id = 2;


  constructor(private router: Router, private appService: AppService, private store: Store<{count: number}>) {
    this.count = store.pipe (select('count'));
}

addPos(serial: string, owner: string, make: string, date: string) {
  this.store.dispatch(new PosActions.AddPos({id: this.id++, serialNumber: serial, owner: owner, make: make, date: date}));
}


  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.pos = this.getPos();
  }

  getPos() {
    this.appService.getPos()
      .subscribe(data => {
        console.log(data);
        this.pos = data;
      });
  }

  deletePos(id) {
    console.log(id);
    this.appService.deletePos(id).subscribe(
      data => {
        this.reloadData();
        console.log('mpomoim');
      }
     );
  }

}
