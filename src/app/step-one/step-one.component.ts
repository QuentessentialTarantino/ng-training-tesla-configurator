import { Component } from '@angular/core';
import { Models } from '../../types/models';
import { ModelService } from '../model.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Color } from '../../types/color';

@Component({
  selector: 'app-step-one',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './step-one.component.html',
  styleUrl: './step-one.component.scss'
})
export class StepOneComponent {
  models: Models = [];

  constructor(private _modelService: ModelService) {
    this._modelService.models$.subscribe(
      models => this.models = models
    );
  }

  get modelCode(): string {
    return this._modelService.modelCode;
  }

  set modelCode(value: string) {
    this._modelService.modelCode = value;

    // Reset color
    this._modelService.colorCode = this.colors[0].code;
  }

  get colorCode(): string {
    return this._modelService.colorCode;
  }

  set colorCode(value: string) {
    this._modelService.colorCode = value;
  }

  get colors(): Color[] {
    const model = this.models.find(model => model.code === this.modelCode);

    return model?.colors ?? [];
  }
}
