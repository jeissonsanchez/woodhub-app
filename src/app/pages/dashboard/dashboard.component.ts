import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private woodhub: DataService) { 
    this.prueba();
  }

  prueba(){
    this.woodhub.get('api').subscribe( dato => {
      console.log(dato);
    }, (error_service) => {
      console.log(error_service);
    });
  }

  ngOnInit() {
  }

}
