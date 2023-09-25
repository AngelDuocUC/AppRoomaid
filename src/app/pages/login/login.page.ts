import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  nombre: string = '';
  contrasena: string = '';

  constructor(private storage: Storage , private router: Router) {
    this.initStorage();
  }

  async initStorage() {
    await this.storage.create(); // Crear la base de datos si no existe
    console.log('Base de datos creada');
  }

  ngOnInit() {
    // Verificar si el usuario ya está autenticado (por ejemplo, mediante un servicio de autenticación)
    const usuarioAutenticado = true; // Reemplaza esto con tu lógica de autenticación

    if (usuarioAutenticado) {
      console.log('usuario autenticado ');
      this.router.navigate(['/tabs']);
    }
  }

  iniciarSesion() {
    // Obtener la lista de usuarios registrados desde el almacenamiento local
    this.storage.get('usuarios').then((usuarios: any[]) => {
      if (usuarios) {
        // Buscar un usuario con el correo y contraseña ingresados
        const usuario = usuarios.find((usuario) => usuario.nombre === this.nombre && usuario.contrasena === this.contrasena);

        if (usuario) {
          console.log('Inicio de sesión exitoso');
          this.router.navigate(['/tabs']);
          
        } else {
          console.log('Credenciales incorrectas');
          // Mostrar un mensaje de error o tomar otras medidas apropiadas
        }
      } else {
        console.log('No hay usuarios registrados');
        // Mostrar un mensaje de que no hay usuarios registrados
      }
    });
  }

  
}
