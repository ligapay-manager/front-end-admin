import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  nome: string;
  email: string;
  nome_time: string;
  montante_carteira: number;
  pontuacao: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nome_time: 'Arostoles', montante_carteira: 15.9, pontuacao: 998},
  {nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nome_time: 'Arostoles', montante_carteira: 15.9, pontuacao: 998},
  {nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nome_time: 'Arostoles', montante_carteira: 15.9, pontuacao: 998},
  {nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nome_time: 'Arostoles', montante_carteira: 15.9, pontuacao: 998},
  {nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nome_time: 'Arostoles', montante_carteira: 15.9, pontuacao: 998},
  {nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nome_time: 'Arostoles', montante_carteira: 15.9, pontuacao: 998},
  {nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nome_time: 'Arostoles', montante_carteira: 15.9, pontuacao: 998},
  {nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nome_time: 'Arostoles', montante_carteira: 15.9, pontuacao: 998},
  {nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nome_time: 'Arostoles', montante_carteira: 15.9, pontuacao: 998},
  {nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nome_time: 'Arostoles', montante_carteira: 15.9, pontuacao: 998},
  {nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nome_time: 'Arostoles', montante_carteira: 15.9, pontuacao: 998},
  {nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nome_time: 'Arostoles', montante_carteira: 15.9, pontuacao: 998},
  {nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nome_time: 'Arostoles', montante_carteira: 15.9, pontuacao: 998},
  {nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nome_time: 'Arostoles', montante_carteira: 15.9, pontuacao: 998},
  {nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nome_time: 'Arostoles', montante_carteira: 15.9, pontuacao: 998},
  {nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nome_time: 'Arostoles', montante_carteira: 15.9, pontuacao: 998},
  {nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nome_time: 'Arostoles', montante_carteira: 15.9, pontuacao: 998},
  
];

@Component({
  selector: 'lpa-usuarios-page',
  templateUrl: './usuarios-page.component.html',
  styleUrls: ['./usuarios-page.component.css']
})
export class UsuariosPageComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'email', 'nome_time', 'montante_carteira', 'pontuacao'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
