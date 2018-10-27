import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { Router } from '@angular/router';
import { FormGroup, AbstractControl,ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { error } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth,public route:Router,public fb:FormBuilder) { }
bix:FormGroup;
name:AbstractControl;
password:AbstractControl;
  ngOnInit() {

    this.bix=this.fb.group({
      name:[null],
      password:[null]
    });
    this.name=this.bix.controls['name'];
    this.password=this.bix.controls['password'];
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then
    (()=>this.route.navigate(['home']))
    ;
  }
  logout() {
    this.afAuth.auth.signOut();
  }


  submit(f:any){
    if(this.bix.valid){
      this.afAuth.auth.signInWithEmailAndPassword(f.name,f.password).then(()=>this.route.navigate(['home'])
      
      ).catch(error=>alert("wrong password bitch"));
    }
  }
}
