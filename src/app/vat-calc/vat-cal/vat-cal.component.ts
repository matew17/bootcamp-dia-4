import { CalculateVatService } from './../calculate-vat.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vat-cal',
  templateUrl: './vat-cal.component.html',
  styleUrls: ['./vat-cal.component.css']
})
export class VatCalComponent implements OnInit {
  @Input() vat: number;
  vatTotal: number;
  total: number;
  cost: number;
  article: string;

  constructor(private calcService: CalculateVatService) { }

  ngOnInit() { }

  calculateVat(event) {
    this.cost = event.value;
    this.article = event.product;
    this.calcService.getVatCalc(this.vat, event.value)
      .then(result => {
        this.vatTotal = result;
        this.total = this.vatTotal + parseInt(event.value);
      });
  }
}
