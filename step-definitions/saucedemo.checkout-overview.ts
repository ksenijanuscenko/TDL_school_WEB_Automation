import { Given, When, Then } from '@cucumber/cucumber';
import CheckoutOverviewPage from '../page-objects/CheckoutOverview';

When(/^User fills the checkout information form$/, async function () {
  await new CheckoutOverviewPage(this.web).inputTheFirstName('Ksenija');
  await new CheckoutOverviewPage(this.web).inputLastName('Nuscenko');
  await new CheckoutOverviewPage(this.web).inputZipCode('LV-1013');
});

When(
  /^User press the “Continue” button to continue with the order$/, async function () {
    await new CheckoutOverviewPage(this.web).clickContinueButton();
  });

When(
  /^User sees correct product details in checkout overview$/,
  async function () {},
);

When(/^User press the “Finish” button$/, async function () {
  await new CheckoutOverviewPage(this.web).clickFinishButton();
});

Then(/^User sees that order has been completed$/, async function () {
  await new CheckoutOverviewPage(this.web).verifyCheckoutCompletePage();
});

Then(/^User clicks on “Back Home” button$/, async function () {
  await new CheckoutOverviewPage(this.web).clickBackHomeButton();
});


