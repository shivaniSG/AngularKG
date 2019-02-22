import { Component,  Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  template: `Say{{childMessage}}`,
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent  {
@Input() childMessage:string;

  constructor() { }
 

}
