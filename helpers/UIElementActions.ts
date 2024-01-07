import { Locator, Page } from '@playwright/test';

export default class UIElementActions {
  constructor(private page: Page) {}

  private locator: Locator;
  private selector: string;

  public setElement(selector: string): UIElementActions {
    this.selector = selector;
    this.locator = this.page.locator(this.selector);
    return this;
  }

  public async isElementVisible(): Promise<boolean> {
    return await this.locator.isVisible();
  }
  public async click(): Promise<void> {
    await this.locator.click();
  }

  public getFirstLocator(): Locator {
    return this.locator.first();
  }

  public async waitTillVisible(timeout?: number): Promise<UIElementActions> {
    const actualTimeout = (timeout ?? 10) * 1000;
    await this.getFirstLocator().waitFor({
      state: 'visible',
      timeout: actualTimeout,
    });
    return this;
  }
}
