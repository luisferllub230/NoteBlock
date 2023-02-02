import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  loggingValidator = new BehaviorSubject<object>(
    {
      isLogging: true,
      userName: "Luis Fernandez",
      userEmail: "tes@email.com"
    })


  constructor() { } 

  ngOnInit(): void {
  }

  

}
