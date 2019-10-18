import Vue from 'vue';
import {has, keys, forIn} from 'lodash';

Vue.directive('txt', function (el, bind) {
  let isArg = has(bind, 'arg');
  let isModifiers = keys(bind.modifiers).length > 0;

  function addClass(cls) {
    el.classList.add(`uk-text-${cls}`);

    return addClass;
  }

  if (!isArg && !isModifiers)
    return false;

  if (isArg) {
    switch (bind.arg) {
      case 'left':
        addClass('left');
        break;
      case 'center':
        addClass('center');
        break;
      case 'right':
        addClass('right');
        break;
      case 'justify':
        addClass('justify');
        break;
      case 'top':
        addClass('top');
        break;
      case 'middle':
        addClass('middle');
        break;
      case 'bottom':
        addClass('bottom');
        break;
    }
  }

  if (isModifiers) {
    forIn(bind.modifiers, (value, modifier) => {
      let mod = modifier.split(':');
      switch (mod[0]) {
        case 's':
          addClass('small');
          break;
        case 'l':
          addClass('large');
          break;
        case 'bold':
          addClass('bold');
          break;
        case 'muted':
          addClass('muted');
          break;
        case 'primary':
          addClass('primary');
          break;
        case 'success':
          addClass('success');
          break;
        case 'warning':
          addClass('warning');
          break;
        case 'danger':
          addClass('danger');
          break;
        case 'contrast':
          addClass('contrast');
          break;
        case 'cap':
          addClass('capitalize');
          break;
        case 'upper':
          addClass('uppercase');
          break;
        case 'lower':
          addClass('lowercase');
          break;
        case 'truncate':
          addClass('truncate');
          break;
        case 'break':
          addClass('break');
          break;
        case 'nowrap':
          addClass('nowrap');
          break;
      }
    });
  }
});
