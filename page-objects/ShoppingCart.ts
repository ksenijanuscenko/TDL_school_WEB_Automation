import Assert from '../helpers/Assert';
import UIActions from '../helpers/UIActions';

export default class ShoppingCartPage {
  constructor(private web: UIActions) {}

  private readonly _SHOPPING_CART_PRODUCT_NAME = `//div[text()='Sauce Labs Fleece Jacket']`;
  private readonly _SHOPPING_CART_PRODUCT_PRICE = `//div[text()='49.99']`;

  public async validateAddedProductToShoppingCart(
    expectedProductName: string,
    expectedProductPrice: string,
  ): Promise<void> {
    const actualProductName = await this.web
      .element(this._SHOPPING_CART_PRODUCT_NAME)
      .getFirstLocator()
      .textContent();
    const actualProductPrice = await this.web
      .element(this._SHOPPING_CART_PRODUCT_PRICE)
      .getFirstLocator()
      .textContent();

    await Assert.assertEquals(actualProductName, expectedProductName);
    await Assert.assertEquals(actualProductPrice, expectedProductPrice);
  }
  private readonly _CHECKOUT_BUTTON: string = '#checkout';

  public async clickCheckoutButton(): Promise<void> {
    await this.web.click(this._CHECKOUT_BUTTON);
  }
}
