import { Injectable } from '@angular/core';

@Injectable()
export class CalculateVatService {

  constructor() { }

  getVatCalc(vat, val): Promise<number> {
    // return Promise.resolve(this.vat * val);

    return new Promise(resolve => {
      setTimeout(() => resolve(
        vat * val
      ), 1000);
    });
  }


}
