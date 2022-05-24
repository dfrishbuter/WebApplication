(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-extensions', 'kotlin-css', 'kotlin-react-dom-legacy', 'inline-style-prefixer', 'react', 'react', 'kotlin-react-core', 'kotlin-react-legacy', 'kotlinx-html-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-extensions'), require('kotlin-css'), require('kotlin-react-dom-legacy'), require('inline-style-prefixer'), require('react'), require('react'), require('kotlin-react-core'), require('kotlin-react-legacy'), require('kotlinx-html-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-styled-next'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-styled-next'.");
    }if (typeof this['kotlin-extensions'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-styled-next'. Its dependency 'kotlin-extensions' was not found. Please, check whether 'kotlin-extensions' is loaded prior to 'kotlin-styled-next'.");
    }if (typeof this['kotlin-css'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-styled-next'. Its dependency 'kotlin-css' was not found. Please, check whether 'kotlin-css' is loaded prior to 'kotlin-styled-next'.");
    }if (typeof this['kotlin-react-dom-legacy'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-styled-next'. Its dependency 'kotlin-react-dom-legacy' was not found. Please, check whether 'kotlin-react-dom-legacy' is loaded prior to 'kotlin-styled-next'.");
    }if (typeof this['inline-style-prefixer'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-styled-next'. Its dependency 'inline-style-prefixer' was not found. Please, check whether 'inline-style-prefixer' is loaded prior to 'kotlin-styled-next'.");
    }if (typeof react === 'undefined') {
      throw new Error("Error loading module 'kotlin-styled-next'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'kotlin-styled-next'.");
    }if (typeof ReactModule === 'undefined') {
      throw new Error("Error loading module 'kotlin-styled-next'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'kotlin-styled-next'.");
    }if (typeof this['kotlin-react-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-styled-next'. Its dependency 'kotlin-react-core' was not found. Please, check whether 'kotlin-react-core' is loaded prior to 'kotlin-styled-next'.");
    }if (typeof this['kotlin-react-legacy'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-styled-next'. Its dependency 'kotlin-react-legacy' was not found. Please, check whether 'kotlin-react-legacy' is loaded prior to 'kotlin-styled-next'.");
    }if (typeof this['kotlinx-html-js'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-styled-next'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'kotlin-styled-next'.");
    }root['kotlin-styled-next'] = factory(typeof this['kotlin-styled-next'] === 'undefined' ? {} : this['kotlin-styled-next'], kotlin, this['kotlin-extensions'], this['kotlin-css'], this['kotlin-react-dom-legacy'], this['inline-style-prefixer'], react, ReactModule, this['kotlin-react-core'], this['kotlin-react-legacy'], this['kotlinx-html-js']);
  }
}(this, function (_, Kotlin, $module$kotlin_extensions, $module$kotlin_css, $module$kotlin_react_dom_legacy, $module$inline_style_prefixer, $module$react, $module$react_0, $module$kotlin_react_core, $module$kotlin_react_legacy, $module$kotlinx_html_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var equals = Kotlin.equals;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var throwCCE = Kotlin.throwCCE;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var Map = Kotlin.kotlin.collections.Map;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var setProp = $module$kotlin_react_dom_legacy.react.dom.setProp_v86kls$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var joinToString_0 = Kotlin.kotlin.collections.joinToString_fmv235$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var RElementBuilder = $module$kotlin_react_legacy.react.RElementBuilder;
  var RElementBuilderImpl = $module$kotlin_react_legacy.react.RElementBuilderImpl;
  var RDOMBuilder = $module$kotlin_react_dom_legacy.react.dom.RDOMBuilder;
  var RDOMBuilderImpl = $module$kotlin_react_dom_legacy.react.dom.RDOMBuilderImpl;
  var toString = Kotlin.toString;
  var createElement = $module$react.createElement;
  var unboxChar = Kotlin.unboxChar;
  var titlecase = Kotlin.kotlin.text.titlecase_myv2d0$;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var Pair_init = Kotlin.kotlin.Pair;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var Throwable = Error;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var reversed = Kotlin.kotlin.ranges.reversed_zf1xzc$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  StyledElementBuilderImpl.prototype = Object.create(RElementBuilderImpl.prototype);
  StyledDOMBuilderImpl.prototype = Object.create(RDOMBuilderImpl.prototype);
  var GlobalCssAccess$SheetType$Dev_instance;
  var GlobalCssAccess$SheetType$CSSOM_instance;
  var GlobalCssAccess_instance = null;
  var GlobalStyles_instance = null;
  function StyledElementBuilder() {
    StyledElementBuilder$Companion_getInstance();
  }
  var StyledElementBuilder$Companion_instance = null;
  function StyledElementBuilderImpl(type, attrs) {
    if (attrs === void 0) {
      attrs = {};
    }RElementBuilderImpl.call(this, attrs);
    this.type_j70h7l$_0 = type;
    this.css_l8ze94$_0 = CssBuilder();
  }
  function StyledDOMBuilder() {
    StyledDOMBuilder$Companion_getInstance();
  }
  var StyledDOMBuilder$Companion_instance = null;
  function StyledDOMBuilderImpl(factory) {
    RDOMBuilderImpl.call(this, factory);
    this.css_sotjku$_0 = CssBuilder();
  }
  var Styled_instance = null;
  var RemoveMode$OnBrowserIdle_instance;
  var RemoveMode$Instantly_instance;
  var styleId;
  var importStyleId;
  var RuleType$REGULAR_instance;
  var RuleType$IMPORT_instance;
  var DEFAULT_MAX_RULES_PER_SHEET;
  var package$styled = _.styled || (_.styled = {});
  $$importsForInline$$['kotlin-css'] = $module$kotlin_css;
  package$styled.StyledElementBuilder = StyledElementBuilder;
  package$styled.StyledElementBuilderImpl = StyledElementBuilderImpl;
  package$styled.StyledDOMBuilder = StyledDOMBuilder;
  package$styled.StyledDOMBuilderImpl = StyledDOMBuilderImpl;
  $$importsForInline$$['kotlin-react-core'] = $module$kotlin_react_core;
  $$importsForInline$$['kotlinx-html-js'] = $module$kotlinx_html_js;
  Object.defineProperty(StyledElementBuilder.prototype, 'key', Object.getOwnPropertyDescriptor(RElementBuilder.prototype, 'key'));
  Object.defineProperty(StyledElementBuilder.prototype, 'ref', Object.getOwnPropertyDescriptor(RElementBuilder.prototype, 'ref'));
  StyledElementBuilder.prototype.attrs_37755u$ = RElementBuilder.prototype.attrs_37755u$;
  StyledElementBuilder.prototype.child_up9nw1$ = RElementBuilder.prototype.child_up9nw1$;
  StyledElementBuilder.prototype.child_1mw94g$$default = RElementBuilder.prototype.child_1mw94g$$default;
  StyledElementBuilder.prototype.child_30b5ua$ = RElementBuilder.prototype.child_30b5ua$;
  StyledElementBuilder.prototype.children_w8hwhj$ = RElementBuilder.prototype.children_w8hwhj$;
  StyledElementBuilder.prototype.invoke_c0v1gl$ = RElementBuilder.prototype.invoke_c0v1gl$;
  StyledElementBuilder.prototype.invoke_r7bapy$ = RElementBuilder.prototype.invoke_r7bapy$;
  StyledElementBuilder.prototype.invoke_qk0v40$ = RElementBuilder.prototype.invoke_qk0v40$;
  StyledElementBuilder.prototype.invoke_snhqu5$ = RElementBuilder.prototype.invoke_snhqu5$;
  StyledElementBuilder.prototype.unaryPlus_pdl1vz$ = RElementBuilder.prototype.unaryPlus_pdl1vz$;
  StyledElementBuilder.prototype.unaryPlus_m8hz4t$ = RElementBuilder.prototype.unaryPlus_m8hz4t$;
  StyledElementBuilder.prototype.child_1mw94g$ = RElementBuilder.prototype.child_1mw94g$;
  Object.defineProperty(StyledElementBuilderImpl.prototype, 'key', Object.getOwnPropertyDescriptor(StyledElementBuilder.prototype, 'key'));
  Object.defineProperty(StyledElementBuilderImpl.prototype, 'ref', Object.getOwnPropertyDescriptor(StyledElementBuilder.prototype, 'ref'));
  StyledElementBuilderImpl.prototype.attrs_37755u$ = StyledElementBuilder.prototype.attrs_37755u$;
  StyledElementBuilderImpl.prototype.child_up9nw1$ = StyledElementBuilder.prototype.child_up9nw1$;
  StyledElementBuilderImpl.prototype.child_1mw94g$$default = StyledElementBuilder.prototype.child_1mw94g$$default;
  StyledElementBuilderImpl.prototype.child_30b5ua$ = StyledElementBuilder.prototype.child_30b5ua$;
  StyledElementBuilderImpl.prototype.children_w8hwhj$ = StyledElementBuilder.prototype.children_w8hwhj$;
  StyledElementBuilderImpl.prototype.invoke_c0v1gl$ = StyledElementBuilder.prototype.invoke_c0v1gl$;
  StyledElementBuilderImpl.prototype.invoke_r7bapy$ = StyledElementBuilder.prototype.invoke_r7bapy$;
  StyledElementBuilderImpl.prototype.invoke_qk0v40$ = StyledElementBuilder.prototype.invoke_qk0v40$;
  StyledElementBuilderImpl.prototype.invoke_snhqu5$ = StyledElementBuilder.prototype.invoke_snhqu5$;
  StyledElementBuilderImpl.prototype.unaryPlus_pdl1vz$ = StyledElementBuilder.prototype.unaryPlus_pdl1vz$;
  StyledElementBuilderImpl.prototype.unaryPlus_m8hz4t$ = StyledElementBuilder.prototype.unaryPlus_m8hz4t$;
  StyledElementBuilderImpl.prototype.child_1mw94g$ = StyledElementBuilder.prototype.child_1mw94g$;
  Object.defineProperty(StyledDOMBuilder.prototype, 'key', Object.getOwnPropertyDescriptor(RDOMBuilder.prototype, 'key'));
  Object.defineProperty(StyledDOMBuilder.prototype, 'ref', Object.getOwnPropertyDescriptor(RDOMBuilder.prototype, 'ref'));
  StyledDOMBuilder.prototype.get_defaultChecked_a2ovwx$ = RDOMBuilder.prototype.get_defaultChecked_a2ovwx$;
  StyledDOMBuilder.prototype.set_defaultChecked_47da7g$ = RDOMBuilder.prototype.set_defaultChecked_47da7g$;
  StyledDOMBuilder.prototype.get_value_sktobr$ = RDOMBuilder.prototype.get_value_sktobr$;
  StyledDOMBuilder.prototype.set_value_g9clh3$ = RDOMBuilder.prototype.set_value_g9clh3$;
  StyledDOMBuilder.prototype.get_values_sktobr$ = RDOMBuilder.prototype.get_values_sktobr$;
  StyledDOMBuilder.prototype.set_values_d8zj82$ = RDOMBuilder.prototype.set_values_d8zj82$;
  StyledDOMBuilder.prototype.child_up9nw1$ = RDOMBuilder.prototype.child_up9nw1$;
  StyledDOMBuilder.prototype.child_1mw94g$$default = RDOMBuilder.prototype.child_1mw94g$$default;
  StyledDOMBuilder.prototype.child_30b5ua$ = RDOMBuilder.prototype.child_30b5ua$;
  StyledDOMBuilder.prototype.children_w8hwhj$ = RDOMBuilder.prototype.children_w8hwhj$;
  StyledDOMBuilder.prototype.get_g0n3bx$ = RDOMBuilder.prototype.get_g0n3bx$;
  StyledDOMBuilder.prototype.invoke_c0v1gl$ = RDOMBuilder.prototype.invoke_c0v1gl$;
  StyledDOMBuilder.prototype.invoke_r7bapy$ = RDOMBuilder.prototype.invoke_r7bapy$;
  StyledDOMBuilder.prototype.invoke_qk0v40$ = RDOMBuilder.prototype.invoke_qk0v40$;
  StyledDOMBuilder.prototype.invoke_snhqu5$ = RDOMBuilder.prototype.invoke_snhqu5$;
  StyledDOMBuilder.prototype.set_hpg2xa$ = RDOMBuilder.prototype.set_hpg2xa$;
  StyledDOMBuilder.prototype.unaryPlus_pdl1vz$ = RDOMBuilder.prototype.unaryPlus_pdl1vz$;
  StyledDOMBuilder.prototype.unaryPlus_m8hz4t$ = RDOMBuilder.prototype.unaryPlus_m8hz4t$;
  StyledDOMBuilder.prototype.child_1mw94g$ = RDOMBuilder.prototype.child_1mw94g$;
  Object.defineProperty(StyledDOMBuilderImpl.prototype, 'key', Object.getOwnPropertyDescriptor(StyledDOMBuilder.prototype, 'key'));
  Object.defineProperty(StyledDOMBuilderImpl.prototype, 'ref', Object.getOwnPropertyDescriptor(StyledDOMBuilder.prototype, 'ref'));
  StyledDOMBuilderImpl.prototype.get_defaultChecked_a2ovwx$ = StyledDOMBuilder.prototype.get_defaultChecked_a2ovwx$;
  StyledDOMBuilderImpl.prototype.set_defaultChecked_47da7g$ = StyledDOMBuilder.prototype.set_defaultChecked_47da7g$;
  StyledDOMBuilderImpl.prototype.get_value_sktobr$ = StyledDOMBuilder.prototype.get_value_sktobr$;
  StyledDOMBuilderImpl.prototype.set_value_g9clh3$ = StyledDOMBuilder.prototype.set_value_g9clh3$;
  StyledDOMBuilderImpl.prototype.get_values_sktobr$ = StyledDOMBuilder.prototype.get_values_sktobr$;
  StyledDOMBuilderImpl.prototype.set_values_d8zj82$ = StyledDOMBuilder.prototype.set_values_d8zj82$;
  StyledDOMBuilderImpl.prototype.child_up9nw1$ = StyledDOMBuilder.prototype.child_up9nw1$;
  StyledDOMBuilderImpl.prototype.child_1mw94g$$default = StyledDOMBuilder.prototype.child_1mw94g$$default;
  StyledDOMBuilderImpl.prototype.child_30b5ua$ = StyledDOMBuilder.prototype.child_30b5ua$;
  StyledDOMBuilderImpl.prototype.children_w8hwhj$ = StyledDOMBuilder.prototype.children_w8hwhj$;
  StyledDOMBuilderImpl.prototype.get_g0n3bx$ = StyledDOMBuilder.prototype.get_g0n3bx$;
  StyledDOMBuilderImpl.prototype.invoke_c0v1gl$ = StyledDOMBuilder.prototype.invoke_c0v1gl$;
  StyledDOMBuilderImpl.prototype.invoke_r7bapy$ = StyledDOMBuilder.prototype.invoke_r7bapy$;
  StyledDOMBuilderImpl.prototype.invoke_qk0v40$ = StyledDOMBuilder.prototype.invoke_qk0v40$;
  StyledDOMBuilderImpl.prototype.invoke_snhqu5$ = StyledDOMBuilder.prototype.invoke_snhqu5$;
  StyledDOMBuilderImpl.prototype.set_hpg2xa$ = StyledDOMBuilder.prototype.set_hpg2xa$;
  StyledDOMBuilderImpl.prototype.unaryPlus_pdl1vz$ = StyledDOMBuilder.prototype.unaryPlus_pdl1vz$;
  StyledDOMBuilderImpl.prototype.unaryPlus_m8hz4t$ = StyledDOMBuilder.prototype.unaryPlus_m8hz4t$;
  StyledDOMBuilderImpl.prototype.child_1mw94g$ = StyledDOMBuilder.prototype.child_1mw94g$;
  styleId = 'ksc-global-style';
  importStyleId = 'ksc-global-style-imports';
  DEFAULT_MAX_RULES_PER_SHEET = 50;
  return _;
}));

//# sourceMappingURL=kotlin-styled-next.js.map
