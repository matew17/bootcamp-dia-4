import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vat-inputs',
  templateUrl: './vat-inputs.component.html',
  styleUrls: ['./vat-inputs.component.css']
})
export class VatInputsComponent implements OnInit {
  @Output() onCalculateVat = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  calculateVat(product, value) {

    this.onCalculateVat.emit({
      product,
      value
    })

  }
}
