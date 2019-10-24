import Vue from 'vue';
import CommandCenter from "../CommandCenter";

Vue.directive('width', function (el, bind) {
  let cc = new CommandCenter(el, bind);

  cc
    .hasNothing(function() { this.addClass('uk-width-1-1') })
    .hasOnlyValue(function(val) { this.isClass(val, 'uk-width-1-1') })
    .hasArg(function(arg) {
      this.isClass((!this.isValue || this.value), `uk-width-${arg}`);
    })
    .hasMod('s', function(mod, arg) {
      if(arg) this.isClass((!this.isValue || this.value), `uk-width-small-${arg}`);
      else this.isClass((!this.isValue || this.value), `uk-width-small-1-1`);
    })
    .hasMod('m', function(mod, arg) {
      if(arg) this.isClass((!this.isValue || this.value), `uk-width-medium-${arg}`);
      else this.isClass((!this.isValue || this.value), `uk-width-medium-1-1`);
    })
    .hasMod('l', function(mod, arg) {
      if(arg) this.isClass((!this.isValue || this.value), `uk-width-large-${arg}`);
      else this.isClass((!this.isValue || this.value), `uk-width-large-1-1`);
    });
});
