import { Locator, test } from '@playwright/test';
import { Logger } from './logger';

export class Actions {

  static async click(element: Locator, description: string, retries = 2) {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        Logger.action(`Clicking: ${description} (Attempt ${attempt})`);

        await test.step(`Click: ${description} (Attempt ${attempt})`, async () => {
          await element.waitFor({ state: 'visible' });
          await element.click();
        });

        Logger.success(`Clicked successfully: ${description}`);
        return;
      } catch (error) {
        Logger.warn(`Click failed for ${description}, retrying...`);

        if (attempt === retries) {
          const screenshot = await element.page().screenshot();

          await test.info().attach(`Click Failure - ${description}`, {
            body: screenshot,
            contentType: 'image/png'
          });

          Logger.error(`Failed to click ${description}: ${error}`);
          throw error;
        }

        await element.page().waitForTimeout(300);
      }
    }
  }

  static async fill(element: Locator, value: string, description: string, retries = 2) {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        Logger.action(`Filling ${description} with value: ${value} (Attempt ${attempt})`);

        await test.step(`Fill: ${description} → ${value} (Attempt ${attempt})`, async () => {
          await element.waitFor({ state: 'visible' });
          await element.fill(value);
        });

        Logger.success(`Filled successfully: ${description} → ${value}`);
        return;
      } catch (error) {
        Logger.warn(`Fill failed for ${description}, retrying...`);

        if (attempt === retries) {
          const screenshot = await element.page().screenshot();

          await test.info().attach(`Fill Failure - ${description}`, {
            body: screenshot,
            contentType: 'image/png'
          });

          Logger.error(`Failed to fill ${description}: ${error}`);
          throw error;
        }

        await element.page().waitForTimeout(300);
      }
    }
  }

  static async select(element: Locator, value: string, description: string, retries = 2) {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        Logger.action(`Selecting ${value} in ${description} (Attempt ${attempt})`);

        await test.step(`Select: ${description} → ${value} (Attempt ${attempt})`, async () => {
          await element.waitFor({ state: 'visible' });
          await element.selectOption(value);
        });

        Logger.success(`Selected successfully: ${description} → ${value}`);
        return;
      } catch (error) {
        Logger.warn(`Select failed for ${description}, retrying...`);

        if (attempt === retries) {
          const screenshot = await element.page().screenshot();

          await test.info().attach(`Select Failure - ${description}`, {
            body: screenshot,
            contentType: 'image/png'
          });

          Logger.error(`Failed to select ${description}: ${error}`);
          throw error;
        }

        await element.page().waitForTimeout(300);
      }
    }
  }
}
