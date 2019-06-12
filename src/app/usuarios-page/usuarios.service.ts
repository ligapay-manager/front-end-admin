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

    listarUsuarios(): Usuario[] {

        if(this.loginService.isLogged()){

            const httpOptions = {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.loginService.getTokenUsuarioLogado()
                })
            };

            this.http.post(LIGAPAY_API.ligapay_prisma,
                {
                    query: 
                        `query($emailFiltro: String!, $nomeFiltro: String!, $nomeTimeFiltro: String!){
                            users( where: { email_contains: $emailFiltro 
                                            team: { 
                                                cartolaName_contains: $nomeFiltro
                                                name_contains: $nomeTimeFiltro }}){
                              id
                              email
                              time: team{
                                nome: cartolaName
                                nomeTime: name
                              }
                              carteira: wallet {
                                montanteCarteira: amount
                              }
                            }
                          }`,
                          variables: {
                              emailFiltro: "",
                              nomeFiltro: "",
                              nomeTimeFiltro: ""
                          }
                },
                httpOptions
            ).subscribe(
                result => {
                    console.log(result);
                }
            )
        }

        

        

        const usuarios: Usuario[] = [
            { id: "01", time: {nome: 'Vinicius Zorzanelli', nomeTime: 'Arostoles'}, email: 'vinicius@gmail.com', carteira: {montanteCarteira: 15.9} },
            { id: "02", time: {nome: 'Vinicius Zorzanelli', nomeTime: 'Arostoles'}, email: 'vinicius@gmail.com', carteira: {montanteCarteira: 15.9} },
            { id: "03", time: {nome: 'Vinicius Zorzanelli', nomeTime: 'Arostoles'}, email: 'vinicius@gmail.com', carteira: {montanteCarteira: 15.9} },
            { id: "04", time: {nome: 'Vinicius Zorzanelli', nomeTime: 'Arostoles'}, email: 'vinicius@gmail.com', carteira: {montanteCarteira: 15.9} },
            { id: "05", time: {nome: 'Vinicius Zorzanelli', nomeTime: 'Arostoles'}, email: 'vinicius@gmail.com', carteira: {montanteCarteira: 15.9} },
            { id: "06", time: {nome: 'Vinicius Zorzanelli', nomeTime: 'Arostoles'}, email: 'vinicius@gmail.com', carteira: {montanteCarteira: 15.9} },
            { id: "07", time: {nome: 'Vinicius Zorzanelli', nomeTime: 'Arostoles'}, email: 'vinicius@gmail.com', carteira: {montanteCarteira: 15.9} },
            { id: "08", time: {nome: 'Vinicius Zorzanelli', nomeTime: 'Arostoles'}, email: 'vinicius@gmail.com', carteira: {montanteCarteira: 15.9} },
            { id: "09", time: {nome: 'Vinicius Zorzanelli', nomeTime: 'Arostoles'}, email: 'vinicius@gmail.com', carteira: {montanteCarteira: 15.9} },
            { id: "10", time: {nome: 'Vinicius Zorzanelli', nomeTime: 'Arostoles'}, email: 'vinicius@gmail.com', carteira: {montanteCarteira: 15.9} },
            { id: "11", time: {nome: 'Vinicius Zorzanelli', nomeTime: 'Arostoles'}, email: 'vinicius@gmail.com', carteira: {montanteCarteira: 15.9} },
            { id: "12", time: {nome: 'Vinicius Zorzanelli', nomeTime: 'Arostoles'}, email: 'vinicius@gmail.com', carteira: {montanteCarteira: 15.9} },
            { id: "13", time: {nome: 'Vinicius Zorzanelli', nomeTime: 'Arostoles'}, email: 'vinicius@gmail.com', carteira: {montanteCarteira: 15.9} },
            { id: "14", time: {nome: 'Vinicius Zorzanelli', nomeTime: 'Arostoles'}, email: 'vinicius@gmail.com', carteira: {montanteCarteira: 15.9} },
            { id: "15", time: {nome: 'Vinicius Zorzanelli', nomeTime: 'Arostoles'}, email: 'vinicius@gmail.com', carteira: {montanteCarteira: 15.9} },
            { id: "16", time: {nome: 'Vinicius Zorzanelli', nomeTime: 'Arostoles'}, email: 'vinicius@gmail.com', carteira: {montanteCarteira: 15.9} },
            { id: "17", time: {nome: 'Vinicius Zorzanelli', nomeTime: 'Arostoles'}, email: 'vinicius@gmail.com', carteira: {montanteCarteira: 15.9} },
        ];

        return usuarios;
    }
}