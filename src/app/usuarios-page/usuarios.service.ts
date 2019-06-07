import {Usuario} from './usuario.model';
import {LIGAPAY_API} from '../app.api';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class UsuariosService {

    

    constructor(private http: HttpClient){

    }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/graphql'
        })
    };

    

    userToken = "aaa";

    listarUsuarios(): Usuario[] {

        this.http.post('http://ligapay.tk/', 
        `mutation{
            login(email: "serra.santos.s@gmail.com", password:"A151102!"){
              token
              user{
                wallet{
                  amount
                }
              }
            }
          }`,
          this.httpOptions    
        ).subscribe(
            result => {
                this.userToken = result['data']['login']['token'];
                console.log(this.userToken);

                const httpOptions2 = {
                    headers: new HttpHeaders({
                        'Content-Type':  'application/graphql',
                        'Authorization': 'Bearer ' + this.userToken
                    })
                };  

                console.log(httpOptions2.headers);    

                this.http.post('http://ligapay.tk/', 
                `query{
                    users{
                      email
                    }
                  }`,
                httpOptions2    
                ).subscribe(
                    result => {
                        console.log(result);
                    }
                )



            }
        )

        console.log(this.userToken);

        const usuarios: Usuario[] = [
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

        return usuarios;
    }
}