import { test, expect } from '@playwright/test';

test('Submit callback request successfully', async ({ page }) => {
  await page.goto('https://test.netlify.app/');

  await page.getByRole('textbox', { name: 'Name *' })
    .fill('Tavor Levine');

  await page.getByRole('textbox', { name: 'Email *' })
    .fill('tavor@gmail.com');

  await page.getByRole('textbox', { name: 'Phone *' })
    .fill('0508682031');

  await page.getByRole('textbox', { name: 'Company' })
    .fill('My Company');

  await page.getByRole('textbox', { name: 'Website' })
    .fill('https://mycompany.com');

  await page.getByLabel('Number of Employees')
    .selectOption('51-500');

  await page.screenshot({
    path: 'before-submit.png',
    fullPage: true
  });

  await page.getByRole('button', {
    name: 'Request a call back'
  }).click();

  await expect(page).toHaveURL(/thank-you/);
  await expect(page.getByText('Thank You!')).toBeVisible();

  console.log('Successfully reached thank you page');
});