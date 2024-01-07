import UIActions from '../helpers/UIActions';
import assert from 'assert';

export default class ProductPage {
  constructor(private web: UIActions) {}

  private readonly _PRODUCTS_HEADING =
    'div[class="header_secondary_container"]';
  private readonly _SHOPPING_CART_BUTTON = 'a[class="shopping_cart_link"]';
  private readonly _SHOPPING_CART_SECTION = 'span[class="title"]';
  private readonly _PRODUCT_NAME = `//div[text()='Sauce Labs Fleece Jacket']`;
  private readonly _PRODUCT_PRICE = `//div[text()='49.99']`;
  private readonly _SELECT_PRODUCT =
    'button[name="add-to-cart-sauce-labs-fleece-jacket"]';

  private _ACTUAL_PRODUCT_NAME: string;
  private _ACTUAL_PRODUCT_PRICE: string;

  public async verifyProductPage(): Promise<void> {
    await this.web.goto('https://www.saucedemo.com/inventory.html');

    const productHeadingVisible = await this.web
      .element(this._PRODUCTS_HEADING)
      .isElementVisible();
    assert(productHeadingVisible, 'valid product heading not found');
  }

  public async addProductToShoppingCart(): Promise<void> {
    await this.web.element(this._SELECT_PRODUCT).getFirstLocator().waitFor({
      state: 'visible',
      timeout: 10000,
    });
    await this.web.element(this._SELECT_PRODUCT).getFirstLocator().click();

    const productName = await this.web
      .element(this._PRODUCT_NAME)
      .getFirstLocator()
      .textContent();
    this._ACTUAL_PRODUCT_NAME = productName;
    const productPrice = await this.web
      .element(this._PRODUCT_PRICE)
      .getFirstLocator()
      .textContent();
    this._ACTUAL_PRODUCT_PRICE = productPrice;
  }

  // SET & GET ACCESSORS
  set ACTUAL_PRODUCT_NAME(productName: string) {
    this._ACTUAL_PRODUCT_NAME = productName;
  }
  set ACTUAL_PRODUCT_PRICE(productPrice: string) {
    this._ACTUAL_PRODUCT_PRICE = productPrice;
  }
  get ACTUAL_PRODUCT_NAME(): string {
    return this._ACTUAL_PRODUCT_NAME;
  }
  get ACTUAL_PRODUCT_PRICE(): string {
    return this._ACTUAL_PRODUCT_PRICE;
  }

  public async openShoppingCart(): Promise<void> {
    await this.web
      .element(this._SHOPPING_CART_BUTTON)
      .getFirstLocator()
      .click();
    await this.web.element(this._SHOPPING_CART_SECTION).waitTillVisible();
  }
}
