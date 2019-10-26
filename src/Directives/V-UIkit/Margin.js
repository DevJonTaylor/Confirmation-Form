import Vue from 'vue';
import CommandCenter from "../CommandCenter";

Vue.directive('margin', function (el, bind) {
  let cc = new CommandCenter(el, bind);
  cc.hasNothing(function () {
    this.addClass('uk-margin')
  })
    .hasOnlyValue(function(val) {
      this.isClass(val, 'uk-margin');
    })
    .hasArg(function (arg) {
      this.isClass((!this.isValue || this.value),`uk-margin-${arg}`)
    })
    .hasMod('s', function (mod, arg) {
      if (!arg) this.isClass((!this.isValue || this.value),'uk-margin-small');
      else this.isClass((!this.isValue || this.value),`uk-margin-small-${arg}`);
    })
    .hasMod('l', function (mod, arg) {
      if (!arg) this.isClass((!this.isValue || this.value),'uk-margin-large');
      else this.isClass((!this.isValue || this.value),`uk-margin-large-${arg}`);
    })
    .hasMod('no', function (mod, arg) {
      if (!arg) this.isClass((!this.isValue || this.value),'uk-margin-remove');
      else this.isClass((!this.isValue || this.value),`uk-margin-${arg}-remove`);
    });
});
