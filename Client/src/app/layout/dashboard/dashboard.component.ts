import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router } from '@angular/router';
import { AppService } from 'src/app/shared/services/app-service';


export class Pos {

  constructor(
    public id: number,
    public serialNumber: string,
    public make: string,
    public owner: string,

  ) {

  }


  }


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  pos;
  id = 2;

  constructor(private router: Router, private appService: AppService) {
  }


  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    this.reloadData();
  }

  reloadData() {
    this.pos = this.getPos();
  }

  getPos() {
    this.appService.getPos(this.id)
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

  editPos(id) {
    console.log(`update  pos ${id}`);
    this.router.navigate(['form', id]);
}
 
}
