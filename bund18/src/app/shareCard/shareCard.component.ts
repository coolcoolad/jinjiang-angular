import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RecordService } from '../_services/record.service';

@Component({
  selector: 'app-share-card',
  templateUrl: './shareCard.component.html',
  styleUrls: ['./shareCard.component.css']
})

export class ShareCardComponent implements OnInit {
  id = -1;
  pathPrefix = '../../assets/PNG Assets H5/Postcards/';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = Number.parseInt(this.activatedRoute.snapshot.params['id']);
  }

  ngOnInit() {
    
  }
}
