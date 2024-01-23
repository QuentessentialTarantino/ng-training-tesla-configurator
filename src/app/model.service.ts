import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Model } from '../types/model';
import { Color } from '../types/color';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  models: Model[] = [];
  modelCode$ = new BehaviorSubject('');
  colorCode = '';

  constructor(http: HttpClient) {
    http.get<Model[]>('/models').subscribe(
      models => this.models = models
    );

    // Reset color on model change
    this.modelCode$.subscribe(
      (modelCode: string) => {
        if (modelCode)
          this.colorCode = this.colors[0].code;
      }
    );
  }

  get colors(): Color[] {
    const modelCode = this.modelCode$.value;
    const model = this.models.find(model => model.code === modelCode);

    if (model) return model.colors;
    throw Error(`Tesla model ${modelCode} not found`);
  }
}
