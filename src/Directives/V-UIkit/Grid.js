import Vue from 'vue';

Vue.directive('grid', function (el, bind) {
  let classes = ['uk-grid'];

  for (let mod in bind.modifiers) {
    let split = mod.split(':');

    switch (split[0]) {
      case 's':
        classes.push('uk-grid-small');
        break;
      case 'm':
        classes.push('uk-grid-medium');
        break;
      case 'l':
        classes.push('uk-grid-large');
        break;
      case 'col':
        classes.push('uk-grid-collapse');
        break;
      case 'divider':
        classes.push('uk-grid-divider');
        break;
      case 'match':
        el.setAttribute('data-uk-grid-match', `{target:'${bind.value}'}`);
        break;
      case 'child':
        classes.push(`uk-grid-width-${split[1]}`);
        break;
      case 'child-s':
        classes.push(`uk-grid-width-small-${split[1]}`);
        break;
      case 'child-m':
        classes.push(`uk-grid-width-medium-${split[1]}`);
        break;
      case 'child-l':
        classes.push(`uk-grid-width-large-${split[1]}`);
        break;
      case 'child-x':
        classes.push(`uk-grid-width-xlarge-${split[1]}`);
        break;
    }
  }

  el.classList.add(...classes);
});
