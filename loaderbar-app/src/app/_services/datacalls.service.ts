import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../model/user.model";
import { delay } from 'rxjs/internal/operators';


@Injectable({
  providedIn: 'root'
})
export class DataCallsService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://jsonplaceholder.typicode.com/todos/1';

  getUsers() {
    return this.http.get<User[]>('http://slowwly.robertomurray.co.uk/delay/1000/url/https://jsonplaceholder.typicode.com/users');
  }

}
