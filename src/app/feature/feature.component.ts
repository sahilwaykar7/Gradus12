import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-feature',
  imports: [CommonModule,RouterModule],
  template: `<router-outlet></router-outlet>`
})
export class FeatureComponent {

}
