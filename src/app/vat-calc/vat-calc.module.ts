import { CalculateVatService } from './calculate-vat.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VatCalComponent } from './vat-cal/vat-cal.component';
import { VatInputsComponent } from './vat-inputs/vat-inputs.component';
import { VatResultComponent } from './vat-result/vat-result.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VatCalComponent, VatInputsComponent, VatResultComponent],
  providers: [
    CalculateVatService
  ],
  exports: [
    VatCalComponent
  ]
})
export class VatCalcModule { }
