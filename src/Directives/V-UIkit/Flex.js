import Vue from 'vue';
import CommandCenter from "../CommandCenter";

Vue.directive('flex', function (el, bind) {
  let cc = new CommandCenter(el, bind);

  cc.hasNothing(() => cc.addClass('uk-flex'))
    .hasArg(() => cc.trueValueClass('uk-flex'))
    .hasMod('5', () => cc.trueValueClass('uk-flex', 'uk-flex-center', 'uk-flex-middle'))
    .hasMod('align', () => cc.trueValueClass('uk-flex'))
    .hasMod('center', () => cc.trueValueClass('uk-flex-center'))
    .hasMod('right', () => cc.trueValueClass('uk-flex-right'))
    .hasMod('middle', () => cc.trueValueClass('uk-flex-middle'))
    .hasMod('top', () => cc.trueValueClass('uk-flex-top'))
    .hasMod('between', () => cc.trueValueClass('uk-flex-between'))
    .hasMod('around', () => cc.trueValueClass('uk-flex-around'))
    .hasMod('col', () => cc.trueValueClass('uk-flex-column'))
    .hasMod('wor', () => cc.trueValueClass('uk-flex-row-reverse'))
    .hasMod('loc', () => cc.trueValueClass('uk-flex-column-reverse'))
    .hasMod('wrap', (mod, arg) => cc.trueValueClass(`uk-flex-wrap-${arg}`))
    .hasMod('order', (mod, arg) => cc.trueValueClass(`uk-flex-wrap-${arg}`))
    .hasMod('item', (mod, arg) => cc.trueValueClass(`uk-flex-wrap-${arg}`));
});
