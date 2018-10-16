import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { RecordService } from '../_services/record.service';
import { Record } from '../_models';

@Component({
  selector: 'app-bund18record',
  templateUrl: './bund18record.component.html',
})
export class Bund18recordComponent implements OnInit {
  records: Record[] = [];

  constructor(
    private recordService: RecordService, 
  ) { }

  ngOnInit() {
    this.listAllRecords();
  }

  private listAllRecords() {
    this.recordService.list().pipe(first()).subscribe(records => {
      this.records = records;
    });
  }
}
