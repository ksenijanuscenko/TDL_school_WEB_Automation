import { IWorldOptions } from '@cucumber/cucumber';

interface CustomWorld {
  PRODUCT_NAME: string;
  PRODUCT_PRICE: string;
}

export default function (this: CustomWorld, options: IWorldOptions): void {
  this.PRODUCT_NAME = '';
  this.PRODUCT_PRICE = '';
}
