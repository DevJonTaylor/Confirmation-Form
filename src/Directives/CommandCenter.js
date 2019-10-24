import {has, get, forIn, keys} from 'lodash';

export default class CommandCenter {
  constructor(el, bind) {
    this.el = el;
    this.isValue = has(bind, 'expression');
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

  trueValueClass(...classes) {
    return this.isClass((!this.isValue || this.value), ...classes);
  }

  trueValueAttr(...attrs) {
    return this.isAttr((!this.isValue || this.value), ...attrs);
  }

  removeClass(...cls) {
    this.el.classList.remove(...cls);
    return this;
  }

  isClass(statement, ...classes) {
    return this.is(statement, () => this.addClass(...classes), () => this.removeClass(...classes));
  }

  addAttr(...attrs) {
    for(let attr of attrs) {
      if(attr.length === 1) this.el.setAttribute(attr[0]);
      else this.el.setAttribute(attr[0], attr[1]);
    }

    return this;
  }

  removeAttr(...attrs) {
    for(let attr of attrs) {
      this.el.removeAttribute(attr[0]);
    }

    return this;
  }

  isAttr(statement, ...attr) {
    return this.is(statement, () => this.addAttr(...attr), () => this.removeAttr(...attr));
  }

  is(statement, tru, fal) {
    if(statement) tru();
    else fal();

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
    if(this.value) callback.bind(this)(this.value);

    return this;
  }

  hasOnlyValue(callback) {
    if(this.isValue && !this.arg && !this.mod)
      callback.bind(this)(this.value);

    return this;
  }

  hasNothing(callback) {
    if (!this.isValue && !this.arg && !this.mod) callback.bind(this)();

    return this;
  }

  always(callback) {
    callback();

    return this;
  }
}
