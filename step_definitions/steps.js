const { I, homePage } = inject();

Given('I am on the Page', () => {
  homePage.access();
});

When('I open the form', () => {
  homePage.clickOnItemOfList('Formulário');
  homePage.clickOnItemOfList('Criar Usuários');
});

// When('I fill out Name .*', (name) => {
//   homePage.fillFieldNewUser('Nome','Alexandre');
//   // homePage.fillFieldNewUser('Email','alexandre@email.com');
//   // homePage.fillFieldNewUser('Universidade','uninter');
//   // homePage.fillFieldNewUser('Gênero','Masculino');
//   // homePage.fillFieldNewUser('Último nome','Lunkes');
//   // console.log(list)
// });

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
