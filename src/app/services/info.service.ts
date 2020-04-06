import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  info: any = {};

  constructor(private http: HttpClient) {

    http.get('assets/data/data-pagina.json').subscribe(
      data => {
        this.info = data;
      }, error => { console.log(error); },
    );
  }
}
