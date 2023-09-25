
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  nombre: string = '';
  contrasena: string = '';

  constructor(private storage: Storage,private router: Router) {}

  async guardarRegistro() {
    console.log('Nombre:', this.nombre);
    console.log('Contraseña:', this.contrasena);
    
    if (this.nombre.trim() === '' || this.contrasena.trim() === '') {
      return;
    }

    const usuario = {
      nombre: this.nombre,
      contrasena: this.contrasena,
    };

    await this.storage.create();
    console.log('Base de datos creada');

    const usuarios = await this.storage.get('usuarios') || [];

    
    usuarios.push(usuario);
    console.log(usuario)

    await this.storage.set('usuarios', usuarios);

    console.log('Usuario creado y guardado en el Local Storage');
    console.log('Usuarios en el Local Storage:', usuarios);
    this.router.navigate(['/login'])
  }
  ngOnInit() {
  }

  navigateToLogin() {
    this.router.navigate(['/login'])
  }
}
