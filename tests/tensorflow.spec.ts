import { test, expect } from '../fixtures/testFixtures';
import { allure } from 'allure-playwright';
import { convertEpochTextToDecimal } from '../utils/epochUtils';
import testData from '../testdata/playground.json';

test.describe('TensorFlow Playground Automation Suite', () => {

  test('TensorFlow Playground automation assignment', async ({ playground, page }) => {

    // ---------- Allure Metadata ----------
    await allure.label('owner', 'Reshma');
    await allure.severity('Medium');
    await allure.feature('Model Training');
    await allure.story('Final Loss Reading Workflow when Epoch value is 0.3');
    await allure.epic('TensorFlow Playground Automation');

    // ---------- Test Steps ----------

    await allure.step('Open the TensorFlow Playground application', async () => {
      await playground.goto(testData.url);
      await allure.attachment('Page URL', page.url(), 'text/plain');
    });

    await allure.step('Capture the initial Test Loss value', async () => {
      const initialLoss = await playground.getTestLoss();
      await allure.attachment('Initial Loss', initialLoss.toString(), 'text/plain');
      expect.soft(Number(initialLoss)).not.toBeNaN();
    });

    await allure.step('Switch dataset to Exclusive OR', async () => {
      await playground.selectDatasetExclusive();
    });

    await allure.step(`Set noise level to ${testData.noise}`, async () => {
      await playground.setNoise(testData.noise);

      const noise = await playground.getNoise();
      expect.soft(noise).toBe(testData.noise);
    });

    await allure.step('Enable two additional input features', async () => {
      await playground.selectTwoMoreFeatures();
    });

    await allure.step('Reduce network complexity by removing two neurons', async () => {
      const before = await playground.getTotalNeuronCount();
      const after = await playground.removeTwoNeurons();
      await allure.attachment('Neuron Count Before', before.toString(), 'text/plain');
      await allure.attachment('Neuron Count After', after.toString(), 'text/plain');
      const removed = before - after;
      expect.soft(removed).toBe(testData.totalcanvasRemoved);
    });

    await allure.step(`Adjust learning rate to ${testData.learningRate} for controlled training`, async () => {
      await playground.setLearningRate(testData.learningRate);

      const learningRate = await playground.getLearningRate();
      expect.soft(learningRate).toBe(testData.learningRate);
    });

    await allure.step('Start the model training simulation', async () => {
      await playground.runSimulation();
    });

    await allure.step(`Wait until the model reaches epoch threshold ${testData.epochThreshold}`, async () => {
      await playground.waitUntilEpoch(testData.epochThreshold);

      const value = await playground.getEpochCounter();
      const epochDecimal = convertEpochTextToDecimal(value);
      expect.soft(epochDecimal).toBeGreaterThan(testData.epochThreshold);
    });

    await allure.step('Capture the final Test Loss value after training', async () => {
      const finalLoss = await playground.getTestLoss();
      console.log(`Final loss when Epoch value is ${testData.epochThreshold} : `, finalLoss);
      expect(Number(finalLoss)).not.toBeNaN();
      await allure.attachment('Final Loss', finalLoss.toString(), 'text/plain');
    });

    expect(test.info().errors).toHaveLength(0);
  });

});
