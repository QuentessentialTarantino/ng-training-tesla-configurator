import { Component } from '@angular/core';
import { ModelService } from '../model.service';
import { OptionService } from '../option.service';
import { Config } from '../../types/config';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Color } from '../../types/color';

@Component({
  selector: 'app-step-three',
  standalone: true,
  imports: [
    CommonModule,
    CurrencyPipe,
  ],
  templateUrl: './step-three.component.html',
  styleUrl: './step-three.component.scss'
})
export class StepThreeComponent {
  readonly OPTION_PRICE = 1000;
  modelDescription: string;
  config: Config;
  color: Color;
  towHitch: boolean;
  yoke: boolean;

  constructor(
    modelService: ModelService,
    optionService: OptionService,
  ) {
    this.modelDescription = modelService.model.description;
    this.config = optionService.config!;
    this.color = modelService.color;
    this.towHitch = optionService.towHitch;
    this.yoke = optionService.yoke;
  }

  get totalCost(): number {
    let cost = this.config.price;

    cost += this.color.price;
    if (this.towHitch) cost += this.OPTION_PRICE;
    if (this.yoke) cost += this.OPTION_PRICE;

    return cost;
  }
}
