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

  constructor(private _modelService: ModelService) { }

  getUrl(modelCode: string, colorCode: string): string {
    return `${this.ENDPOINT}/${modelCode}/${colorCode}.jpg`;
  }

  get src(): string {
    const { modelCode, colorCode } = this._modelService;

    if (modelCode && colorCode)
      return this.getUrl(modelCode, colorCode);
    return '';
  }

  get alt(): string {
    const { modelCode, colorCode } = this._modelService;

    if (modelCode && colorCode)
      return `Tesla model ${modelCode} in ${colorCode}`;
    return '';
  }
}
