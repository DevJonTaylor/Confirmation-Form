import Vue from 'vue';
import CommandCenter from "../CommandCenter";

Vue.directive('txt', function(el, bind) {
  const cc = new CommandCenter(el, bind);

  cc.hasArg(arg => cc.trueValueClass`uk-text-${arg}`)
    .hasMod('s', () => cc.trueValueClass('uk-text-small'))
    .hasMod('l', () => cc.trueValueClass('uk-text-large'))
    .hasMod('bold', () => cc.trueValueClass('uk-text-bold'))
    .hasMod('muted', () => cc.trueValueClass('uk-text-muted'))
    .hasMod('primary', () => cc.trueValueClass('uk-text-primary'))
    .hasMod('success', () => cc.trueValueClass('uk-text-success'))
    .hasMod('warning', () => cc.trueValueClass('uk-text-warning'))
    .hasMod('danger', () => cc.trueValueClass('uk-text-danger'))
    .hasMod('contrast', () => cc.trueValueClass('uk-text-contrast'))
    .hasMod('cap', () => cc.trueValueClass('uk-text-capitalize'))
    .hasMod('upper', () => cc.trueValueClass('uk-text-uppercase'))
    .hasMod('lower', () => cc.trueValueClass('uk-text-lowercase'))
    .hasMod('truncate', () => cc.trueValueClass('uk-text-truncate'))
    .hasMod('break', () => cc.trueValueClass('uk-text-break'))
    .hasMod('nowrap', () => cc.trueValueClass('uk-text-nowrap'));
});
