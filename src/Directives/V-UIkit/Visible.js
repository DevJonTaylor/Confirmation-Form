import Vue from 'vue';
import CommandCenter from '../CommandCenter';

/**
 * Just add v-visible="Boolean" if the value is true it will apply uk-visible
 * @property s, m, l, no, hover, hover-inline
 * @example v-visible.m.l
 * <input class="uk-visible-medium uk-visible-large" type="text">
 */
Vue.directive('visible', function (el, bind) {
  let cc = new CommandCenter(el, bind);
  cc
    .hasNothing(function () {
      this.addClass('uk-visible')
    })
    .hasOnlyValue(function(val) {
      this.isClass(val, 'uk-visible');
    })
    .hasMod('s', function () {
      this.isClass((!this.isValue || this.value), 'uk-visible-small');
    })
    .hasMod('m', function () {
      this.isClass((!this.isValue || this.value), 'uk-visible-medium');
    })
    .hasMod('l', function () {
      this.isClass((!this.isValue || this.value), 'uk-visible-large');
    })
    .hasMod('no', function () {
      this.isClass((!this.isValue || this.value), 'uk-invisible');
    })
    .hasMod('hover', function () {
      this.isClass((!this.isValue || this.value), 'uk-visible-hover');
    })
    .hasMod('hover-inline', function () {
      this.isClass((!this.isValue || this.value), 'uk-visible-hover-inline');
    });
});
