import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UsuarioService} from './usuario.service';
import {Usuario} from '../usuarios-page/usuario.model';

@Component({
  selector: 'lpa-usuario-page',
  templateUrl: './usuario-page.component.html',
  styleUrls: ['./usuario-page.component.css']
})
export class UsuarioPageComponent implements OnInit {

  usuarioId: string;
  usuario: Usuario;

  constructor(private route: ActivatedRoute, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.usuarioId = params.get('id');
    });
    this.usuarioService.getUsuario(this.usuarioId).subscribe(res => {
      this.usuario = res['data']['users'][0];
      console.log(this.usuario);
    });
  }

}
