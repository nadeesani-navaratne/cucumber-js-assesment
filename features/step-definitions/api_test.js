const {When,Then,Before,After,Given, AfterAll, BeforeAll} = require('@cucumber/cucumber')
const axios = require('axios');
const {expect, assert} = require('chai')

let response = {}

When('user send a GET reques to the API endpoint', async function () {
    try {
        response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    } catch (error) {
        console.error(error);
    }
  });

Then('user can see the success response from the API as {int}', function (responceStatus) {
    expect(response.status).equal(responceStatus)
  });