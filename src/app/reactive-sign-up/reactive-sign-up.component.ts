import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserNameValidators } from './UserName.validators';

@Component({
  selector: 'reactive-sign-up',
  templateUrl: './reactive-sign-up.component.html',
  styleUrls: ['./reactive-sign-up.component.css']
})
export class ReactiveSignUpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  form = new FormGroup({
    account: new FormGroup({
      email : new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        UserNameValidators.cannotContainSpace
      ], UserNameValidators.usernameTaken),
      password : new FormControl("")
    })
  })
  login(){
    this.form.setErrors({
      loginError:true
    });
    console.log(this.form);
  }
  get email() {
    return this.form.get('account.email');
  }
  log(){
    console.log(this.email);
  }

}
