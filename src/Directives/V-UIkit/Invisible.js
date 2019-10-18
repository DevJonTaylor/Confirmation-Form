import Vue from 'vue';

Vue.directive('invisible', function (el, bind) {
  let classToUse = 'uk-invisible';
  let hideOrShow = function (el) {
    if (bind.value) el.classList.add(classToUse);
    else el.classList.remove(classToUse);
  };

  if (!bind.arg)
    hideOrShow(el);

  else
    for (let tagName in bind.modifiers)
      for (let ele of el.querySelectorAll(tagName))
        hideOrShow(ele);
});
