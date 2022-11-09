import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	loginForm: FormGroup;
	regexCorreo = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
	regexPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

	constructor(private fb: FormBuilder) {
		this.loginForm= this.fb.group({
			correo:['', [Validators.required, Validators.pattern(this.regexCorreo)]],
			clave:['', [Validators.required, Validators.pattern(this.regexPass)]],


		})
	}

	ngOnInit(): void {
	}

	loginUsuario(){
    let varCorreo = this.loginForm.get('correo')?.value;
    let varClave = this.loginForm.get('clave')?.value;
    if (varCorreo == false && varClave == false){
		Swal.fire({
			title: 'dios mio, lo perdimos',
			text: 'Vuelvo a escribir tus datos, carajo!!!!',
			icon: 'error',
			confirmButtonText: 'hagalo, siento que puede...'
		  })
    }



	}
}
