import Vue from 'vue';
import CommandCenter from '../CommandCenter';

/**
 * @property row, small, large, lg, md, sm, xs, blank
 * @example v-form.large.lg.blank
 * <input class="uk-form-large uk-form-width-large uk-form-blank" type="text">
 */
Vue.directive('form', function (el, bind) {
  let cc = new CommandCenter(el, bind);

  cc
    .hasNothing(function () {
      this.addClass('uk-form')
    })
    .hasMod('row', function () {
      this.addClass('uk-form-row')
    })
    .hasMod('small', function () {
      this.addClass('uk-form-small')
    })
    .hasMod('large', function () {
      this.addClass('uk-form-large')
    })
    .hasMod('lg', function () {
      this.addClass('uk-form-width-large')
    })
    .hasMod('md', function () {
      this.addClass('uk-form-width-medium')
    })
    .hasMod('sm', function () {
      this.addClass('uk-form-width-small')
    })
    .hasMod('xs', function () {
      this.addClass('uk-form-width-mini')
    })
    .hasMod('controls', function () {
      this.addClass('uk-form-controls')
    })
    .hasMod('blank', function () {
      this.addClass('uk-form-blank')
    });
});
