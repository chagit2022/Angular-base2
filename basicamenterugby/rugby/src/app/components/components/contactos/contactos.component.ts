import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators }  from '@angular/forms';

@Component({
	selector: 'app-contactos',
	templateUrl: './contactos.component.html',
	styleUrls: ['./contactos.component.css']
	})
export class ContactosComponent implements OnInit {
	registroForm: FormGroup;
	regexCorreo = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
	regexPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
	regexTelefono = /^.{1,11}$/


    constructor(private fb: FormBuilder) {
      this.registroForm = this.fb.group({
        nombre: ['', Validators.required],
        apellidos: ['', Validators.required],
        correo: ['',[Validators.required, Validators.pattern(this.regexCorreo)]],
        mensaje: ['', Validators.required]
      })

    }

  ngOnInit(): void {

  }

  contactos(){
    console.log(this.registroForm);
  }
}
