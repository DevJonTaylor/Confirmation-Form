import {get, forIn, keys} from 'lodash';

export default class CommandCenter {
  constructor(el, bind) {
    this.el = el;
    this.value = get(bind, 'value', null);
    this.arg = get(bind, 'arg', null);
    let mods = get(bind, 'modifiers', null);
    this.bind = bind;
    if (keys(mods).length > 0) {
      this.mod = {};
      forIn(mods, (alwaysTrue, mod) => {
        let arr = mod.split(':');
        if (arr.length === 2) {
          this.mod[arr[0]] = arr;
        } else {
          this.mod[arr[0]] = [arr[0], null];
        }
      });
    } else {
      this.mod = null;
    }
  }

  addClass(...cls) {
    this.el.classList.add(...cls);
    return this;
  }

  hasArg(callback) {
    if (this.arg) callback.bind(this)(this.arg);

    return this;
  }

  hasMod(name, callback) {
    if (this.mod && this.mod[name]) callback.bind(this)(...this.mod[name]);

    return this;
  }

  hasValue(callback) {
    if (this.value) callback.bind(this)(this.value);

    return this;
  }

  hasNothing(callback) {
    if (!this.mod && !this.arg && !this.value) callback.bind(this)();

    return this;
  }
}
