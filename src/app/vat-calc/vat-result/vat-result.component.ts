import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vat-result',
  templateUrl: './vat-result.component.html',
  styleUrls: ['./vat-result.component.css']
})
export class VatResultComponent implements OnInit {
  @Input() cost: string;
  @Input() vat: number;
  @Input() total: number;
  @Input() article: string;
  myPipe = 'currency';
  constructor() { }

  ngOnInit() {
  }

}
