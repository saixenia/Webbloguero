import { Component } from '@angular/core';
import { User } from './model/user';
import { Photos } from './model/photos';
import { Http } from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Users: Array<User>;
  Photos: Array<Photos>;
  constructor(private http: Http){
	 this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(resp=>this.Users=resp.json());
	 this.http.get("https://jsonplaceholder.typicode.com/photos").subscribe(resp=>this.Photos=resp.json());
  }
}
