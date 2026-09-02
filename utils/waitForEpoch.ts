import { Page } from '@playwright/test';

export async function waitForEpoch(page: Page, minEpoch: number) {
  const targetEpoch = minEpoch * 1000; // 0.3 → 300

  await page.waitForFunction(
    (target) => {
      const el = document.querySelector('#iter-number');
      if (!el) return false;

      // Cast to HTMLElement so innerText is allowed
      const text = (el as HTMLElement).innerText;

      const cleaned = text.replace(',', '');
      const epochValue = parseFloat(cleaned);
      console.log("Epoch inside browser:", epochValue);

      return epochValue >= target;
    },
    targetEpoch,
    { polling: 20 } // high precision
  );
}

