import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(private router:Router) { }



  ngOnInit() {
    if(localStorage.getItem("ingresado")){
      setTimeout(() => {
      this.router.navigateByUrl('/tabs/home')
      }, 3500);
      
    } else{
      setTimeout(() => {
      this.router.navigateByUrl('/tutorial')
      }, 3500);
    }
  }
}


