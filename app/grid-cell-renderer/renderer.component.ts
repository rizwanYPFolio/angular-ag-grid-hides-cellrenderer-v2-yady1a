// src/app/red-component/red-component.component.ts
import {Component} from "@angular/core";
import {AgRendererComponent } from 'ag-grid-angular';

@Component({
    selector: 'app-renderer-component',
    templateUrl: './renderer.component.html',
      styleUrls: ['./renderer.css']
})

export class RendererComponent implements AgRendererComponent {

  refresh : any;

  private params:any = {
    value : "none"
  };

  
  buttonClick(event)
  {
    event.preventDefault();  // prevent page reloading.
    console.log ("Button clicked");
    const target = event.target;
  }
  
  showMenu : boolean = false;

  downArrowClick(event)
  {
    event.preventDefault();  // prevent page reloading.
  
    const target = event.target;
    this.showMenu = !this.showMenu

    console.log ("Button clicked  this.showMenu = " +  this.showMenu );
  }

  mouseleave(event)
  {
    event.preventDefault();  // prevent page reloading.
  
    const target = event.target;
    this.showMenu = false;

    console.log ("mouseleave this.showMenu = " +  this.showMenu );
  }


  
  
  agInit(params:any):void {
      this.params = params;
      console.dir(params);
  }
}