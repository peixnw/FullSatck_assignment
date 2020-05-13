import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment' 

@Injectable({
  providedIn: 'root'
})
export class CompareService {

  constructor(public http: HttpClient) { }

  compareSingleCompany(value: any) {
    const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json', 'Access-Control-Allow-Credentials': 'true' }) };
    return this.http.post(`${environment.baseUrl}/compare/company/single`, JSON.stringify(value), httpOtions);
  }
  compareSingleSector(value: any) {
    const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json', 'Access-Control-Allow-Credentials': 'true' }) };
    return this.http.post(`${environment.baseUrl}/compare/sector/single`, JSON.stringify(value), httpOtions);
  }

  compareCompanies(value: any) {
    const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json', 'Access-Control-Allow-Credentials': 'true' }) };
    return this.http.post(`${environment.baseUrl}/compare/sector/multi`, JSON.stringify(value), httpOtions);
  }
  compareComandSec(value: any) {
    const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json', 'Access-Control-Allow-Credentials': 'true' }) };
    return this.http.post(`${environment.baseUrl}/compare/comandsec`, JSON.stringify(value), httpOtions);
  }

  compareSectors(value: any) {
    const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json', 'Access-Control-Allow-Credentials': 'true' }) };
    return this.http.post(`${environment.baseUrl}/compare/sector/multi`, JSON.stringify(value), httpOtions);
  }
}