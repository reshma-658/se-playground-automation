import { Page } from '@playwright/test';

export function convertEpochTextToDecimal(epochText: string): number {
  const cleaned = epochText.replace(',', '');   // "000335" → "000335"
  const epochValue = parseFloat(cleaned);       // 335
  return epochValue / 1000;                     // 0.335
}
