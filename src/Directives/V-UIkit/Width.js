import Vue from 'vue';

Vue.directive('width', function (el, bind) {
  if (Object.keys(bind.modifiers).length === 0 && !bind.arg) {
    el.classList.add('uk-width-1-1');
  } else {
    let classes = [];

    if (bind.arg) classes.push(`uk-width-${bind.arg}`);

    for (let mod in bind.modifiers) {
      let split = mod.split(':');
      let cls = ['uk', 'width'];

      switch (split[0]) {
        case 's':
          cls.push('small');
          break;
        case 'm':
          cls.push('medium');
          break;
        case 'l':
          cls.push('large');
          break;
      }

      if (split.length === 2) {
        cls.push(split[1]);
      } else {
        cls.push('1-1');
      }

      classes.push(cls.join('-'));
    }

    el.classList.add(...classes);
  }
});

Vue.directive('push', function (el, bind) {
  if (Object.keys(bind.modifiers).length === 0 && !bind.arg) {
    el.classList.add('uk-push-1-1');
  } else {
    let classes = [];

    if (bind.arg) classes.push(`uk-push-${bind.arg}`);

    for (let mod in bind.modifiers) {
      let split = mod.split(':');
      let cls = ['uk', 'push'];

      switch (split[0]) {
        case 's':
          cls.push('small');
          break;
        case 'm':
          cls.push('medium');
          break;
        case 'l':
          cls.push('large');
          break;
      }

      if (split.length === 2) {
        cls.push(split[1]);
      } else {
        cls.push('1-1');
      }

      classes.push(cls.join('-'));
    }

    el.classList.add(...classes);
  }
});

Vue.directive('pull', function (el, bind) {
  if (Object.keys(bind.modifiers).length === 0 && !bind.arg) {
    el.classList.add('uk-pull-1-1');
  } else {
    let classes = [];

    if (bind.arg) classes.push(`uk-pull-${bind.arg}`);

    for (let mod in bind.modifiers) {
      let split = mod.split(':');
      let cls = ['uk', 'pull'];

      switch (split[0]) {
        case 's':
          cls.push('small');
          break;
        case 'm':
          cls.push('medium');
          break;
        case 'l':
          cls.push('large');
          break;
      }

      if (split.length === 2) {
        cls.push(split[1]);
      } else {
        cls.push('1-1');
      }

      classes.push(cls.join('-'));
    }

    el.classList.add(...classes);
  }
});
