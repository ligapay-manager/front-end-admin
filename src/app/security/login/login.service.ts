import { LIGAPAY_API } from '../../app.api';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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

   /*  getToken(): Observable<>{

         this.http.post(LIGAPAY_API.ligapay_backend, {
            query: 
            `mutation ($email: String!, $password: String!) {
                login(email: $email, password: $password){
                    token
                }
            }`,
            variables: {
                email: "serra.santos.s@gmail.com",
                password: "A151102!"
            }
        },
            this.httpOptions
        );
    } */
}