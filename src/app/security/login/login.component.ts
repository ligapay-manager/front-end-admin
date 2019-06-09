import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import {Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
  ]);

  senhaFormControl = new FormControl('', [
    Validators.required
]);

  constructor(private router: Router) { }

  ngOnInit() {
    //this.router.navigate(['./usuarios']);
  }

}
