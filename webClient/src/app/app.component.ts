import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private http: Http){
    
  }
  getData(){
    this.http.get("login/cellphone?phone=13213013241&password=xs110112").subscribe(data => {
      console.log(data);
    });
  }
}
