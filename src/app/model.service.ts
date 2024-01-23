import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Model } from '../types/model';
import { Color } from '../types/color';
import { OptionService } from './option.service';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  models: Model[] = [];
  #modelCode = '';
  colorCode = '';

  constructor(http: HttpClient, private _optionService: OptionService) {
    http.get<Model[]>('/models').subscribe(
      models => this.models = models
    );
  }

  get modelCode(): string {
    return this.#modelCode;
  }

  set modelCode(value: string) {
    this.#modelCode = value;

    // Reset model color
    this.colorCode = this.model.colors[0].code;

    // Reset options
    this._optionService.configId = 0;
    this._optionService.towHitch = false;
    this._optionService.yoke = false;
  }

  get model(): Model {
    const model = this.models.find(model => model.code === this.modelCode);

    if (model) return model;
    throw Error(`Tesla model ${this.modelCode} not found`);
  }

  get colors(): Color[] {
    return this.model.colors;
  }
}
