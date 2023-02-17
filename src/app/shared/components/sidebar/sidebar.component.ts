import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, filter, fromEvent, map, pluck } from 'rxjs';
import { OptionList, OptionValues } from 'src/app/interfaces/globalInterfaces';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {

  cache: OptionValues = { optionId: 0, newOptionValue: false };
  click$ = fromEvent(document, 'mouseover');
  isOptionOpen$ = new BehaviorSubject<boolean>(false);

  //estas obciones van en otra parte  
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

  // ver si se puede crear un enum para esto
  options: any = {
    1: false,
    2: false,
    3: false,
    4: false,
  }

  constructor() { }

  ngOnInit(): void {

    this.click$.pipe(

      map((event) => {

        if (!this.getTargetLi(event)) {
          return { id: 0, option: false };
        }

        let listAtr: any = this.getTargetLi(event);
        let idAtr: number = listAtr.getAttribute('data-parameterId')

        return { id: idAtr, option: true };
      })

    ).subscribe(({ id, option }) => this.setOptionValues({ optionId: id, newOptionValue: option }));

  }


  isOpenOptions(id: number, open: boolean) {
    if (open) {
      return true;
    }

    return this.options[id];
  }

  getTargetLi(event: Event): HTMLElement | boolean {
    let target: HTMLElement = event.target as HTMLElement;
    let listTarget: HTMLElement | null = target.parentElement;

    if (target?.tagName == 'A') {
      listTarget = target.parentElement;
    }

    return listTarget?.tagName == 'LI' ? listTarget : false;
  }

  setOptionValues(payloat: OptionValues) {
    if (!payloat.newOptionValue) {
      console.log('cache payloat', this.cache)
      return this.options[this.cache.optionId] = false;
    }

    this.cache = payloat;
    return this.options[payloat.optionId] = payloat.newOptionValue;
  }
}
