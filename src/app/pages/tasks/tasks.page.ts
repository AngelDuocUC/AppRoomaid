import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateTohome() {
    this.router.navigate(['tabs/home'])
  }
}
