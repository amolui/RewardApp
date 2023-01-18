import { Injectable, OnInit } from '@angular/core';
import { DataServiceService } from './data-service.service';
import { Transactions } from '../model/transactions';
import { CalculatedTransactions } from '../model/calculatedTransactions';

@Injectable({
  providedIn: 'root',
})
export class CalculatepointsService {
  transactions: Transactions[] = [];
  calculatedTransactions: CalculatedTransactions[] = [];
  constructor(private dataService: DataServiceService) {
    this.dataService.getTransactions().subscribe((data) => {
      this.transactions = data;
      // console.log(this.transactions);
    });
  }

  getTransactions() {
    //this.calPoints(this.transactions[0]);
    this.calculatedTransactions.length = 0;
    this.transactions.forEach((transaction: Transactions) => {
      console.log(transaction);
      this.calculatedTransactions.push({
        id: transaction.id,
        customerName: transaction.customerName,
        Jan: this.calMonthlyPoints(transaction.Jan),
        Feb: this.calMonthlyPoints(transaction.Feb),
        Mar: this.calMonthlyPoints(transaction.Mar),
        total: this.calPoints(transaction),
      });
    });

    return this.calculatedTransactions;
  }

  calPoints(transaction: any) {
    let totalPoints: number;
    let monthlyPointJan;
    let monthlyPointFeb;
    let monthlyPointMar;

    monthlyPointJan = this.calMonthlyPoints(transaction.Jan);
    monthlyPointFeb = this.calMonthlyPoints(transaction.Feb);
    monthlyPointMar = this.calMonthlyPoints(transaction.Mar);
    totalPoints = monthlyPointJan + monthlyPointFeb + monthlyPointMar;
    return totalPoints;
  }

  calMonthlyPoints(month: any) {
    let total: number = 0;
    month.forEach((spent: any) => {
      if (spent > 100) total = total + (spent - 100) * 2 + 50;
    });
    //console.log(total);
    return total;
  }
}
