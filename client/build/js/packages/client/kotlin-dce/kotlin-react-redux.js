(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'react-redux', 'kotlin-extensions'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('react-redux'), require('kotlin-extensions'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-redux'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-react-redux'.");
    }if (typeof this['react-redux'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-redux'. Its dependency 'react-redux' was not found. Please, check whether 'react-redux' is loaded prior to 'kotlin-react-redux'.");
    }if (typeof this['kotlin-extensions'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-redux'. Its dependency 'kotlin-extensions' was not found. Please, check whether 'kotlin-extensions' is loaded prior to 'kotlin-react-redux'.");
    }root['kotlin-react-redux'] = factory(typeof this['kotlin-react-redux'] === 'undefined' ? {} : this['kotlin-react-redux'], kotlin, this['react-redux'], this['kotlin-extensions']);
  }
}(this, function (_, Kotlin, $module$react_redux, $module$kotlin_extensions) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
}));

//# sourceMappingURL=kotlin-react-redux.js.map
