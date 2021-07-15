import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild} from '@angular/core';
import {MatTable} from '@angular/material/table';
import { Output, EventEmitter } from '@angular/core';

export interface Form {
  name: string;
  email: string;
  text: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  // @Output() item = new EventEmitter<string>();
 
  displayedColumns: string[] = ['Nombre', 'Email', 'Mensaje']; 

  @ViewChild(MatTable) table: MatTable<FormData>;

  constructor(
    public dataSource: DataSource<any>
  ) { 
    this.dataSource
  }

  ngOnInit(): void {
  }

  addData(form) {
    // this.dataSource.push([]);
    // this.table.renderRows();
    console.log(form);
  }
  
}
