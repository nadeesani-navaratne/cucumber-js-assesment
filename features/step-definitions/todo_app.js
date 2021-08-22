const {When,Then,Before,After,Given, AfterAll, BeforeAll} = require('@cucumber/cucumber')
const {expect, assert} = require('chai')
const webdriver = require('selenium-webdriver');
const {By} = require('selenium-webdriver')
const {Key} = require('selenium-webdriver')


let driver

BeforeAll(function () {
  driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
  console.log('Inside Before')
  });

AfterAll(function () {
    console.log('Inside After')
    driver.quit();
  });

let latestCount = 0

let getCount = () => {
  try {
    return driver.findElement(By.xpath('//span[@class="todo-count"]/strong')).getText()
  } catch (NoSuchElementError) {
    newitem = "NoSuchElementError"
  }
}


Given('user browse Todo Application',  {timeout: 60*1000}, async () => {
  await  driver.get('https://todomvc.com/examples/react')
});


Given('user on Active TODO list', async function () {
  await driver.findElement(By.xpath('//a[text()="Active"]')).click()
});


Given('user counts initial todo items in TODO list', async function () {
  latestCount = await getCount()
});

Given('user on Completed TODO list', async function () {
  await driver.findElement(By.xpath('//a[text()="Completed"]')).click()
});

Given('user on All TODO list', async function () {
  await driver.findElement(By.xpath('//a[text()="All"]')).click()
});






When('user enter the url', {timeout: 60*1000}, async () => {
  await driver.get('https://todomvc.com/examples/react/#/')
});


When('user enter what needs to be done in to the TODO list as {string}', async function (todoItem) {
  newitem = driver.findElement(By.xpath('//input[@class="new-todo"]'))
  await newitem.sendKeys(todoItem)
  await newitem.sendKeys(Key.ENTER)
});

When('user click on All button', async function () {
   await driver.findElement(By.xpath('//a[text()="All"]')).click()
});

When('user click on Active button', async function () {
  await driver.findElement(By.xpath('//a[text()="Active"]')).click()
});

When('user click on Completed button', async function () {
  await driver.findElement(By.xpath('//a[text()="Completed"]')).click()
});

When('user count initial todo item\(s) in TODO list', function () {
  initialCount = driver.findElement(By.xpath('//span[@class="todo-count"]/strong')).getText()
});

When('user mark todo item as completed {string}', async function (todoItem) {
  item_button= await driver.findElement(By.xpath(`//label[text()="${todoItem}"]/following-sibling::button`))
  await item_button.click()
});

When('user enter what needs to be done in to the TODO list as {string} and {string}', async function (todoItem1, todoItem2) {
  newitem = driver.findElement(By.xpath('//input[@class="new-todo"]'))
  await newitem.sendKeys(todoItem1,todoItem2)
  await newitem.sendKeys(Key.ENTER)
});

When('user goto Completed list', async function () {
  await driver.findElement(By.xpath('//a[text()="Completed"]')).click()
});


Then('user check for the tilte of the home page', async () => {
  let title = await  driver.getTitle()
  console.log(title);
  expect(title).equal('React • TodoMVC')
});


Then('user can see the heading of the application', async () => {
   let heading =await driver.findElement(By.xpath('//h1')).getText()
   expect(heading).equal('todos')

});

Then('user checks the TODO list for {string}', async function (todoItem) {
  try {
    newitem = await driver.findElement(By.xpath(`//label[text()="${todoItem}"]`)).getText()
  } catch (NoSuchElementError) {
    newitem = "NoSuchElementError"
  }
  expect(newitem).equal(todoItem)
});

Then('user checks the completed TODO list for {string}', async function (todoItem) {
  try {
    newitem = await driver.findElement(By.xpath(`//label[text()="${todoItem}"]`)).getText()
  } catch (NoSuchElementError) {
    newitem = "NoSuchElementError"
  }
  expect(newitem).equal("NoSuchElementError")
});


Then('user get one more item in the TODO list', async function () {
  previousCount = latestCount
  latestCount = await getCount()
  expect(latestCount - previousCount).equal(1)
});

Then('user get one more item in the completed TODO list', async function () {
  previousCount = latestCount
  latestCount = await getCount()
  expect(latestCount-previousCount).equal(-1)
});