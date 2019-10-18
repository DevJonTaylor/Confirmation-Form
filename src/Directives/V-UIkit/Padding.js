import Vue from 'vue';

Vue.directive('padding', function (el, bind) {
  if (!bind.arg && _.keys(bind.modifiers).length === 0) {
    el.classList.add('uk-padding');
  } else if (bind.arg) {
    el.classList.add(`uk-padding-${bind.arg}`)
  } else {
    _.forIn(bind.modifiers, (isAlwaysTrue, modifier) => {
      let mod = modifier.split(':');

      switch (mod[0]) {
        case 'no':
          if (mod[1]) {
            el.classList.add(`uk-padding-${mod[1]}-remove`);
          } else {
            el.classList.add('uk-padding-remove');
          }
          break;
        case 's':
          if (mod[1]) {
            el.classList.add(`uk-padding-small-${mod[1]}`);
          } else {
            el.classList.add('uk-padding-small');
          }
          break;
        case 'l':
          if (mod[1]) {
            el.classList.add(`uk-padding-large-${mod[1]}`);
          } else {
            el.classList.add('uk-padding-large');
          }
          break;
      }
    })
  }
});
