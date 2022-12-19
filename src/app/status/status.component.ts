import { Component } from '@angular/core';

@Component({
  selector: 'app-status',
  template: `
    <h3>
  404 Error . Requested page is  not found
    </h3>
  `,
  styles: [
    "h3{color:red ;font-size:30px}"
  ]
})
export class StatusComponent {

}
