
import { HttpClient } from '@angular/common/http';
import { Injectable } from  '@angular/core';

@Injectable({
    providedIn:  'root'
})

export class UserlistService {

    private urlExample = '';

    constructor(
        private http: HttpClient
    ) { 

    }


    getUserList () {
        return this.http.get(this.urlExample)
    }
}