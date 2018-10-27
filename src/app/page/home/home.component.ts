import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: Observable<any[]>;


form:FormGroup;
username:AbstractControl;
password:AbstractControl;


  constructor(public db: AngularFirestore, public fb:FormBuilder) {
    this.items = db.collection('tables').valueChanges();



  }

  ngOnInit(){
    this.form=this.fb.group({
      username:[null,Validators.required],
      password:[null,Validators.required]
    })
    this.username=this.form.controls["name"];
    this.password=this.form.controls["password"];
  }

  save(f){
    if(this.form.valid){
      this.db.collection('tables').doc(this.db.createId()).set(f);
    }
  }

}
