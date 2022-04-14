import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PoojaService {

  constructor(private http:HttpClient) { }
  getProducts() {
    return this.http.get<any>("https://apihilton.gftpl.in/api/bedrooms/")
  }
  
}

