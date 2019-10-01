import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class freeApiService{

  constructor (private httpclient: HttpClient){

  }

  // getfilms(): Observable<any>{
  //   return this.httpclient.get('https://api.themoviedb.org/3/search/movie?api_key=1cd2b33115f891c68dafc6468ce95d73&query=Ritorno al futuro');
  // }

  getfilmsbytitle(valueFromChild): Observable<any>{
    let params1 = new HttpParams().set('query', valueFromChild);
    return this.httpclient.get('https://api.themoviedb.org/3/search/movie?api_key=1cd2b33115f891c68dafc6468ce95d73&query=', {params: params1});
  }

  getseriebytitle(valueFromChild): Observable<any>{
    let params2 = new HttpParams().set('query', valueFromChild);
    return this.httpclient.get('https://api.themoviedb.org/3/search/tv?api_key=1cd2b33115f891c68dafc6468ce95d73&query=', {params: params2});
  }

}
