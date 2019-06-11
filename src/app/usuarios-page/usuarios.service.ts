import { Usuario } from './usuario.model';
import { LIGAPAY_API } from '../app.api';
import { LoginService } from '../security/login/login.service'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UsuariosService {

    constructor(private http: HttpClient, private loginService: LoginService) { }

    userToken = "";

    listarUsuarios(): Usuario[] {

        if(this.loginService.isLogged()){

            const httpOptions = {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.loginService.tokenUsuarioLogado
                })
            };

            this.http.post('http://ligapay.tk/',
                {query: 
                    `query{
                        users{
                        email
                        }
                    }`
                },
                httpOptions
            ).subscribe(
                result => {
                    console.log(result);
                }
            )
        }

        

        

        const usuarios: Usuario[] = [
            { id: 1, nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nomeTime: 'Arostoles', montanteCarteira: 15.9, pontuacao: 998 },
            { id: 2, nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nomeTime: 'Arostoles', montanteCarteira: 15.9, pontuacao: 998 },
            { id: 3, nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nomeTime: 'Arostoles', montanteCarteira: 15.9, pontuacao: 998 },
            { id: 4, nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nomeTime: 'Arostoles', montanteCarteira: 15.9, pontuacao: 998 },
            { id: 5, nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nomeTime: 'Arostoles', montanteCarteira: 15.9, pontuacao: 998 },
            { id: 6, nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nomeTime: 'Arostoles', montanteCarteira: 15.9, pontuacao: 998 },
            { id: 7, nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nomeTime: 'Arostoles', montanteCarteira: 15.9, pontuacao: 998 },
            { id: 8, nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nomeTime: 'Arostoles', montanteCarteira: 15.9, pontuacao: 998 },
            { id: 9, nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nomeTime: 'Arostoles', montanteCarteira: 15.9, pontuacao: 998 },
            { id: 10, nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nomeTime: 'Arostoles', montanteCarteira: 15.9, pontuacao: 998 },
            { id: 11, nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nomeTime: 'Arostoles', montanteCarteira: 15.9, pontuacao: 998 },
            { id: 12, nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nomeTime: 'Arostoles', montanteCarteira: 15.9, pontuacao: 998 },
            { id: 13, nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nomeTime: 'Arostoles', montanteCarteira: 15.9, pontuacao: 998 },
            { id: 14, nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nomeTime: 'Arostoles', montanteCarteira: 15.9, pontuacao: 998 },
            { id: 15, nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nomeTime: 'Arostoles', montanteCarteira: 15.9, pontuacao: 998 },
            { id: 16, nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nomeTime: 'Arostoles', montanteCarteira: 15.9, pontuacao: 998 },
            { id: 17, nome: 'Vinicius Zorzanelli', email: 'vinicius@gmail.com', nomeTime: 'Arostoles', montanteCarteira: 15.9, pontuacao: 998 },
        ];

        return usuarios;
    }
}