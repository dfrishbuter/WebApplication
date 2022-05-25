(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'react'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('react'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-core'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-react-core'.");
    }if (typeof react === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-core'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'kotlin-react-core'.");
    }root['kotlin-react-core'] = factory(typeof this['kotlin-react-core'] === 'undefined' ? {} : this['kotlin-react-core'], kotlin, react);
  }
}(this, function (_, Kotlin, $module$react) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var Unit = Kotlin.kotlin.Unit;
  var wrapFunction = Kotlin.wrapFunction;
  var Annotation = Kotlin.kotlin.Annotation;
  var isValidElement = $module$react.isValidElement;
  var rawUseInsertionEffect = $module$react.useInsertionEffect;
  var rawUseLayoutEffect = $module$react.useLayoutEffect;
  function get_react($receiver) {
    return get_js($receiver);
  }
  function createEffectCallback$lambda(closure$effect) {
    return function () {
      var cleanups = [];
      closure$effect(cleanups);
      return buildCleanup(cleanups);
    };
  }
  function createEffectCallback(effect) {
    return createEffectCallback$lambda(effect);
  }
  function buildCleanup$lambda(closure$cleanups) {
    return function () {
      var tmp$, tmp$_0;
      tmp$ = closure$cleanups;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var cleanup = tmp$[tmp$_0];
        cleanup();
      }
      return Unit;
    };
  }
  function buildCleanup(cleanups) {
    if (cleanups.length === 0)
      return undefined;
    return buildCleanup$lambda(cleanups);
  }
  function useInsertionEffect_0(dependencies, effect) {
    var callback = createEffectCallback(effect);
    rawUseInsertionEffect(callback, dependencies);
  }
  function useLayoutEffect_0(dependencies, effect) {
    var callback = createEffectCallback(effect);
    rawUseLayoutEffect(callback, dependencies);
  }
  var package$react = _.react || (_.react = {});
  package$react.get_react_2wnr96$ = get_react;
  package$react.createEffectCallback_1ce2r7$ = createEffectCallback;
  $$importsForInline$$.react = $module$react;
  package$react.useInsertionEffect_c147l4$ = useInsertionEffect_0;
  package$react.useLayoutEffect_c147l4$ = useLayoutEffect_0;
  return _;
}));

//# sourceMappingURL=kotlin-react-core.js.map
