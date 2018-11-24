import { Component, OnInit } from '@angular/core';
import { Batch } from '../batch';
import { BatchService } from '../batch.service';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {

  constructor(private batchService: BatchService) { }
  batches: Batch[];
  batch:Batch;

  ngOnInit() {
    this.newBatchData();
    this.getbatches();
  }
  newBatchData(): void{
    this.batch={
      BatchId: 1,
      BatchName: 'CCS',
      HoursTaken: 3,
      NoOfHours: 12,
      Remarks: 'LULU CYBER',
      StartDate: '2018-02-02',
      TenatativeDate: '2018-02-02'
    }
  }
  getbatches(): void{
   //this.batches = this.batchService.getBatchesMockData();
   this.batchService.getBatches()
    .subscribe(b=> this.batches=b);
  }

  saveBatchData():void{
    console.log(this.batch);
    this.batchService.saveBatch(this.batch)
    .subscribe(b =>this.batches.push(b));
  }

}
