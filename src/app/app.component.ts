import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { initChangeDetectorIfExisting } from '@angular/core/src/render3/instructions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
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
