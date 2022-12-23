import { Component } from '@angular/core';

@Component({
  selector: 'warning',
  template: '<div class="div"> <p>This is Warning, you are in danger</p> </div>',
  styles: ['div { margin: auto; background-color: #ef9298; padding: 25px 15px; border: 2px solid #eb0909; margin-top: 30px;}']
})
export class WarningComponent {
}