import { Component, OnInit } from '@angular/core';
import { CalculatepointsService } from 'src/app/services/calculatepoints.service';
import { DataServiceService } from 'src/app/services/data-service.service';
import { Transactions } from 'src/app/model/transactions';
import { CalculatedTransactions } from 'src/app/model/calculatedTransactions';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.css'],
})
export class RewardComponent {
  transactions: Transactions[] = [];
  calculatedTransactions: CalculatedTransactions[] = [];
  constructor(
    private calculatePoints: CalculatepointsService,
    private data: DataServiceService
  ) {}

  ngOnInit() {
    this.calPoints();
  }

  calPoints() {
    this.calculatedTransactions = this.calculatePoints.getTransactions();
    //this.data.getTransactions().subscribe((data) => console.log(data));
  }
}
