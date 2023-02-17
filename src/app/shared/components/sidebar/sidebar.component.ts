import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, filter, fromEvent, map, pluck } from 'rxjs';
import { OptionList } from 'src/app/interfaces/globalInterfaces';
import { navOptions } from 'src/app/util/navOptions.enum';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {

  isOptionOpen$ = new BehaviorSubject<boolean>(false);

  //this options come to the backend 
  optionsList$ = new BehaviorSubject<OptionList[]>([
    {
      id: 1,
      name: 'Home',
      isHover: false,
      icon: 'bx bx-home',
      listClassName: 'btn-option'
    },
    {
      id: 2,
      name: 'option 2',
      isHover: false,
      icon: 'bx bx-home',
      listClassName: 'btn-option'
    },
    {
      id: 3,
      name: 'option 3',
      isHover: false,
      icon: 'bx bx-home',
      listClassName: 'btn-option'
    },
    {
      id: 4,
      name: 'option 4',
      isHover: false,
      icon: 'bx bx-home',
      listClassName: 'btn-option'
    }
  ]);

  options: any = {
    [navOptions.optionId1]: false,
    [navOptions.optionId2]: false,
    [navOptions.optionId3]: false,
    [navOptions.optionId4]: false,
  }

  constructor() { }

  ngOnInit(): void {

    fromEvent(this.headerTag, 'mouseover').pipe(
      map((event) => {
        this.getTargetLi(event)
      })
    ).subscribe();

  }


  isOpenOptions(id: number, open: boolean): boolean {
    if (open) {
      return true;
    }

    return this.options[id];
  }

  getTargetLi(event: Event): void {

    let getIdAtr: any = 0;
    let cp = event.composedPath();
    let list = document.querySelectorAll('li.btn-option');

    for (let i = 0; i < list.length; i++) {
      getIdAtr = list[i].getAttribute('data-parameterId');

      if (!cp.some((el) => el === list[i])) {
        this.options[getIdAtr] = false;
        continue;
      }

      this.options[getIdAtr] = true;
    }
  }

  get headerTag(): HTMLCollectionOf<HTMLElement> {
    return document.getElementsByTagName('nav');
  }
}