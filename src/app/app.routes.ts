import { Routes } from '@angular/router';
import { StepOneComponent } from './step-one/step-one.component';
import { StepTwoComponent } from './step-two/step-two.component';
import { StepThreeComponent } from './step-three/step-three.component';
import { inject } from '@angular/core';
import { ModelService } from './model.service';
import { OptionService } from './option.service';

export const routes: Routes = [
  { path: '', redirectTo: '/step-one', pathMatch: 'full' },
  { path: 'step-one', component: StepOneComponent },
  {
    path: 'step-two',
    component: StepTwoComponent,
    canActivate: [() => inject(ModelService).modelCode$.value.length > 0]
  },
  {
    path: 'step-three',
    component: StepThreeComponent,
    canActivate: [() => inject(OptionService).configId > 0]
  },
  { path: '**', redirectTo: '/step-one' }
];
