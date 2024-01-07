import {
  BeforeAll,
  AfterAll,
  Before,
  After,
  setDefaultTimeout,
  setWorldConstructor,
  ITestCaseHookParameter,
  BeforeStep,
  ITestStepHookParameter,
} from '@cucumber/cucumber';
import { Browser } from '@playwright/test';
import WebBrowser from '../config/Browser';
import * as dotenv from 'dotenv';
import UIActions from './UIActions';
import Log from './Logger';
import CustomWorld from '../config/CustomWorld';

const envConfig = dotenv.config().parsed;
setDefaultTimeout(Number.parseInt(envConfig.TEST_TIMEOUT, 10) * 60000);
setWorldConstructor(CustomWorld);

let browser: Browser;

BeforeAll(async function () {
  try {
    browser = await WebBrowser.launch();
  } catch (error) {
    console.error(error);
  }
});

AfterAll(async function () {
  try {
    await browser.close();
  } catch (error) {
    console.error(error);
  }
});

Before(async function ({ pickle }: ITestCaseHookParameter) {
  Log.testBegin(`${pickle.name}`);
  this.context = await browser.newContext({
    viewport: null,
    ignoreHTTPSErrors: true,
    acceptDownloads: true,
  });
  this.page = await this.context?.newPage();
  this.web = new UIActions(this.page);
});

After(async function ({ pickle, result }: ITestCaseHookParameter) {
  await this.page.waitForTimeout(5000);
  await this.context.close();
  await this.page.close();

  Log.testEnd(pickle.name, result.status);
});

BeforeStep(async function ({ pickleStep }: ITestStepHookParameter) {
  Log.info(`${pickleStep.text.toLocaleUpperCase()}`);
});
