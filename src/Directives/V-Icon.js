import Vue from 'vue';
import _ from 'lodash';

function readModifiers(bind, callback) {
  let _bind = _(bind);
  let classList = [
    'fa',
    `fa-${_bind.get('value', _bind.get('arg', 'icon-name-failed'))}`
  ];
  let _mod = _(bind.modifiers);
  if (_mod.isUndefined()) return callback('beforeend', classList, '', '');
  let placement = !_mod.get('start', null) ? 'beforeend' : 'afterbegin';
  _.forOwn(['lg', '2x', '3x', '4x', '5x'], value => {
    if (_mod.has(value)) classList.push(`fa-${value}`);
  });

  if (_mod.has('space') && _mod.has('start')) classList.push('uk-margin-small-right');
  if (_mod.has('space') && !_mod.has('start')) classList.push('uk-margin-small-left');
  return callback(placement, classList);
}

function prepareHTML(bind, callback) {
  readModifiers(bind, (placement, classList) => {
    let html = `<i class="${classList.join(' ')}"></i>`;

    callback(placement, html);
  });
}

function iconExists(el) {
  return !el.querySelector('i.fa') ? false : true;
}

/**
 * To add this directive is simple.
 * v-icon.x2.start:calendar
 * <i class="fa fa-calendar fa-2x" aria-hidden="true"></i>
 * The start modifier tells the icon to be inserted before everything else in the element.
 */
Vue.directive('icon', {
  bind(el, bind) {
    prepareHTML(bind, (placement, html) => {
      el.insertAdjacentHTML(placement, html);
    });
  },
  update(el, bind) {
    if (!iconExists(el))
      return prepareHTML(bind, (placement, html) => el.insertAdjacentHTML(placement, html));

    let _bind = _(bind);
    if (!_bind.has('value')) return;
    let oldIcon = `fa-${bind.oldValue}`;
    let newIcon = `fa-${bind.value}`;
    if (oldIcon === newIcon) return;

    let i = el.querySelector('i.fa');
    i.classList.remove(oldIcon);
    i.classList.add(newIcon);
  }
});
