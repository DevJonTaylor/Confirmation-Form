import Vue from 'vue';
import CommandCenter from "../CommandCenter";

Vue.directive('margin', function (el, bind) {
  let cc = new CommandCenter(el, bind);
  cc.hasNothing(function () {
    this.addClass('uk-margin')
  })
    .hasArg(function (arg) {
      this.addClass(`uk-margin-${arg}`)
    })
    .hasMod('s', function (mod, arg) {
      if (!arg) this.addClass('uk-margin-small');
      else this.addClass(`uk-margin-small-${arg}`);
    })
    .hasMod('l', function (mod, arg) {
      if (!arg) this.addClass('uk-margin-large');
      else this.addClass(`uk-margin-large-${arg}`);
    })
    .hasMod('sm', function (mod, arg) {
      if (!arg) this.addClass('uk-margin-small');
      else this.addClass(`uk-margin-small-${arg}`);
    })
    .hasMod('lg', function (mod, arg) {
      if (!arg) this.addClass('uk-margin-large');
      else this.addClass(`uk-margin-large-${arg}`);
    })
    .hasMod('no', function (mod, arg) {
      if (!arg) this.addClass('uk-margin-remove');
      else this.addClass(`uk-margin-${arg}-remove`);
    });
});
