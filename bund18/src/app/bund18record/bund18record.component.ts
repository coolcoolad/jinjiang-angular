import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { RecordService } from '../_services/record.service';
import { Record, RecordStat } from '../_models';

@Component({
  selector: 'app-bund18record',
  templateUrl: './bund18record.component.html',
  styleUrls: ['./bund18record.component.css']
})

export class Bund18recordComponent implements OnInit {
  records: Record[] = [];
  stats: RecordStat[] = [];

  echartsInstance: any;

  options = {    
    title:{
      text: 'Visit Records',
      textStyle: {
        color: '#ccc'
      }
    },

    xAxis: {
      type: 'category',
      data: [],
    },

    yAxis: {
      type: 'value'
    },

    series: [{
      title: 'shake',
      data: [],
      type: 'bar'
    }]
  }

  constructor(
    private recordService: RecordService, 
  ) { }

  ngOnInit() {
    this.listAllRecords(); 
    this.getDateStatistic();    
  }

  private listAllRecords() {
    this.recordService.list().pipe(first()).subscribe(records => {
      this.records = records;
    });
  }

  private getDateStatistic() {
    this.recordService.getDateStat().pipe(first()).subscribe(stats => {
      this.stats = stats;   
      this.onRefresh();   
    });
  } 

  onRefresh() {    
    this.options.xAxis.data = this.stats.map(t=>t.date_created);
    this.options.series[0].data = this.stats.map(t=>t.created_count);
    this.setOption();
  }

  onChartInit(e: any){
    this.echartsInstance = e;
    //console.log('on chart init:', e);
  }

  setOption() {
    if (this.echartsInstance) {
      console.log(this.options);
      this.echartsInstance.setOption(this.options);
    }
  }
}
