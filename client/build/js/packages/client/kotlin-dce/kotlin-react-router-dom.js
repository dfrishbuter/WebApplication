(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-extensions'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-extensions'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-router-dom'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-react-router-dom'.");
    }if (typeof this['kotlin-extensions'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-router-dom'. Its dependency 'kotlin-extensions' was not found. Please, check whether 'kotlin-extensions' is loaded prior to 'kotlin-react-router-dom'.");
    }root['kotlin-react-router-dom'] = factory(typeof this['kotlin-react-router-dom'] === 'undefined' ? {} : this['kotlin-react-router-dom'], kotlin, this['kotlin-extensions']);
  }
}(this, function (_, Kotlin, $module$kotlin_extensions) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  $$importsForInline$$['kotlin-extensions'] = $module$kotlin_extensions;
  return _;
}));

//# sourceMappingURL=kotlin-react-router-dom.js.map
