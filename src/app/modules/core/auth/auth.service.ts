import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap, tap } from 'rxjs/operators';
import { Observable, BehaviorSubject, from } from 'rxjs';

import { Storage } from '@ionic/storage-angular';

import { environment } from "../../../../environments/environment";

import { User } from '../../../data/user';
import { AuthResponse } from '../../../data/auth-response';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_SERVER_ADDRESS: string = environment.rootURL;
  user: Observable<any>;
  userData = new BehaviorSubject(null);

  constructor(private  httpClient:  HttpClient, private  storage:  Storage, private plt: Platform) { 
    this.loadStoredToken();
  }

  loadStoredToken(){
    let platformObs = from(this.plt.ready());
    this.user = platformObs.pipe(
      switchMap(()=>{
        return from(this.storage.get("ACCESS_TOKEN"));
      }),
      map(token =>{
        if(token){
          return true;
        } else {
          return null;
        }
      })
    );
  }

  register(user: User): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(`${this.AUTH_SERVER_ADDRESS}/Resource`, user).pipe(
      tap(async (res:  AuthResponse ) => {
        if (res.user) {
          console.log("Registered Successfully");
        }
      })

    );
  }

  login(user: User): Observable<AuthResponse> {
    return this.httpClient.post(`${this.AUTH_SERVER_ADDRESS}/Resource/login`, user).pipe(
      tap(async (res: AuthResponse) => {
        if (res.user) {
          await this.storage.set("ACCESS_TOKEN", res.token);
          await this.storage.set("currentUser", res.user);
          this.userData.next(res.user);
        }
      })
    );
  }

  async logout() {
    await this.storage.remove("ACCESS_TOKEN");
    await this.storage.remove("currentUser");
    this.userData.next(null);
  }

  isLoggedIn() {
    return this.userData.asObservable();
  }


}
