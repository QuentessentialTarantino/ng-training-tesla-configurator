import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Models } from '../types/models';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  models: Models = [];
  modelCode?: string;
  colorIndex = 0;

  constructor(private _http: HttpClient) {
    this._http
      .get<Models>('/models')
      .subscribe(models => this.models = models);
  }
}
