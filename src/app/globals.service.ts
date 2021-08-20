import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  constructor() { }

  public jwttoken: string=null;

  setToken(token:string){
      this.jwttoken = token;
        }
}


