import { Component, OnInit } from '@angular/core';
import { userDataValidation } from '../../interfaces/userDataValidation';
import { UserLoginServices } from '../../services/userLogin.service';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.less']
})
export class LoggingComponent implements OnInit {

  constructor(private userLoginServices: UserLoginServices) { }

  formValidation: userDataValidation = {
    userName: 'luis',
    userNickname: 'pedro',
    userPassword: '123'
  };

  ngOnInit(): void {
    this.userLoginServices.getLogin(this.formValidation).subscribe( (log)=> console.log("from comp",log) );
  }

}
