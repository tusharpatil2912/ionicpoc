import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { environment } from "../../../../../environments/environment";
import { catchError, mergeMap, switchMap, filter, take, map } from 'rxjs/operators';
import { Observable, from, throwError, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  readonly rootURL = environment.rootURL;
  token;

  constructor(private httpClient: HttpClient, private storage: Storage) { }

  public getProjecttList() {
    return from(this.storage.get("ACCESS_TOKEN")).pipe(
      switchMap(token => {
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          })
        };
        return this.httpClient.get(`${this.rootURL}/project`, httpOptions);
      }),
      map(response => response),
    );
  }
}
