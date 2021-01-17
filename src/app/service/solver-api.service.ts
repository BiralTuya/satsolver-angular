import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SolverApiService {
  baseUrl = environment.apiUrl + "solver/";

  constructor(private http: HttpClient) { }

  post(file: File) {
    const form = new FormData();
    form.append("cnf", file);
    return this.http.post(this.baseUrl, form);
  }

  postText(text: Blob) {
    const form = new FormData();
    form.append("cnf", text, "cnf");
    return this.http.post(this.baseUrl, form);
  }
}
