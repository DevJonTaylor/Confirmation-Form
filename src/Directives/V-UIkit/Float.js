import Vue from 'vue';

Vue.directive('float', {
  bind(el, bind) {
    el.classList.add(bind.arg === 'right' ? 'uk-float-right' : 'uk-float-left');
  }
});
