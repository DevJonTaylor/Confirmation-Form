import Vue from 'vue';
import CommandCenter from '../CommandCenter';

CommandCenter.run = function (el, bind) {
  CommandCenter.start(el, bind)
    .hasMod('middle', () => this.addClass('uk-table-middle'))
    .hasMod('hover', () => this.addClass('uk-table-hover'))
    .hasMod('striped', () => this.addClass('uk-table-striped'))
    .hasMod('condensed', () => this.addClass('uk-table-condensed'));
};

/**
 * @property row, small, large, lg, md, sm, xs, blank
 * @example v-form.large.lg.blank
 * <input class="uk-form-large uk-form-width-large uk-form-blank" type="text">
 */
Vue.directive('table', function (el, bind) {
  CommandCenter.run(el, bind)
});
