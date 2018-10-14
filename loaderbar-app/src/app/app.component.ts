import { Component, OnInit } from '@angular/core';
import { DataCallsService } from './_services/datacalls.service'
import { User } from './model/user.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'loaderbar-app';
  users: User[];

  constructor(private dataService: DataCallsService) { }

  ngOnInit() {
    /* this.loaderService.show();
    this.dataService.getUsers()
      .subscribe( data => {
        this.users = data;
        this.loaderService.hide();
      } 
    );*/
    setTimeout(()=>this.refreshUsers(),100)
  }

  refreshUsers(): void {
    this.users = null;
    this.dataService.getUsers()
    .subscribe( data => {
      this.users = data;
    });
  };

}
