import Vue from 'vue';
import DirectiveFactory from '../DirectiveFactory';

const dir = new DirectiveFactory();

dir.setFilters({
  primary: 'uk-button-primary',
  secondary: 'uk-button-secondary',
  success: 'uk-button-success',
  danger: 'uk-button-danger',
  s: 'uk-button-small',
  l: 'uk-button-large'
})
  .onBind(function () {
    this.addClass('uk-button');
  }).onUpdate(function () {
  this.addClass('uk-button');
}).onValue(function (newValue, oldValue) {
  if (oldValue) this.removeClass(oldValue);
  this.addClass('uk-button-' + newValue);
}).onArg(function (arg) {
  this.addClass(arg)
}).onModifier(function (mod) {
  this.addClass(mod)
});


Vue.directive('button', {
  bind(el, bind, vnode) {
    dir.handle(el, bind, vnode);
  },
  update(el, bind, vnode) {
    dir.handle(el, bind, vnode);
  }
});
