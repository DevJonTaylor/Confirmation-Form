import Vue from 'vue';
import CommandCenter from '../CommandCenter';

/**
 * @property row, small, large, lg, md, sm, xs, blank
 * @example v-form.large.lg.blank
 * <input class="uk-form-large uk-form-width-large uk-form-blank" type="text">
 */
Vue.directive('modal', function (el, bind) {
  let cc = new CommandCenter(el, bind);
  let data = {};

  cc
    .hasNothing(function () {
      this.addClass('uk-modal')
    })
    .hasMod('close', function () {
      this.addClass('uk-modal-close')
    })
    .hasMod('lg', function () {
      this.addClass('uk-modal-dialog-large')
    })
    .hasMod('full', function () {
      this.addClass('uk-modal-dialog-blank')
    })
    .hasMod('center', () => data.center = true)
    .hasMod('bg', () => data.bgclose = false)
    .hasMod('esc', () => data.keyboard = false)
    .hasMod('stack', () => data.modal = false)
    .hasValue(value => data.target = `'${value}'`);

  if (Object.keys(data).length > 0)
    el.dataset.ukModal = JSON.stringify(data).replace(/"/g, '');
});
