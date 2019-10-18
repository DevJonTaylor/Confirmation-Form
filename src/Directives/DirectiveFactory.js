import _ from 'lodash';
import {EventEmitter} from 'events';

export default class DirectiveFactory extends EventEmitter {
  constructor() {
    super();
    this.firstTime = true;
    this.filters = null;
    this.debug = false;
    this.el = null;
    this.prefix = '';
    this.bind = null;
    this.vnode = null;
    this._b = null;
    this._v = null;
  }

  setFilters(filters) {
    if (!_.isObject(filters) && !_.isArray(filters)) return this;

    this.filters = _(filters);

    return this;
  }

  getFilters() {
    return this.filters;
  }

  replaceOrFalse(val) {
    if (!val) return null;

    return this.getFilters().get(val, null);
  }

  addClass(...classNames) {
    this.el.classList.add(...classNames);
  }

  removeClass(...classNames) {
    this.el.classList.removeClass(...classNames)
  }

  handle(el, bind, vnode) {
    this.el = el;
    this.bind = bind;
    this.vnode = vnode;

    let arg = this.getArg();
    let modifiers = this.getModifiers();

    let value = this.getValue();

    if (this.firstTime) {
      this.firstTime = false;

      this.emitBind();

      if (value)
        this.emitValue(value);
    } else {
      let newValue = this.getB('newValue');
      this.emitUpdate();

      if (newValue)
        this.emitValue(newValue, this.getB('oldValue'))
    }

    this.emitArg(arg);
    if (modifiers) {
      for (let index in modifiers) {
        if (modifiers.hasOwnProperty(index)) {
          this.emitMod(...index.split(':'));
        }
      }
    }
  }

  update(el, bind, vnode) {
    this.el = el;
    this.bind = bind;
    this.vnode = vnode;

    this.emitUpdate();

    let value = this.getValue();
    let arg = this.getArg();
    let modifiers = this.getModifiers();

    if (value) this.emitValue(this.replaceOrFalse(value));
    if (arg) this.emitArg(this.replaceOrFalse(arg));
    if (modifiers) {
      for (let index in modifiers) {
        if (modifiers.hasOwnProperty(index)) {
          this.emitMod(...index.split(':'));
        }
      }
    }
  }

  getB(getKey = null, $default = null) {
    if (!this._b) this._b = _(this.bind);

    return !getKey ? this._b : this._b.get(getKey, $default);
  }

  getV(getKey = null, $default = null) {
    if (!this._v) this._v = _(this.bind);

    return !getKey ? this._v : this._v.get(getKey, $default);
  }

  getValue() {
    return this.getB('value');
  }

  getArg() {
    return this.getB('arg');
  }

  getComponent() {
    return this.getV('context');
  }

  getExpression() {
    return this.getB('expression');
  }

  getModifiers() {
    return this.getB('modifiers');
  }

  emitBind() {
    this.emit('bind', ...arguments);
  }

  emitUpdate() {
    this.emit('update', ...arguments);
  }

  emitValue(value, oldValue = false) {
    if (!value) return this;
    let val = this.replaceOrFalse(value);
    if (!oldValue) {
      this.emit('value', !val ? value : val);
    } else {
      let old = this.replaceOrFalse(oldValue);
      this.emit('value', !val ? value : val, !old ? oldValue : old);
    }

    return this;
  }

  emitArg(arg) {
    let a = this.replaceOrFalse(arg);

    if (a) this.emit('arg', a);

    return this;
  }

  emitMod(modifier, buffer) {
    let mod = this.replaceOrFalse(modifier);
    let buf = this.replaceOrFalse(buffer);
    if (mod) this.emit('modifier', mod, buf);
  }

  onBind(callback) {
    this.on('bind', callback.bind(this));
    return this;
  }

  onUpdate(callback) {
    this.on('update', callback.bind(this));
    return this;
  }

  onValue(callback) {
    this.on('value', callback.bind(this));
    return this;
  }

  onArg(callback) {
    this.on('arg', callback.bind(this));
    return this;
  }

  onModifier(callback) {
    this.on('modifier', callback.bind(this));

    return this;
  }
}
