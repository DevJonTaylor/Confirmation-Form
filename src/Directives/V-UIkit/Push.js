import Vue from 'vue';
import CommandCenter from "../CommandCenter";

Vue.directive('push', function (el, bind) {
  let cc = new CommandCenter(el, bind);

  cc.hasArg(function(arg) {
    this.isClass((!this.isValue || this.value), `uk-push-${arg}`);
  })
});
