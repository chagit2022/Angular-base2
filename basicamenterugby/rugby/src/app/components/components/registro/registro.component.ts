import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Usuario } from '../../models/registro';

@Component({
	selector: 'app-registro',
	templateUrl: './registro.component.html',
	styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

	registroForm: FormGroup;
  regexCorreo = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
  regexPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
  regexTelefono = /^.{0,11}$/;

	constructor(private fb: FormBuilder) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern(this.regexTelefono)]],
      correo: ['', [Validators.required, Validators.pattern(this.regexCorreo)]],
      clave: ['', [Validators.required, Validators.pattern(this.regexPass)]],
      verifyclave: ['', [Validators.required]],
      direccion: ['', Validators.required],
      ciudad:['', Validators.required],
      zip:['', Validators.required],

    })

  };



	ngOnInit(): void {
	};

// faire le modele dans les autres dossiers contactos login....
  registrarUsuario(){
    // console.log(this.registroForm.get('clave')?.value);
    // console.log(this.registroForm.get('verifyclave')?.value);
    let varclave = this.registroForm.get('clave')?.value
    let varverifyclave = this.registroForm.get('verifyclave')?.value
		if(varclave != varverifyclave){
		Swal.fire({
			title: 'ammorrrr, tenemos uno bien pesado hoy,',
			text: 'si el no verifica su contraseña.. me voy, maldicion',
			icon: 'error',

      })
    }else{
		if(!this.regexCorreo.test(this.registroForm.get('correo')?.value)){
			Swal.fire({
			title: 'su correo se ve algo raro',
			text: 'No se peyel',
			icon: 'error',
			})
		}else{
			const DATA_USUARIO: Usuario = {
			nombre: this.registroForm.get('nombre')?.value,
			correo: this.registroForm.get('correo')?.value,
			clave : this.registroForm.get('clave')?.value
			}
    console.log(DATA_USUARIO);

      }
    }

  }


};

