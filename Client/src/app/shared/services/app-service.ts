import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

const TOKEN = 'TOKEN';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  constructor(private http: HttpClient) { }


  baseUrl = 'http://localhost:8080/api/person';
  loginUrl = 'http://localhost:8080/api/person/login';
  listUrl = 'http://localhost:8080/api/pos/findAll';
  posUrl = 'http://localhost:8080/api/pos';

  createPerson(person): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post<any>(this.baseUrl, person, httpOptions);
  }
  loginPerson(person: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post<any>(this.loginUrl, person, httpOptions);
  }
  createPos(pos): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post<any>(this.posUrl, pos, httpOptions);
  }
  getPos() {
    return this.http.get<any[]>(this.listUrl);
  }
  setToken(token: string): void {
    localStorage.setItem(TOKEN, token);
  }
  editPerson() {}
  editPos() {}

  deletePos(id): Observable<any> {
    return this.http.delete<any>(`${this.posUrl}/${id}`);
  }

}
