import { Component } from '@angular/core';
import { Model } from '../../types/model';
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
  #modelCode: string;

  constructor(private _modelService: ModelService) {
    this.#modelCode = this._modelService.modelCode$.value;
  }

  get models(): Model[] {
    return this._modelService.models;
  }

  get colors(): Color[] {
    return this._modelService.colors;
  }

  get modelCode(): string {
    return this.#modelCode;
  }

  set modelCode(value: string) {
    this.#modelCode = value;
    this._modelService.modelCode$.next(value);
  }

  get colorCode(): string {
    return this._modelService.colorCode;
  }

  set colorCode(value: string) {
    this._modelService.colorCode = value;
  }
}
