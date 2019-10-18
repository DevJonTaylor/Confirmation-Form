import Vue from 'vue';
import CommandCenter from "../CommandCenter";

Vue.directive('container', function (el, bind) {
  let cc = new CommandCenter(el, bind);
  cc.hasArg(function () {
    this.addClass('uk-container')
  })
    .hasMod('center', function () {
      this.addClass('uk-container-center')
    })
});
