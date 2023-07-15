import { Component, OnInit } from '@angular/core';
import {saveAs} from 'file-saver';
import { Serv1Service } from '../services/serv1.service';


@Component({
  selector: 'app-page5',
  templateUrl: './page5.page.html',
  styleUrls: ['./page5.page.scss'],
})
export class Page5Page implements OnInit {
  mapData: Map<number, object> = new Map<number, object>();
  new_mapData: Map<number, object> = new Map<number, object>();
  ruleArr: number[]=[];
  inpch_arr: number[]=[];
  objArr: any[]=[];
  constructor(private service:Serv1Service) { }
  item = this.service.seritems;

  ngOnInit() {
    const mapArray = JSON.parse(localStorage.getItem('mapData') || '{}');
    this.mapData = new Map<number,object>(mapArray);
    this.mapData.forEach((value: object, key: number) => {
      this.objArr.push(value);
      this.ruleArr.push(key);
    });
    const serArray = JSON.parse(localStorage.getItem('serData') || '{}');
      this.ruleArr = serArray;
      console.log(this.ruleArr);

      const inpch_array = JSON.parse(localStorage.getItem('inpch_Data') || '{}');
      this.inpch_arr = inpch_array;
      console.log(this.inpch_arr);


  }

  exportToCSV() {
    const csvData = this.convertToCSV(this.objArr);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'tableData.csv');
  }

  // Convert table data to CSV format
  convertToCSV(data: any[]) {
    const csvRows = [];
    const headers = Object.keys(data[0]);

    // Add headers
    csvRows.push(headers.join(','));

    // Add data rows
    for (const row of data) {
      const values = headers.map(header => {
        const escaped = ('' + row[header]).replace(/"/g, '\\"');
        return `"${escaped}"`;
      });
      csvRows.push(values.join(','));
    }

    return csvRows.join('\n');
  }

  check()
  {
    console.log(this.service.inpch_array);
  }

}
