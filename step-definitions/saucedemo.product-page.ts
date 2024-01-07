import { Given, When, Then } from '@cucumber/cucumber';
import ProductPage from '../page-objects/ProductPage';

Then(/^User is on Swag Labs products page'$/, async function () {
  await new ProductPage(this.web).verifyProductPage();
});

When(
  /^User adds - "([^"]*)" to the shopping cart$/,
  async function (productName: string) {
    const productPage = new ProductPage(this.web);
    await productPage.addProductToShoppingCart();

    this.PRODUCT_NAME = productPage.ACTUAL_PRODUCT_NAME;
    this.PRODUCT_PRICE = productPage.ACTUAL_PRODUCT_PRICE;
    console.log(this.PRODUCT_NAME);
    console.log(this.PRODUCT_PRICE);
  },
);

When(/^User opens shopping cart$/, async function () {
  await new ProductPage(this.web).openShoppingCart();
});

Then(/^User is on Swag Labs products page$/, async function () {
  await new ProductPage(this.web).verifyProductPage();
});