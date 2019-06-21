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

    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    getTokenUsuarioLogado(): string {
        return localStorage.getItem('tokenUsuarioLogadoLigapay');
    }

    clearTokenUsuarioLogado() {
        localStorage.setItem('tokenUsuarioLogadoLigapay', '');
    }

    isLogged(): boolean {
        return localStorage.getItem('tokenUsuarioLogadoLigapay') !== undefined;
    }

    login(email: string, senha: string): Observable<any> {
        return this.http.post(LIGAPAY_API.ligapay_backend, {
            query:
            `mutation ($email: String!, $password: String!) {
                login(email: $email, password: $password){
                    token
                }
            }`,
            variables: {
                email,
                password: senha
            }
        },
            this.httpOptions
        ).pipe(
            tap(res => {
                localStorage.setItem('tokenUsuarioLogadoLigapay', res.data.login.token);
            }));
    }

}
