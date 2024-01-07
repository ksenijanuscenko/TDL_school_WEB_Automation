import { Locator, Page } from '@playwright/test';
import UIElementActions from './UIElementActions';

export default class UIActions {
  public page: Page;
  private elementAction: UIElementActions;

  constructor(page: Page) {
    this.page = page;
    this.elementAction = new UIElementActions(page);
  }

  // Navigate to specify URL

  public async goto(URL: string): Promise<void> {
    await this.page.goto(URL, {
      timeout: 10000,
      waitUntil: 'load',
    });
  }

  // Fills info into field

  public async fill(selector: string, value: string): Promise<void> {
    await this.page.fill(selector, value);
  }

  // Finds element by selector

  public element(selector: string): UIElementActions {
    return this.elementAction.setElement(selector);
  }

  // Cliks on specific identified element

  public async click(selector: string): Promise<void> {
    await this.page.click(selector);
  }
  // Clicks on product with specific name

  public async clickProduct(productName: string): Promise<void> {
    const productSelector = `text=${productName}`;
    await this.page.click(productSelector);
  }

  // Adds item to the cart

  public async addToCart(productName: string): Promise<void> {
    const addToCartButtomSelector = `div.inventory_item_name:contains('${productName}') + ,add-to-cart-button`;
    await this.page.click(addToCartButtomSelector);
  }

}
