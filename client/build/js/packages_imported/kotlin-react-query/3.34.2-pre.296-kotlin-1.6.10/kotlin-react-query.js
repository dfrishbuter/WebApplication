(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-query'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-react-query'.");
    }root['kotlin-react-query'] = factory(typeof this['kotlin-react-query'] === 'undefined' ? {} : this['kotlin-react-query'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  Kotlin.defineModule('kotlin-react-query', _);
  return _;
}));
