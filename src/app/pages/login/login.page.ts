import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formularioLogin: FormGroup;

  constructor(private router: Router, public alertContrller: AlertController) {
    this.formularioLogin = new FormGroup({
      nombre: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
  }

  async validarCredenciales() {
    var f = this.formularioLogin.value;

    // Obtener usuarios registrados del localStorage o inicializar un array vacío
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

    // Buscar un usuario con el nombre ingresado en el formulario
    const usuario = usuarios.find((u: any) => u.nombre === f.nombre);

    if (usuario) {
      // Usuario encontrado, verificar contraseña
      if (usuario.password === f.password && usuario.nombre === f.nombre) {
        // Credenciales válidas, permitir el inicio de sesión
        localStorage.setItem("ingresado", "true");
        const alert = await this.alertContrller.create({
          header: "Usuario",
          message: `Bienvenido a Roomaid ${usuario.nombre}`,
          buttons:[
            {
              text: 'OK',
              handler: () => {
                this.router.navigate(['/tabs/home']);
              }
            }
          ]
        });
        await alert.present();
      } else {
        // Contraseña incorrecta, mostrar mensaje de error
        const alert = await this.alertContrller.create({
          header: "Usuario",
          message: `Contraseña incorrecta `,
          buttons: ["OK"]
        });
        await alert.present();
      }
    } else {
      // Usuario no encontrado, mostrar mensaje de error
      const alert = await this.alertContrller.create({
        header: "Usuario",
        message: "Usuario no registrado",
        buttons: ["OK"]
      });
      await alert.present();
    }
  }

  navigateToRegister() {
    this.router.navigate(['/register'])
  }
}
