import { Injectable } from '@angular/core';
import {
  Http,
  Response
} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class UppdragService {

  constructor(private _http: Http) {
  }

  getUppdrag() {
    return this._http.get('assets/files/uppdrag.json')
                      .map(
                        (respone: Response) =>{
                          const data = respone.json();
                          return data;
                        }
                      );
  }
}
