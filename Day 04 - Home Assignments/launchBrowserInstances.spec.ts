import { chromium, firefox, test } from '@playwright/test';

test('Launch Red Bus in Edge and verify title and URL', async () => {
  const browser = await chromium.launch({ channel: 'msedge' });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.redbus.in');
  await page.waitForTimeout(3000);

  const title = await page.title();
  const url = page.url();

  console.log('Red Bus title:', title);
  console.log('Red Bus URL:', url);

  await browser.close();
});

test('Launch Flipkart in Firefox and verify title and URL', async () => {
  const browser = await firefox.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.flipkart.com');
  await page.waitForTimeout(3000);

  const title = await page.title();
  const url = page.url();

  console.log('Flipkart title:', title);
  console.log('Flipkart URL:', url);

  await browser.close();
});
