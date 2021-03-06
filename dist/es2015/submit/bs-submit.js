'use strict';

exports.__esModule = true;
exports.BsSubmit = undefined;

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

var _aureliaFramework = require('aurelia-framework');

var _elementUtils = require('../element-utils');

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var BsSubmit = exports.BsSubmit = (_class = function () {
  function BsSubmit() {
    _classCallCheck(this, BsSubmit);

    _initDefineProp(this, 'size', _descriptor, this);

    _initDefineProp(this, 'type', _descriptor2, this);

    _initDefineProp(this, 'block', _descriptor3, this);

    _initDefineProp(this, 'active', _descriptor4, this);

    _initDefineProp(this, 'disabled', _descriptor5, this);

    _initDefineProp(this, 'icon', _descriptor6, this);

    _initDefineProp(this, 'iconPos', _descriptor7, this);
  }

  BsSubmit.prototype.bind = function bind() {
    this.block = !!this.block;
    this.active = !!this.active;
    this.disabled = !!this.disabled;
  };

  BsSubmit.prototype.attached = function attached() {
    if (this.block) {
      this.button.classList.add('btn-block');
    }
    if (this.active) {
      this.button.classList.add('active');
    }
    if (this.disabled) {
      this.button.classList.add('disabled');
    }
    if (this.icon) {
      _elementUtils.ElementUtils.addIcon(this.button, this.icon, this.iconPos);
    }
  };

  return BsSubmit;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'size', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return 'md';
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'type', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return 'default';
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'block', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'active', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'disabled', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'icon', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'iconPos', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return 'left';
  }
})), _class);