import Vue from 'vue';

Vue.directive('top-border', function (el, bind) {
  if (bind.arg)
    el.classList.add(`mb-${bind.arg}-top-border`);
});
