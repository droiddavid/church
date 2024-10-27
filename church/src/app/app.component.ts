import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'church';
  theList: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost:8080/greeting').subscribe((data) => {
      console.log(data);
      this.theList = data;
    });
  }


}
