import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModelViewerComponent } from './model-viewer/model-viewer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    ModelViewerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { }
