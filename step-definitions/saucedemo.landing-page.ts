import { Given, When, Then } from '@cucumber/cucumber';
import LandingPage from '../page-objects/LandingPage';

Given(/^User has opened Swag Labs website$/, async function () {
  await new LandingPage(this.web).navigateToHomePage();
});

Given(/^User inputs username - "([^"]*)"$/, async function (Username: string) {
  await new LandingPage(this.web).inputUsername('standard_user');
});

Given(/^User inputs password - "([^"]*)"$/, async function (password: string) {
  await new LandingPage(this.web).inputPassword('secret_sauce');
});

When(/^User press the “Login” button$/, async function () {
  await new LandingPage(this.web).clickLoginButton();
});
