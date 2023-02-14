import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, map, tap  } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  isLogging = new BehaviorSubject<boolean>(true);
  isUserImg = new BehaviorSubject<boolean>(false);

  constructor() { }

  ngOnInit(): void {
  }

  getIsUserImg(): boolean
  {
    return this.isUserImg.value;
  }

  setIsLogin( newValue:boolean )
  {
    this.isLogging.next(newValue);
  }

  getIsLogging(): Boolean
  {
    return this.isLogging.value;
  }

}
