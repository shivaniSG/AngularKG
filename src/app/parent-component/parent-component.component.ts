import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  template: `<app-child-component [childMessage]="parentMessage"></app-child-component>`,
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent { 
parentMessage="Message from Parent";
  constructor() { }

 

}
