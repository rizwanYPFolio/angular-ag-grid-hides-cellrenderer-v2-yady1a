import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h4>ag-grid : {{name}}</h4>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
