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

  calcularPontuacao(usuario: Usuario) {
    usuario.time.somaScores = usuario.time.scores.reduce((a, b) => a + b.score, 0);
    usuario.time.somaScores = +usuario.time.somaScores.toFixed(2);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.usuarioId = params.get('id');
    });
    this.usuarioService.getUsuario(this.usuarioId).subscribe(res => {
      res['data']['users'].forEach(this.calcularPontuacao);
      this.usuario = res['data']['users'][0];
      console.log(this.usuario);
    });
  }

}
