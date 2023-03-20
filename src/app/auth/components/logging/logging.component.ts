import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { userInformation } from 'src/app/interfaces/userInformation';
import { UserState } from 'src/app/state/UserState.state';
import { userDataValidation } from '../../interfaces/userDataValidation';
import { UserLoginServices } from '../../services/userLogin.service';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.less']
})
export class LoggingComponent implements OnInit {

  @Select(UserState.getUserInformation) userInformation$!: Observable<any>;
  @Select(UserState.getIsUserLogged) isUserLogged$!: Observable<any>;

  constructor(private userLoginServices: UserLoginServices) { }

  formValidation: userDataValidation = {
    userNickname: 'marinosapete222',
    userPassword: 'MyNuevaPassword'
  };

  ngOnInit(): void {
    this.isUserLogged$.subscribe(console.log);
    this.userInformation$.subscribe((r) => console.log('comp', r))
    const userInfoLogged = this.userLoginServices.getLogin(this.formValidation).subscribe();
  }

}
