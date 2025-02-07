
import { HttpClient } from '@angular/common/http';
import { Injectable } from  '@angular/core';

@Injectable({
    providedIn:  'root'
})

export class UserlistService {

    private urlExample = 'https://jsonplaceholder.typicode.com/todos/10';

    constructor(
        private http: HttpClient
    ) { 

    }

    getUserList () {
        return this.http.get<any[]>(this.urlExample)
    }
}