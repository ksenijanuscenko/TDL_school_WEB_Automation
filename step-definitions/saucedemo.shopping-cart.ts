import { Given, When, Then } from '@cucumber/cucumber';
import ShoppingCartPage from '../page-objects/ShoppingCart';

Then(
  /^User sees product - "([^"]*)" with price - "([^"]*)"$/,
  async function (productName: string, productPrice: string) {
    await new ShoppingCartPage(this.web).validateAddedProductToShoppingCart(
      this.PRODUCT_NAME,
      this.PRODUCT_PRICE,
    );
  },
);

When(/^User press “Checkout” button$/, async function () {
  await new ShoppingCartPage(this.web).clickCheckoutButton();
});
