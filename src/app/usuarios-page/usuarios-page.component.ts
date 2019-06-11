import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario.model';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'lpa-usuarios-page',
  templateUrl: './usuarios-page.component.html',
  styleUrls: ['./usuarios-page.component.css']
})
export class UsuariosPageComponent implements OnInit {   

  displayedColumns: string[] = ['nome', 'email', 'nomeTime', 'montanteCarteira', 'pontuacao', 'acoes'];
  
  dataSource: Usuario[];

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit() {
    this.dataSource = this.usuariosService.listarUsuarios();
  }

}
