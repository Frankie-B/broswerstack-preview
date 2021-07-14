const webdriver = require('selenium-webdriver');

const { By } = webdriver;
const { until } = webdriver;
const baseUrl = 'http://jurrejansmit1:DoUmuqHJPquqJEp1SCun@hub-cloud.browserstack.com/wd/hub';

const capabilitiesChrome = {
  os_version: '10',
  resolution: '1920x1080',
  browserName: 'Chrome',
  browser_version: 'latest',
  os: 'Windows',
  name: 'BStack-[NodeJS] Chrome Test', // test name
  build: 'BStack Build Number 1', // CI/CD job or build name
};

const capabilitiesFirefox = {
  os_version: '10',
  resolution: '1920x1080',
  browserName: 'Firefox',
  browser_version: 'latest',
  os: 'Windows',
  name: 'BStack-[NodeJS] Firefox Test', // test name
  build: 'BStack Build Number 1', // CI/CD job or build name
};

const capabilitiesIE11 = {
  os_version: '10',
  resolution: '1920x1080',
  browserName: 'IE',
  browser_version: '11.0',
  os: 'Windows',
  name: 'BStack-[NodeJS] IE11 Test', // test name
  build: 'BStack Build Number 1', // CI/CD job or build name
};

async function testChromeBrowser() {
  const chromeDriver = new webdriver.Builder().usingServer(`${baseUrl}`).withCapabilities(capabilitiesChrome).build();
  await chromeDriver.get('https://duckduckgo.com/');

  try {
    await chromeDriver.wait(webdriver.until.titleMatches(/DuckDuckGo — Privacy, simplified./i), 5000);
    console.log(await chromeDriver.getTitle());
    await chromeDriver.executeScript(
      'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "Title contains Duck, Duck, Go!"}}'
    );
  } catch (err) {
    await chromeDriver.executeScript(
      'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "Page could not load in time"}}'
    );
  }
  chromeDriver.quit();
}

// async function testFireFoxBrowser() {
//   const fireFoxDriver = new webdriver.Builder().usingServer(`${baseUrl}`).withCapabilities(capabilitiesFirefox).build();
//   await fireFoxDriver.get('https://duckduckgo.com/');
// }

// async function testIE11Browser() {
//   const ie11Driver = new webdriver.Builder().usingServer(`${baseUrl}`).withCapabilities(capabilitiesIE11).build();
//   await ie11Driver.get('https://duckduckgo.com/');
// }

// fireFoxDriver.quit();
// ie11Driver.quit();

testChromeBrowser();
