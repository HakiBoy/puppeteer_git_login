const puppeteer = require('puppeteer');
const dotenv = require('dotenv')

dotenv.config()

const LOGIN = async (page) => {
  const USER = {
    username : process.env.USER_NAME,
    password : process.env.PASSWORD
  }
  // dom element selectors
  const USERNAME_SELECTOR = '#login_field';
  const PASSWORD_SELECTOR = '#password';
  const BUTTON_SELECTOR = '#login > form > div.auth-form-body.mt-3 > input.btn.btn-primary.btn-block';
  
  // await page.click(USERNAME_SELECTOR);
  await page.type(USERNAME_SELECTOR, USER.username, { delay: 20 });

  // await page.click(PASSWORD_SELECTOR);
  await page.type(PASSWORD_SELECTOR, USER.password, { delay: 20 });

  await page.click(BUTTON_SELECTOR);

  await page.waitForNavigation();
}

const run = async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  
  await page.goto('https://github.com/login');
  
  await LOGIN(page);

  browser.close();
}

run();