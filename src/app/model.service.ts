import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Models } from '../types/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  modelCode = '';
  colorCode = '';

  constructor(private _http: HttpClient) { }

  get models$(): Observable<Models> {
    return this._http.get<Models>('/models');
  }
}
