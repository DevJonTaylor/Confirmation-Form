import Vue from 'vue';
import CommandCenter from '../CommandCenter';

/**
 * Just add v-hidden="" if the value is true it will apply uk-hidden
 * @property s, m, l, touch, notouch
 * @example v-hidden.m.l
 * <input class="uk-hidden-medium uk-hidden-large" type="text">
 */
Vue.directive('hidden', function (el, bind) {
  let cc = new CommandCenter(el, bind);

  cc
    .hasNothing(function () {
      this.addClass('uk-hidden')
    })
    .hasOnlyValue(function(val) {
      this.isClass(val, 'uk-hidden')
    })
    .hasMod('s', function () {
      this.isClass((!this.isValue || this.value), 'uk-hidden-small');
    })
    .hasMod('m', function () {
      this.isClass((!this.isValue || this.value), 'uk-hidden-medium');
    })
    .hasMod('l', function () {
      this.isClass((!this.isValue || this.value), 'uk-hidden-large');
    })
    .hasMod('touch', function () {
      this.isClass((!this.isValue || this.value), 'uk-hidden-touch');
    })
    .hasMod('notouch', function () {
      this.isClass((!this.isValue || this.value), 'uk-hidden-notouch');
    });
});
