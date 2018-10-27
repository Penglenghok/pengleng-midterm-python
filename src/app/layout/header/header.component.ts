import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public afAuth:AngularFireAuth,private router:Router) { }

  ngOnInit() {
  }
  logout() {
    this.afAuth.auth.signOut().then
    (() => this.router.navigate(['']));
  }
}
