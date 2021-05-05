const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://gshow.globo.com/realities/bbb/bbb21/votacao/paredao-bbb21-vote-para-eliminar-camilla-de-lucas-gilberto-ou-juliette-55e6ae46-c55a-4988-bf25-22f8cf360284.ghtml');
    await (await driver.findElements(By.xpath("//*[text()='Camilla De Lucas']"))).click();
    //await (await driver.findElement(By.id("login"))).sendKeys('erick.augustoramos@gmail.com');

    //await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    //await driver.quit();
  }
})();