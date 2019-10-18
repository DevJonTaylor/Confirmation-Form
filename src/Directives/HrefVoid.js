import Vue from 'vue';

Vue.directive('hv', function (el, bind, vnode) {
  el.setAttribute('href', 'javascript:void(0);');
});
