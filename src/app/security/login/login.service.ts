import { LIGAPAY_API } from '../../app.api';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    tokenUsuarioLogado: string;
    stringTeste: string = "aaa";

    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    isLogged(): boolean {
        return this.tokenUsuarioLogado != undefined;
    }

    login(email: string, senha: string): Observable<any>{
        return this.http.post(LIGAPAY_API.ligapay_backend, {
            query: 
            `mutation ($email: String!, $password: String!) {
                login(email: $email, password: $password){
                    token
                }
            }`,
            variables: {
                email: 'serra.santos.s@gmail.com',
                password: 'A151102!'
            }
        },
            this.httpOptions
        ).pipe(
            tap(res => {
                this.tokenUsuarioLogado = res['data']['login']['token'];
            }));
    }

}