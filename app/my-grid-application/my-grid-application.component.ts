// src/app/my-grid-application/my-grid-application.component.ts
import {Component} from "@angular/core";
import {GridOptions} from "ag-grid";
import {RendererComponent} from "../grid-cell-renderer/renderer.component";

@Component({
    selector: 'app-my-grid-application',
    templateUrl: './my-grid-application.component.html'
})
export class MyGridApplicationComponent {
    gridOptions:GridOptions;


    title = 'app';

    ngOnInit() {
        this.gridOptions = <GridOptions>{};
        this.gridOptions.frameworkComponents = {  
                                                  "cellRenderer" : RendererComponent  };
        
      }


    columnDefs = [
      //  {headerName: 'Make', field: 'make' },
        {
          headerName: "Make",
          field: "make",

          cellRenderer: "cellRenderer", 
          editable:false,
          colId: "Make",
          width: 175,
          cellClass: 'my-class'
        },

        {headerName: 'Model', field: 'model', 
                     cellRenderer: "cellRenderer",
                     width : 300 },

        {headerName: 'Price', field: 'price'}
    ];

    rowData = [
        { make: 'Toyota', model: 'Celica (hover over me)', price: 35000 },
        { make: 'Ford', model: 'F150 (hover over me)', price: 32000 },
        { make: 'Porsche', model: 'Boxter (hover over me)', price: 72000 }
    ]; 
}