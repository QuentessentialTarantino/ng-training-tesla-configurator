import { Injectable } from '@angular/core';
import { ModelService } from './model.service';

@Injectable({
  providedIn: 'root'
})
export class OptionService {
  configId = 0; // No config selected
  towHitch = false; // Unchecked
  yoke = false; // Unchecked

  constructor(modelService: ModelService) {
    // Reset options on model change
    modelService.modelCode$.subscribe(_ => {
      this.configId = 0;
      this.towHitch = false;
      this.yoke = false;
    });
  }
}
