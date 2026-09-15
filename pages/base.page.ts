import { Page, Locator } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle');
  }
 
  async goto(url: string) {
   await this.page.goto(url);
   await this.waitForPageLoad();
  }

  async getText(locator: Locator) {
    await locator.waitFor({ state: 'visible' });
    return await locator.innerText();
  }

 async waitVisible(locator: Locator) {
    await locator.waitFor({ state: 'visible' });
  }

}
