import { Component } from '@angular/core';
import { ModelService } from '../model.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-model-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './model-viewer.component.html',
  styleUrl: './model-viewer.component.scss'
})
export class ModelViewerComponent {
  readonly ENDPOINT = 'https://interstate21.com/tesla-app/images';
  get src(): string {
    const { modelCode, colorIndex } = this._model;

    if (modelCode === undefined) return '';

    const colorCode = this.getColorCode(modelCode, colorIndex);
    return this.getUrl(modelCode, colorCode);
  }

  get alt(): string {
    const { modelCode, colorIndex } = this._model;

    if (modelCode === undefined) return '';

    const colorCode = this.getColorCode(modelCode, colorIndex);
    return `Tesla model ${modelCode} in ${colorCode}`;
  }

  constructor(private _model: ModelService) { }

  getUrl(modelCode: string, colorCode: string): string {
    return `${this.ENDPOINT}/${modelCode}/${colorCode}.jpg`;
  }

  getColorCode(modelCode: string, colorIndex: number): string {
    const model = this._model.models
      .find(model => model.code === modelCode);
    if (model === undefined)
      throw Error(`Model code ${modelCode} not found`);

    const color = model.colors[colorIndex];
    if (color === undefined)
      throw Error(`Color index ${colorIndex} not found for model ${modelCode}`);

    return color.code;
  }
}
