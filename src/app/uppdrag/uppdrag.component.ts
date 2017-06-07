import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { UppdragService } from 'app/services/uppdrag.service';

@Component({
  selector: 'app-uppdrag',
  templateUrl: './uppdrag.component.html',
  styleUrls: ['./uppdrag.component.css'],
  providers: [UppdragService]
})
export class UppdragComponent implements OnInit {

  uppdrag_list;

  constructor(private uppdragService: UppdragService) {
    this.uppdragService.getUppdrag()
        .subscribe(
          (uppdrag: any[]) => {
            this.uppdrag_list = uppdrag;
            console.log(uppdrag);
          },
          (error) => console.log(error)
        );
  }

  ngOnInit() {
  }

}
