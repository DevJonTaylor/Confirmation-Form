import Vue from 'vue';
import CommandCenter from "../CommandCenter";

Vue.directive('flex', function (el, bind) {
  let cc = new CommandCenter(el, bind);

  let addClass = cc.addClass('uk-flex');

  cc.hasMod('center', function () {
    this.addClass('uk-flex-center')
  })
    .hasMod('right', function () {
      this.addClass('uk-flex-right')
    })
    .hasMod('middle', function () {
      this.addClass('uk-flex-middle')
    })
    .hasMod('top', function () {
      this.addClass('uk-flex-top')
    })
    .hasMod('between', function () {
      this.addClass('uk-flex-space-between')
    })
    .hasMod('around', function () {
      this.addClass('uk-flex-space-around')
    })
    .hasMod('wor', function () {
      this.addClass('uk-flex-row-reverse')
    })
    .hasMod('col', function () {
      this.addClass('uk-flex-column')
    })
    .hasMod('loc', function () {
      this.addClass('uk-flex-column-reverse')
    })
    .hasMod('wrap', function (mod, arg) {
      this.addClass(`uk-flex-wrap-${arg}`)
    })
    .hasMod('order', function (mod, arg) {
      this.addClass(`uk-flex-order-${arg}`)
    })
    .hasMod('item', function (mod, arg) {
      this.addClass(`uk-flex-item-${arg}`)
    });
});
