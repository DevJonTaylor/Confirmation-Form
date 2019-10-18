import Vue from 'vue';

/**
 * To add this directive is simple.
 * v-icon.x2.start:calendar
 * <i class="fa fa-calendar fa-2x" aria-hidden="true"></i>
 * The start modifier tells the icon to be inserted before everything else in the element.
 */
Vue.directive('icon', {
  bind(el, bind) {
    let placement = 'beforeend';
    let iconName = '';
    if (_.has(bind, 'value')) iconName = bind.value;
    else if (_.has(bind, 'arg')) iconName = bind.arg;
    else return;
    let classList = [
      'fa',
      `fa-${iconName}`
    ];

    if (_.has(bind, 'modifiers')) {

    }
    _.forIn(bind.modifiers, (value, modifier) => {
      switch (modifier) {
        case 'lg':
        case '2x':
        case '3x':
        case '4x':
        case '5x':
          classList.push(`fa-${modifier}`);
          break;
        case 'start':
          placement = 'afterbegin';
          break;
        case 'end':
          placement = 'beforeend';
          break;
        default:
          break;
      }
    });
    let html = `<i class="${classList.join(' ')}" aria-hidden="true"></i>`;
    if (bind.modifiers.space)
      html = placement === 'afterbegin' ? `${html}&nbsp;` : `&nbsp;${html}`;
    el.insertAdjacentHTML(placement, html);
  },
  update(el, bind) {
    if (!_.has(bind, 'value')) return;
    if (bind.value === bind.oldValue) return;
    let oldIcon = `fa-${bind.oldValue}`;
    let newIcon = `fa-${bind.value}`;
    let i = el.querySelector(`i.fa.${oldIcon}`);

    i.classList.remove(oldIcon);
    i.classList.add(newIcon);
  }
});
