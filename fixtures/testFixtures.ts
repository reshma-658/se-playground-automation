import { test as base } from '@playwright/test';
import PlaygroundPage from '../pages/playground.page';

type Fixtures = {
  playground: PlaygroundPage;
};

export const test = base.extend<Fixtures>({
  playground: async ({ page }, use) => {
    const playground = new PlaygroundPage(page);
    await use(playground);
  }
});

export const expect = base.expect;
