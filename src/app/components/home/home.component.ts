import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: any[] = [];

  constructor(
    protected apiService: ApiService
  ) { }

  ngOnInit(): void {

    this.apiService.getUsers()
    .subscribe(
      (data) => { // Success
        this.users = data['data'];
        console.log(this.users);
      },
      (error) => {
        console.error(error);
      }
    );
    
  }

}
