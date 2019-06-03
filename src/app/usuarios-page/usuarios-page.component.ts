import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario.model';

const usuarios: Usuario[] = 
    [
      {id: 1, nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nomeTime: 'Arostoles', montanteCarteira: 15.9, pontuacao: 998},
      {id: 2, nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nomeTime: 'Arostoles', montanteCarteira: 15.9, pontuacao: 998},
      {id: 3, nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nomeTime: 'Arostoles', montanteCarteira: 15.9, pontuacao: 998},
      {id: 4, nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nomeTime: 'Arostoles', montanteCarteira: 15.9, pontuacao: 998},
      {id: 5, nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nomeTime: 'Arostoles', montanteCarteira: 15.9, pontuacao: 998},
      {id: 6, nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nomeTime: 'Arostoles', montanteCarteira: 15.9, pontuacao: 998},
      {id: 7, nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nomeTime: 'Arostoles', montanteCarteira: 15.9, pontuacao: 998},
      {id: 8, nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nomeTime: 'Arostoles', montanteCarteira: 15.9, pontuacao: 998},
      {id: 9, nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nomeTime: 'Arostoles', montanteCarteira: 15.9, pontuacao: 998},
      {id: 10, nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nomeTime: 'Arostoles', montanteCarteira: 15.9, pontuacao: 998},
      {id: 11, nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nomeTime: 'Arostoles', montanteCarteira: 15.9, pontuacao: 998},
      {id: 12, nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nomeTime: 'Arostoles', montanteCarteira: 15.9, pontuacao: 998},
      {id: 13, nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nomeTime: 'Arostoles', montanteCarteira: 15.9, pontuacao: 998},
      {id: 14, nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nomeTime: 'Arostoles', montanteCarteira: 15.9, pontuacao: 998},
      {id: 15, nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nomeTime: 'Arostoles', montanteCarteira: 15.9, pontuacao: 998},
      {id: 16, nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nomeTime: 'Arostoles', montanteCarteira: 15.9, pontuacao: 998},
      {id: 17, nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nomeTime: 'Arostoles', montanteCarteira: 15.9, pontuacao: 998},    
    ];

@Component({
  selector: 'lpa-usuarios-page',
  templateUrl: './usuarios-page.component.html',
  styleUrls: ['./usuarios-page.component.css']
})
export class UsuariosPageComponent implements OnInit {   

    displayedColumns: string[] = ['nome', 'email', 'nomeTime', 'montanteCarteira', 'pontuacao', 'acoes'];
    dataSource = usuarios;

  constructor() { }

  ngOnInit() {
  }

}
