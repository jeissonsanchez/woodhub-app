import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface PeriodicElement {
  salvaconducto: string;
  id: number;
  estado: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, salvaconducto: '15021214', estado: 'Ok'},
  {id: 2, salvaconducto: '15021684', estado: 'Ok'},
  {id: 3, salvaconducto: '15795131', estado: 'Sospechoso'},
  {id: 4, salvaconducto: '15654223', estado: 'Ok'},
  {id: 5, salvaconducto: '15096531', estado: 'Ok'},
  {id: 6, salvaconducto: '15097535',  estado: 'Ok'},
  {id: 7, salvaconducto: '15069546',  estado: 'Ok'},
  {id: 8, salvaconducto: '15065643',  estado: 'Ok'},
  {id: 9, salvaconducto: '15062935',  estado: 'Ok'},
  {id: 10, salvaconducto: '15025612',  estado: 'Ok'}
];

@Component({
  selector: 'app-op-book',
  templateUrl: './op-book.component.html',
  styleUrls: ['./op-book.component.scss']
})
export class OpBookComponent implements OnInit {

  serverData: JSON;
  employeeData: JSON;

  displayedColumns: string[] = ['id', 'salvaconducto', 'estado'];
  dataSource = ELEMENT_DATA;
  
  constructor(private httpClient: HttpClient) { 
    this.sayHi();
  }

  sayHi() {
    this.httpClient.get('http://127.0.0.1:5002/').subscribe(data => {
      this.serverData = data as JSON;
      console.log(this.serverData);
    })
  }



  ngOnInit() {
  }

}
