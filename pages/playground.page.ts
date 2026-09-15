import { Page, expect } from '@playwright/test';
import { BasePage } from './base.page';
import { Actions } from '../utils/actions';
import { Logger } from '../utils/logger';
import { waitForEpoch } from '../utils/waitForEpoch';

export default class PlaygroundPage extends BasePage{
  readonly datasetExclusive;
  readonly noiseInput;
  readonly xSquaredFeature;
  readonly ySquaredFeature;
  readonly removeNeuronLayer1;
  readonly removeNeuronLayer2;
  readonly learningRate;
  readonly playPauseButton;
  readonly epochCounter;
  readonly testLoss;
  readonly canvasBase;
  readonly datasetExclusiveCanvas;
  
  constructor(page: Page) {
    super(page);
    this.datasetExclusive = page.getByTitle('Exclusive or');
    this.noiseInput = page.locator('#noise');
    this.xSquaredFeature = page.locator('#canvas-xSquared');
    this.ySquaredFeature = page.locator('#canvas-ySquared');
    this.removeNeuronLayer1 = page.locator('.ui-numNodes1').getByRole('button', { name: 'remove' });
    this.removeNeuronLayer2 = page.locator('.ui-numNodes2').getByRole('button', { name: 'remove' });
    this.learningRate = page.locator('#learningRate');
    this.playPauseButton = page.locator('#play-pause-button');
    this.epochCounter = page.locator('#iter-number');
    this.testLoss = page.locator('#loss-test');
    this.canvasBase = page.locator('div[id^="canvas-"][class*="canvas"]');
    this.datasetExclusiveCanvas = page.locator('div[title="Exclusive or"] canvas');
  }

  async goto(url: string) {
    Logger.action('Navigating to TensorFlow Playground...');
    await super.goto(url);
    const cookies = await this.page.context().cookies();
    expect(cookies.length).toBeGreaterThan(0);
    Logger.success('Navigation successful.');
  }

  async getTestLoss() {
    Logger.action('Fetching test loss value...');
    await expect(this.testLoss).toBeVisible();
    return await this.getText(this.testLoss);
  }

  async selectDatasetExclusive() {
    await Actions.click(this.datasetExclusive, 'Exclusive OR dataset');
    await expect(this.datasetExclusiveCanvas).toHaveClass(/selected/);
  }

  async setNoise(noise: string) {
    await Actions.fill(this.noiseInput, noise, 'Noise input');
    await expect(this.noiseInput).toHaveValue(noise);
  }

  async getNoise(): Promise<string> {
    await expect(this.noiseInput).toBeVisible();
    return await this.noiseInput.inputValue();
  }

  async selectTwoMoreFeatures() {
    await Actions.click(this.xSquaredFeature, 'xSquared feature');
    await expect(this.xSquaredFeature).toHaveClass(/active/);

    await Actions.click(this.ySquaredFeature, 'ySquared feature');
    await expect(this.ySquaredFeature).toHaveClass(/active/);
  }
  
  async getTotalNeuronCount(): Promise<number> {
   const totalnuronsCount = this.canvasBase;
   return await totalnuronsCount.count();
  }

  async removeTwoNeurons(): Promise<number> {
    await expect(this.removeNeuronLayer1).toBeVisible();
    await Actions.click(this.removeNeuronLayer1, 'Remove neuron layer 1');

    await expect(this.removeNeuronLayer2).toBeVisible();
    await Actions.click(this.removeNeuronLayer2, 'Remove neuron layer 2');
    return await this.getTotalNeuronCount();
  }
  
 async setLearningRate(rate: string) {
    await Actions.select(this.learningRate, rate, 'Learning rate');
    await expect(this.learningRate).toHaveValue(rate);
  }

  async getLearningRate(): Promise<string> {
    await expect(this.learningRate).toBeVisible();
    return await this.learningRate.evaluate(el => (el as HTMLSelectElement).value);
  }

  async runSimulation() {
    await Actions.click(this.playPauseButton, 'Play/Pause button');
    await expect(this.playPauseButton).toHaveClass(/playing/);
  }

  async waitUntilEpoch(threshold: number) {
    Logger.action(`Waiting until epoch reaches ${threshold}...`);
    await waitForEpoch(this.page, threshold);
    Logger.success('Epoch threshold reached.');
  }

 async getEpochCounter(): Promise<string> {
    await Actions.click(this.playPauseButton, 'Play/Pause button');
    await expect(this.epochCounter).toBeVisible();
    return await this.epochCounter.innerText();
  }
}
