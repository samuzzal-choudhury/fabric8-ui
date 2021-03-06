import { Component, Input } from '@angular/core';

import { Input as GuiInput } from 'ngx-forge';

@Component({
  selector: 'review-step',
  templateUrl: './review-step.component.html'
})
export class ReviewStepComponent {

  @Input() gui: GuiInput;

  constructor() {}

}
