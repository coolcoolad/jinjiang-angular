import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecordService } from '../_services/record.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})

export class DisplayComponent implements OnInit {

  constructor(
    private router: Router,
    private recordService: RecordService,
  ) {
    setTimeout(() => {
      this.router.navigate(['/bund18/share']);
      this.recordService.turnOffDevice().pipe(first()).subscribe();
    }, 8000);
  }

  ngOnInit() {
    
  }
}
