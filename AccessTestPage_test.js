
Feature('Access Test Page');

Scenario('Open test site', (I, homePage) => {
    homePage.access();
    homePage.clickOnItemOfList('Formulário');
    homePage.clickOnItemOfList('Criar Usuários');
    homePage.fillFieldNewUser('Nome','Alexandre');
    homePage.fillFieldNewUser('Email','alexandre@email.com');
    homePage.fillFieldNewUser('Universidade','uninter');
    homePage.fillFieldNewUser('Gênero','Masculino');
    homePage.fillFieldNewUser('Último nome','Lunkes');
    homePage.clickCriar();
    homePage.verifyMessage();

    I.wait(5);
    
});
