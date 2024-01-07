import UIActions from '../helpers/UIActions';
import assert from 'assert';

export default class CheckoutOverviewPage {
  constructor(private web: UIActions) {}

  private readonly _PRODUCT_NAME = `//div[text()='Sauce Labs Fleece Jacket']`;
  private readonly _PRODUCT_PRICE = `//div[text()='49.99']`;
  private readonly _FINISH_BUTTON: string = '#finish';
  private readonly _CHECKOUT_COMPLETE_HEADING = '//span[text()="Checkout: Complete!"]';
  private readonly _BACK_HOME_BUTTON: string = '#back-to-products';

  private _ACTUAL_PRODUCT_NAME: string;
  private _ACTUAL_PRODUCT_PRICE: string;

  // to fill in first name, last name and zip-code

  public async inputTheFirstName(firstname: string): Promise<void> {  //input first name for checkout
    await this.web.fill('#first-name', firstname);
  }
  public async inputLastName(lastname: string): Promise<void> {   //input first name for login
    await this.web.fill('#last-name', lastname);
  }
  public async inputZipCode(zipcode: string): Promise<void> {
    await this.web.fill('#postal-code', zipcode);
  }

  // to press CONTINUE button

  private readonly _CONTINUE_BUTTON: string = '#continue';
  public async clickContinueButton(): Promise<void> {
    await this.web.click(this._CONTINUE_BUTTON);
  }



  public async addProductToWishlist(): Promise<void> {
    await this.web
      .element(this._CONTINUE_BUTTON)
      .getFirstLocator()
      .waitFor({
        state: 'visible',
        timeout: 10000,
      });
    await this.web
      .element(this._CONTINUE_BUTTON)
      .getFirstLocator()
      .click();


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

public async clickFinishButton(): Promise<void> {
  await this.web.click(this._FINISH_BUTTON);
}

public async verifyCheckoutCompletePage(): Promise<void> {
  await this.web.goto('https://www.saucedemo.com/checkout-complete.html');

const productHeadingVisible = await this.web
      .element(this._CHECKOUT_COMPLETE_HEADING )
      .isElementVisible();
    assert(productHeadingVisible, 'valid completed checkout heading was not found');
  }

  public async clickBackHomeButton(): Promise<void> {
    await this.web.click(this._BACK_HOME_BUTTON);
  }
  
}
