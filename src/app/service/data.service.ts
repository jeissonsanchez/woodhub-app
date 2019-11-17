import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

const url = `http:`;

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {
    console.info('Service Listo');
   }
   get(endpoint: string) {
    return this.http.get(`${url}${endpoint}`);
  }
}