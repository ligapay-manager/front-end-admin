import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario.model';
import { UsuariosService } from './usuarios.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'lpa-usuarios-page',
  templateUrl: './usuarios-page.component.html',
  styleUrls: ['./usuarios-page.component.css']
})
export class UsuariosPageComponent implements OnInit {   

  displayedColumns: string[] = ['nome', 'email', 'nomeTime', 'montanteCarteira', 'acoes'];
  
  dataSource: Usuario[];

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit() {
    this.usuariosService.listarUsuarios().subscribe(res =>
    {
      this.dataSource = res['data']['users'];

      console.log(res['data']['users']);
    })
  }

}
