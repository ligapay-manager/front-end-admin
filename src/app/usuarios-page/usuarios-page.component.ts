import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario.model';
import { UsuariosService } from './usuarios.service';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'lpa-usuarios-page',
  templateUrl: './usuarios-page.component.html',
  styleUrls: ['./usuarios-page.component.css']
})
export class UsuariosPageComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'email', 'nomeTime', 'montanteCarteira', 'acoes'];
  dataSource: Usuario[];
  formFiltro;

  constructor(private usuariosService: UsuariosService) {}

  buscarUsuarios() {
    this.usuariosService.listarUsuarios(this.formFiltro.value.email,
                                        this.formFiltro.value.nome,
                                        this.formFiltro.value.nomeTime).subscribe(res => {
      this.dataSource = res.data.users;
      console.log(res.data.users);
    });
  }

  ngOnInit() {
    this.formFiltro = new FormGroup({
      nome: new FormControl(''),
      email: new FormControl(''),
      nomeTime: new FormControl('')
    });

    this.usuariosService.listarUsuarios('', '', '').subscribe(res => {
      this.dataSource = res.data.users;
      console.log(res.data.users);
    });
  }

}
