const { I } = inject();


module.exports = {

  radios: {
    "Red": "#red[type='radio']",
    "Blue": "#blue[type='radio']",
    "Yellow": "#yellow.with-gap[type='radio']",
    "Green": "#green.with-gap[type='radio']",
  },

  checks: {
    "purple":"#purple[type='checkbox']",
    "Grey":"#grey[type='checkbox']",
    "black":"#black.filled-in[type='checkbox']",
    "White":"#white.filled-in[type='checkbox']"
  },

  clickOnLabel(label){
    I.click(label);
  },

  clickRadio(radio){
    I.click(this.radios[radio]);
  },

  clickCheck(check){
    I.click(this.checks[check]);
  },

  verifyChecked(element){
    el = "#"+element.toLowerCase();
    I.seeCheckboxIsChecked(el);
  }

}