import Vue from 'vue';
import CommandCenter from '../CommandCenter';

/**
 * @property middle, hover, striped, condensed
 * @example v-table.hover.striped.condensed
 * <input class="uk-form-large uk-form-width-large uk-form-blank" type="text">
 */
Vue.directive('table', function (el, bind) {
  const cc = new CommandCenter(el, bind);

  cc
    .always(() => cc.trueValueClass('uk-table'))
    .hasMod('middle', () => cc.trueValueClass('uk-table-middle'))
    .hasMod('hover', () => cc.trueValueClass('uk-table-hover'))
    .hasMod('striped', () => cc.trueValueClass('uk-table-striped'))
    .hasMod('condensed', () => cc.trueValueClass('uk-table-condensed'))
});
