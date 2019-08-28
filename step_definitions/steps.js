const { I, homePage, radioECheckBoxPage } = inject();
var assert = require('assert');

Given('/^I am on the page "(.*?)"$/', (page) => {
  I.amOnPage(page);
});

When('I open the form', () => {
  homePage.clickOnItemOfList('Formulário');
  homePage.clickOnItemOfList('Criar Usuários');
});

When('I click on save button', () => {
  homePage.clickCriar();
});

Then('I see the message', () => {
  homePage.verifyMessage();
});


When('I fill out Name {string}', (name) => {
  homePage.fillFieldNewUser('Nome',name);
});

When('I fill out Email {string}', (email) => {
  homePage.fillFieldNewUser('Email',email);
});

When('I fill out Last Name {string}', (lastname) => {
  homePage.fillFieldNewUser('Último nome',lastname);
});

When('I click in radio box {string}', (radio) => {
  radioECheckBoxPage.clickOnLabel(radio);
});

When('I click in check box {string}', (check) => {
  radioECheckBoxPage.clickOnLabel(check);
});

Then('The check box {string} is checked', (check) => {
  radioECheckBoxPage.verifyChecked(check);
});

Then('The radio box {string} is checked', (check) => {
  radioECheckBoxPage.verifyChecked(check);
});
