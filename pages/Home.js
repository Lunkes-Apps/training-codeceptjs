const { I } = inject();

module.exports = {
  funcionalidades_List: {
    'Formulário': 'ul.collapsible.collapsible-accordion > li:nth-child(1)',
    'Criar Usuários': 'body > div.row > div.col.s3 > ul > li.bold.active > div > ul > li:nth-child(1) > a'
  },

  novoUsuario_form: {
    'Nome' : '#user_name',
    'Email' : '#user_email',
    'Universidade' : '#user_university',
    'Gênero' : '#user_gender',
    'Último nome' : '#user_lastname',
    'Endereço' : '#user_address',
    'Profissão' : '#user_profile',
    'Idade' : '#user_age',
  },

  message: '#notice.light-green.accent-2',

  access(){
    I.amOnPage('treinamento/home');
    I.waitForText('Bem vindo');
  },

  clickOnItemOfList(item){
    I.click(this.funcionalidades_List[item]);
  },

  fillFieldNewUser(campo, text){
    I.fillField(this.novoUsuario_form[campo],text);
  },

  clickCriar(){
    I.click('.actions.btn.waves-effect.green');
  },

  verifyMessage(){
    I.waitForElement(this.message);
    I.seeTextEquals('Usuário Criado com sucesso',this.message);
  }
  
}
