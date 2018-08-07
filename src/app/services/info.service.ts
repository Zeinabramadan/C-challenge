import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Info } from '../shared/info.model';

@Injectable()
export class InfoService {

  private infoUrl = 'https://jsonplaceholder.typicode.com/photos?albumId=1';

  constructor(private http: HttpClient) { }

  getInfo(): Observable<Info[]> {
    return this.http.get<Info[]>(this.infoUrl);
  }

}
