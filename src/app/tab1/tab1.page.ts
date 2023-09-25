import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  // Barras de progreso para la primera métrica
  public buffer1 = 0.06;
  public progress1 = 0;

  // Barras de progreso para la segunda métrica
  public buffer2 = 0.12;
  public progress2 = 0;

  // Barras de progreso para la tercera métrica
  public buffer3 = 0.18;
  public progress3 = 0;

  constructor(private router: Router) {
    // Función para actualizar la primera métrica
    setInterval(() => {
      this.buffer1 += 0.06;
      this.progress1 += 0.06;

      if (this.progress1 > 1) {
        setTimeout(() => {
          this.buffer1 = 0.06;
          this.progress1 = 0;
        }, 1000);
      }
    }, 1000);

    // Función para actualizar la segunda métrica
    setInterval(() => {
      this.buffer2 += 0.06;
      this.progress2 += 0.06;

      if (this.progress2 > 1) {
        setTimeout(() => {
          this.buffer2 = 0.06;
          this.progress2 = 0;
        }, 1000);
      }
    }, 1000);

    // Función para actualizar la tercera métrica
    setInterval(() => {
      this.buffer3 += 0.06;
      this.progress3 += 0.06;

      if (this.progress3 > 1) {
        setTimeout(() => {
          this.buffer3 = 0.06;
          this.progress3 = 0;
        }, 1000);
      }
    }, 1000);
  }


  HomePage() {
  this.router.navigate(['/home']);
}
  
}

 