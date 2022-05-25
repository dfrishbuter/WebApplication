(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-css'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-css'.");
    }root['kotlin-css'] = factory(typeof this['kotlin-css'] === 'undefined' ? {} : this['kotlin-css'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var joinToString = Kotlin.kotlin.collections.joinToString_cgipc5$;
  var Unit = Kotlin.kotlin.Unit;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var repeat = Kotlin.kotlin.text.repeat_94bcnn$;
  var getCallableRef = Kotlin.getCallableRef;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var equals = Kotlin.equals;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var throwCCE = Kotlin.throwCCE;
  var hashCode = Kotlin.hashCode;
  var Annotation = Kotlin.kotlin.Annotation;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var startsWith = Kotlin.kotlin.text.startsWith_sgbm27$;
  var startsWith_0 = Kotlin.kotlin.text.startsWith_7epoxm$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var coerceIn_0 = Kotlin.kotlin.ranges.coerceIn_e4yvb3$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var endsWith_0 = Kotlin.kotlin.text.endsWith_sgbm27$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var JsMath = Math;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var joinToString_0 = Kotlin.kotlin.collections.joinToString_fmv235$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var MutableMap = Kotlin.kotlin.collections.MutableMap;
  var Any = Object;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var toString_0 = Kotlin.toString;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  var toSet = Kotlin.kotlin.collections.toSet_us0mfu$;
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  LinearDimension.prototype = Object.create(CssValue.prototype);
  LinearDimension.prototype.constructor = LinearDimension;
  QuotedString.prototype = Object.create(CssValue.prototype);
  QuotedString.prototype.constructor = QuotedString;
  Animations.prototype = Object.create(StyleList.prototype);
  Animations.prototype.constructor = Animations;
  BoxShadows.prototype = Object.create(StyleList.prototype);
  BoxShadows.prototype.constructor = BoxShadows;
  Transforms.prototype = Object.create(StyleList.prototype);
  Transforms.prototype.constructor = Transforms;
  Transitions.prototype = Object.create(StyleList.prototype);
  Transitions.prototype.constructor = Transitions;
  function CssBuilder(indent, allowClasses, parent, isHolder, isStyledComponent) {
    if (indent === void 0)
      indent = '';
    if (allowClasses === void 0)
      allowClasses = true;
    if (parent === void 0)
      parent = null;
    if (isHolder === void 0)
      isHolder = false;
    if (isStyledComponent === void 0)
      isStyledComponent = false;
    return new CssBuilderImpl(indent, allowClasses, parent, isHolder, isStyledComponent);
  }
  function CssBuilder_0() {
    CssBuilder$Companion_getInstance();
  }
  CssBuilder_0.prototype.invoke_3ad21g$ = function ($receiver, block) {
    return this.rule_1q2hwx$($receiver, false, void 0, block);
  };
  CssBuilder_0.prototype.invoke_x7exez$ = function ($receiver, css) {
    return this.rule_jindqg$($receiver, false, void 0, css);
  };
  CssBuilder_0.prototype.invoke_3c2457$ = function ($receiver, block) {
    return this.invoke_3ad21g$($receiver.tagName, block);
  };
  CssBuilder_0.prototype.active_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:active', block);
  };
  CssBuilder_0.prototype.checked_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:checked', block);
  };
  CssBuilder_0.prototype.default_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:default', block);
  };
  CssBuilder_0.prototype.defined_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:defined', block);
  };
  CssBuilder_0.prototype.disabled_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:disabled', block);
  };
  CssBuilder_0.prototype.empty_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:empty', block);
  };
  CssBuilder_0.prototype.enabled_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:enabled', block);
  };
  CssBuilder_0.prototype.firstChild_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:first-child', block);
  };
  CssBuilder_0.prototype.firstOfType_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:first-of-type', block);
  };
  CssBuilder_0.prototype.fullscreen_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:fullscreen', block);
  };
  CssBuilder_0.prototype.focus_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:focus', block);
  };
  CssBuilder_0.prototype.focusVisible_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:focus-visible', block);
  };
  CssBuilder_0.prototype.focusWithin_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:focus-within', block);
  };
  CssBuilder_0.prototype.hover_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:hover', block);
  };
  CssBuilder_0.prototype.indeterminate_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:indeterminate', block);
  };
  CssBuilder_0.prototype.inRange_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:in-range', block);
  };
  CssBuilder_0.prototype.invalid_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:invalid', block);
  };
  CssBuilder_0.prototype.lastChild_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:last-child', block);
  };
  CssBuilder_0.prototype.lastOfType_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:last-of-type', block);
  };
  CssBuilder_0.prototype.link_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:link', block);
  };
  function CssBuilder$not$lambda(it) {
    return '&:not(' + it + ')';
  }
  CssBuilder_0.prototype.not_xqeqkq$ = function (selector, block) {
    var selectorString = joinToString(selector, void 0, void 0, void 0, void 0, void 0, CssBuilder$not$lambda);
    return this.invoke_3ad21g$(selectorString, block);
  };
  function CssBuilder$nthChild$lambda(it) {
    return '&:nth-child(' + it + ')';
  }
  CssBuilder_0.prototype.nthChild_xqeqkq$ = function (selector, block) {
    var selectorString = joinToString(selector, void 0, void 0, void 0, void 0, void 0, CssBuilder$nthChild$lambda);
    return this.invoke_3ad21g$(selectorString, block);
  };
  function CssBuilder$nthLastChild$lambda(it) {
    return '&:nth-last-child(' + it + ')';
  }
  CssBuilder_0.prototype.nthLastChild_xqeqkq$ = function (selector, block) {
    var selectorString = joinToString(selector, void 0, void 0, void 0, void 0, void 0, CssBuilder$nthLastChild$lambda);
    return this.invoke_3ad21g$(selectorString, block);
  };
  function CssBuilder$nthLastOfType$lambda(it) {
    return '&:nth-last-of-type(' + it + ')';
  }
  CssBuilder_0.prototype.nthLastOfType_xqeqkq$ = function (selector, block) {
    var selectorString = joinToString(selector, void 0, void 0, void 0, void 0, void 0, CssBuilder$nthLastOfType$lambda);
    return this.invoke_3ad21g$(selectorString, block);
  };
  function CssBuilder$nthOfType$lambda(it) {
    return '&:nth-of-type(' + it + ')';
  }
  CssBuilder_0.prototype.nthOfType_xqeqkq$ = function (selector, block) {
    var selectorString = joinToString(selector, void 0, void 0, void 0, void 0, void 0, CssBuilder$nthOfType$lambda);
    return this.invoke_3ad21g$(selectorString, block);
  };
  CssBuilder_0.prototype.onlyChild_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:only-child', block);
  };
  CssBuilder_0.prototype.onlyOfType_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:only-of-type', block);
  };
  CssBuilder_0.prototype.optional_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:optional', block);
  };
  CssBuilder_0.prototype.outOfRange_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:out-of-range', block);
  };
  CssBuilder_0.prototype.placeholderShown_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:placeholder-shown', block);
  };
  CssBuilder_0.prototype.readOnly_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:read-only', block);
  };
  CssBuilder_0.prototype.readWrite_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:read-write', block);
  };
  CssBuilder_0.prototype.required_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:required', block);
  };
  CssBuilder_0.prototype.valid_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:valid', block);
  };
  CssBuilder_0.prototype.visited_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:visited', block);
  };
  function CssBuilder$children$lambda(it) {
    return '& > ' + it;
  }
  CssBuilder_0.prototype.children_xqeqkq$$default = function (selector, block) {
    var selectorString = joinToString(selector, void 0, void 0, void 0, void 0, void 0, CssBuilder$children$lambda);
    return this.invoke_3ad21g$(selectorString, block);
  };
  CssBuilder_0.prototype.children_xqeqkq$ = function (selector, block, callback$default) {
    if (selector === void 0)
      selector = ['*'];
    return callback$default ? callback$default(selector, block) : this.children_xqeqkq$$default(selector, block);
  };
  function CssBuilder$descendants$lambda(it) {
    return '& ' + it;
  }
  CssBuilder_0.prototype.descendants_xqeqkq$$default = function (selector, block) {
    var selectorString = joinToString(selector, void 0, void 0, void 0, void 0, void 0, CssBuilder$descendants$lambda);
    return this.invoke_3ad21g$(selectorString, block);
  };
  CssBuilder_0.prototype.descendants_xqeqkq$ = function (selector, block, callback$default) {
    if (selector === void 0)
      selector = ['*'];
    return callback$default ? callback$default(selector, block) : this.descendants_xqeqkq$$default(selector, block);
  };
  function CssBuilder$ancestorHover$lambda(closure$selectorRef) {
    return function (it) {
      return it + ':hover ' + closure$selectorRef;
    };
  }
  CssBuilder_0.prototype.ancestorHover_xqeqkq$ = function (selector, block) {
    var selectorRef = this.isStyledComponent ? '&&' : '&';
    var selectorString = joinToString(selector, void 0, void 0, void 0, void 0, void 0, CssBuilder$ancestorHover$lambda(selectorRef));
    return this.invoke_3ad21g$(selectorString, block);
  };
  function CssBuilder$after$lambda(closure$block) {
    return function ($receiver) {
      set_content($receiver, get_quoted(''));
      closure$block($receiver);
      return Unit;
    };
  }
  CssBuilder_0.prototype.after_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&::after', CssBuilder$after$lambda(block));
  };
  function CssBuilder$before$lambda(closure$block) {
    return function ($receiver) {
      set_content($receiver, get_quoted(''));
      closure$block($receiver);
      return Unit;
    };
  }
  CssBuilder_0.prototype.before_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&::before', CssBuilder$before$lambda(block));
  };
  CssBuilder_0.prototype.firstLetter_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&::first-letter', block);
  };
  CssBuilder_0.prototype.firstLine_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&::first-line', block);
  };
  CssBuilder_0.prototype.placeholder_lx8bml$ = function (block) {
    this.invoke_3ad21g$('&::placeholder', block);
    this.invoke_3ad21g$('&::-webkit-input-placeholder', block);
    this.invoke_3ad21g$('&::-moz-placeholder', block);
    this.invoke_3ad21g$('&::-ms-input-placeholder', block);
    this.invoke_3ad21g$('&:-moz-placeholder', block);
  };
  CssBuilder_0.prototype.selection_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&::selection', block);
  };
  function CssBuilder$child$lambda(it) {
    return '> ' + it;
  }
  CssBuilder_0.prototype.child_xqeqkq$ = function (selector, block) {
    var selectorString = joinToString(selector, void 0, void 0, void 0, void 0, void 0, CssBuilder$child$lambda);
    return this.invoke_3ad21g$(selectorString, block);
  };
  function CssBuilder$child$lambda_0(it) {
    return '> ' + it;
  }
  CssBuilder_0.prototype.child_v077kx$ = function (selector, css) {
    var selectorString = joinToString(selector, void 0, void 0, void 0, void 0, void 0, CssBuilder$child$lambda_0);
    return this.invoke_x7exez$(selectorString, css);
  };
  function CssBuilder$sibling$lambda(it) {
    return '~ ' + it;
  }
  CssBuilder_0.prototype.sibling_xqeqkq$ = function (selector, block) {
    var selectorString = joinToString(selector, void 0, void 0, void 0, void 0, void 0, CssBuilder$sibling$lambda);
    return this.invoke_3ad21g$(selectorString, block);
  };
  function CssBuilder$adjacentSibling$lambda(it) {
    return '+ ' + it;
  }
  CssBuilder_0.prototype.adjacentSibling_xqeqkq$ = function (selector, block) {
    var selectorString = joinToString(selector, void 0, void 0, void 0, void 0, void 0, CssBuilder$adjacentSibling$lambda);
    return this.invoke_3ad21g$(selectorString, block);
  };
  CssBuilder_0.prototype.universal_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('*', block);
  };
  CssBuilder_0.prototype.compareTo_er05um$ = function (rule) {
    this.rules.removeAt_za3lpa$(get_lastIndex(this.rules));
    this.child_v077kx$([rule.selector], rule.css);
    return 0;
  };
  CssBuilder_0.prototype.not_v2gpjl$ = function ($receiver) {
    this.rules.removeAt_za3lpa$(get_lastIndex(this.rules));
    var $receiver_0 = $receiver.selector;
    var regex = CssBuilder$Companion_getInstance().NOT_REGEX_0;
    var replacement = '$1:not($2)';
    this.invoke_x7exez$(regex.replace_x2uqeu$($receiver_0, replacement), $receiver.css);
  };
  CssBuilder_0.prototype.unaryPlus_v2gpjl$ = function ($receiver) {
    this.rules.removeAt_za3lpa$(get_lastIndex(this.rules));
    this.invoke_x7exez$('&.' + $receiver.selector, $receiver.css);
  };
  CssBuilder_0.prototype.specific_4clrgz$$default = function (specificity, block) {
    return this.rule_1q2hwx$(repeat('&', specificity), true, void 0, block);
  };
  CssBuilder_0.prototype.specific_4clrgz$ = function (specificity, block, callback$default) {
    if (specificity === void 0)
      specificity = 2;
    return callback$default ? callback$default(specificity, block) : this.specific_4clrgz$$default(specificity, block);
  };
  function CssBuilder$prefix$lambda(closure$selectorRef) {
    return function (it) {
      return it + ' ' + closure$selectorRef;
    };
  }
  CssBuilder_0.prototype.prefix_xqeqkq$ = function (selector, block) {
    var selectorRef = this.isStyledComponent ? '&&' : '&';
    var selectorString = joinToString(selector, void 0, void 0, void 0, void 0, void 0, CssBuilder$prefix$lambda(selectorRef));
    return this.invoke_3ad21g$(selectorString, block);
  };
  CssBuilder_0.prototype.media_v44dnz$ = function (query, block) {
    return this.invoke_3ad21g$('@media ' + query, block);
  };
  CssBuilder_0.prototype.supports_v44dnz$ = function (query, block) {
    return this.invoke_3ad21g$('@supports ' + query, block);
  };
  CssBuilder_0.prototype.container_v44dnz$ = function (query, block) {
    return this.invoke_3ad21g$('@container ' + query, block);
  };
  CssBuilder_0.prototype.fontFace_lx8bml$ = function (block) {
    return this.rule_1q2hwx$('@font-face', false, true, block);
  };
  function CssBuilder$retina$lambda(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  CssBuilder_0.prototype.retina_lx8bml$ = function (block) {
    this.media_v44dnz$('(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)', CssBuilder$retina$lambda(block));
  };
  function CssBuilder$root$lambda(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  CssBuilder_0.prototype.root_lx8bml$ = function (block) {
    this.invoke_3ad21g$(':root', CssBuilder$root$lambda(block));
  };
  CssBuilder_0.prototype.setCustomProperty_lwowle$ = function (name, value) {
    this.put_puj7f4$('--' + name, value.value);
  };
  CssBuilder_0.prototype.min_5utlym$ = function (v1, v2) {
    return new LinearDimension('min(' + v1 + ', ' + v2 + ')');
  };
  CssBuilder_0.prototype.max_5utlym$ = function (v1, v2) {
    return new LinearDimension('max(' + v1 + ', ' + v2 + ')');
  };
  CssBuilder_0.prototype.clamp_me7l17$ = function (min, preferred, max) {
    return new LinearDimension('clamp(' + min + ', ' + preferred + ', ' + max + ')');
  };
  CssBuilder_0.prototype.unaryPlus_pdl1vz$ = function ($receiver) {
    this.addClass_v4ob8x$_0($receiver);
  };
  CssBuilder_0.prototype.unaryPlus_a3w2bl$ = function ($receiver) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      this.addClass_v4ob8x$_0(element);
    }
  };
  CssBuilder_0.prototype.unaryPlus_sdeqdk$ = function ($receiver) {
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.addClass_v4ob8x$_0(element);
    }
  };
  CssBuilder_0.prototype.addClass_v4ob8x$_0 = function (className) {
    var tmp$, tmp$_0;
    if (this.allowClasses) {
      this.classes.add_11rb$(className);
    } else {
      (tmp$_0 = Kotlin.isType(tmp$ = this.parent, CssBuilder_0) ? tmp$ : null) != null ? (tmp$_0.addClass_v4ob8x$_0(className), Unit) : null;
    }
  };
  CssBuilder_0.prototype.append_5cyqpy$ = function (other) {
    this.declarations.putAll_a2k3zr$(other.declarations);
    var $receiver = other.classes;
    var action = getCallableRef('addClass', function ($receiver, p1) {
      return $receiver.addClass_v4ob8x$_0(p1), Unit;
    }.bind(null, this));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      action(element);
    }
    this.styleName.addAll_brywnq$(other.styleName);
    this.rules.addAll_brywnq$(other.rules);
    this.multiRules.addAll_brywnq$(other.multiRules);
  };
  function CssBuilder$Companion() {
    CssBuilder$Companion_instance = this;
    this.NOT_REGEX_v10gwb$_0 = lazy(CssBuilder$Companion$NOT_REGEX$lambda);
  }
  Object.defineProperty(CssBuilder$Companion.prototype, 'NOT_REGEX_0', {configurable: true, get: function () {
    return this.NOT_REGEX_v10gwb$_0.value;
  }});
  function CssBuilder$Companion$NOT_REGEX$lambda() {
    return Regex_init('^(&?)(.*)$');
  }
  CssBuilder$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var CssBuilder$Companion_instance = null;
  function CssBuilder$Companion_getInstance() {
    if (CssBuilder$Companion_instance === null) {
      new CssBuilder$Companion();
    }return CssBuilder$Companion_instance;
  }
  CssBuilder_0.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'CssBuilder', interfaces: [RuleContainer, StyledElement]};
  function CssBuilderImpl(indent, allowClasses, parent, isHolder, isStyledComponent) {
    if (indent === void 0)
      indent = '';
    if (allowClasses === void 0)
      allowClasses = true;
    if (parent === void 0)
      parent = null;
    if (isHolder === void 0)
      isHolder = false;
    if (isStyledComponent === void 0)
      isStyledComponent = false;
    this.indent_5a7fkq$_0 = indent;
    this.allowClasses_b1jqk7$_0 = allowClasses;
    this.parent_v1zecc$_0 = parent;
    this.isHolder_et55gw$_0 = isHolder;
    this.isStyledComponent_ajdlma$_0 = isStyledComponent;
    this.classes_vbm8co$_0 = ArrayList_init();
    this.declarations_ykhz6b$_0 = new CssDeclarations();
    this.styleName_97z50u$_0 = ArrayList_init();
    this.memoizedHashCode_oma9nl$_0 = null;
    this.rules_g2usq1$_0 = ArrayList_init();
    this.multiRules_116og8$_0 = ArrayList_init();
  }
  Object.defineProperty(CssBuilderImpl.prototype, 'indent', {get: function () {
    return this.indent_5a7fkq$_0;
  }});
  Object.defineProperty(CssBuilderImpl.prototype, 'allowClasses', {get: function () {
    return this.allowClasses_b1jqk7$_0;
  }});
  Object.defineProperty(CssBuilderImpl.prototype, 'parent', {get: function () {
    return this.parent_v1zecc$_0;
  }, set: function (parent) {
    this.parent_v1zecc$_0 = parent;
  }});
  Object.defineProperty(CssBuilderImpl.prototype, 'isHolder', {get: function () {
    return this.isHolder_et55gw$_0;
  }});
  Object.defineProperty(CssBuilderImpl.prototype, 'isStyledComponent', {get: function () {
    return this.isStyledComponent_ajdlma$_0;
  }});
  Object.defineProperty(CssBuilderImpl.prototype, 'classes', {configurable: true, get: function () {
    return this.classes_vbm8co$_0;
  }});
  CssBuilderImpl.prototype.unaryPlus_uoyjcc$ = function ($receiver) {
    $receiver(this);
  };
  Object.defineProperty(CssBuilderImpl.prototype, 'declarations', {configurable: true, get: function () {
    return this.declarations_ykhz6b$_0;
  }});
  Object.defineProperty(CssBuilderImpl.prototype, 'styleName', {configurable: true, get: function () {
    return this.styleName_97z50u$_0;
  }});
  CssBuilderImpl.prototype.toString = function () {
    var $receiver = StringBuilder_init();
    $receiver.append_s8jyv4$(this.declarations);
    this.buildRules_s47sd7$($receiver, this.indent);
    return $receiver.toString();
  };
  CssBuilderImpl.prototype.hashCode = function () {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.memoizedHashCode_oma9nl$_0) != null)
      tmp$_0 = tmp$;
    else {
      var tmp$_1;
      var sum = 0;
      tmp$_1 = this.rules.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        sum = sum + element.hashCode() | 0;
      }
      var tmp$_2 = sum;
      var tmp$_3;
      var sum_0 = 0;
      tmp$_3 = this.multiRules.iterator();
      while (tmp$_3.hasNext()) {
        var element_0 = tmp$_3.next();
        sum_0 = sum_0 + element_0.hashCode() | 0;
      }
      var $receiver = tmp$_2 + sum_0 + this.declarations.hashCode() | 0;
      this.memoizedHashCode_oma9nl$_0 = $receiver;
      tmp$_0 = $receiver;
    }
    return tmp$_0;
  };
  CssBuilderImpl.prototype.equals = function (other) {
    var calculateEquals$result;
    calculateEquals$break: do {
      var tmp$, tmp$_0;
      if (this === other) {
        calculateEquals$result = true;
        break calculateEquals$break;
      }if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null)) {
        calculateEquals$result = false;
        break calculateEquals$break;
      }Kotlin.isType(tmp$_0 = other, CssBuilderImpl) ? tmp$_0 : throwCCE();
      var tmp$_1 = hashCode(this) === hashCode(other);
      if (tmp$_1) {
        var tmp$_2;
        tmp$_1 = (equals(this.rules, other.rules) && equals(this.multiRules, other.multiRules) && ((tmp$_2 = this.declarations) != null ? tmp$_2.equals(other.declarations) : null));
      }calculateEquals$result = tmp$_1;
    }
     while (false);
    return calculateEquals$result;
  };
  Object.defineProperty(CssBuilderImpl.prototype, 'rules', {configurable: true, get: function () {
    return this.rules_g2usq1$_0;
  }});
  Object.defineProperty(CssBuilderImpl.prototype, 'multiRules', {configurable: true, get: function () {
    return this.multiRules_116og8$_0;
  }});
  CssBuilderImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'CssBuilderImpl', interfaces: [CssBuilder_0]};
  var CAPITAL_LETTER;
  function hyphenize$lambda(it) {
    return '-' + it.value.toLowerCase();
  }
  function hyphenize($receiver) {
    return CAPITAL_LETTER.replace_20wsma$($receiver, hyphenize$lambda);
  }
  function Rule(selector, passStaticClassesToParent, block, css) {
    if (passStaticClassesToParent === void 0)
      passStaticClassesToParent = false;
    if (block === void 0)
      block = Rule_init$lambda(css);
    this.selector = selector;
    this.passStaticClassesToParent = passStaticClassesToParent;
    this.block = block;
    this.css = css;
    this.memoizedHashCode_0 = null;
  }
  Rule.prototype.hashCode = function () {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.memoizedHashCode_0) != null)
      tmp$_0 = tmp$;
    else {
      var $receiver = hashCode(this.selector) + hashCode(this.css) | 0;
      this.memoizedHashCode_0 = $receiver;
      tmp$_0 = $receiver;
    }
    return tmp$_0;
  };
  Rule.prototype.equals = function (other) {
    var calculateEquals$result;
    calculateEquals$break: do {
      var tmp$, tmp$_0;
      if (this === other) {
        calculateEquals$result = true;
        break calculateEquals$break;
      }if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null)) {
        calculateEquals$result = false;
        break calculateEquals$break;
      }Kotlin.isType(tmp$_0 = other, Rule) ? tmp$_0 : throwCCE();
      var tmp$_1 = hashCode(this) === hashCode(other);
      if (tmp$_1) {
        tmp$_1 = (equals(this.selector, other.selector) && equals(this.css, other.css));
      }calculateEquals$result = tmp$_1;
    }
     while (false);
    return calculateEquals$result;
  };
  function Rule_init$lambda(closure$css) {
    return function ($receiver) {
      $receiver.append_5cyqpy$(closure$css);
      return Unit;
    };
  }
  Rule.$metadata$ = {kind: Kind_CLASS, simpleName: 'Rule', interfaces: []};
  Rule.prototype.component1 = function () {
    return this.selector;
  };
  Rule.prototype.component2 = function () {
    return this.passStaticClassesToParent;
  };
  Rule.prototype.component3 = function () {
    return this.block;
  };
  Rule.prototype.component4 = function () {
    return this.css;
  };
  Rule.prototype.copy_1nv5j4$ = function (selector, passStaticClassesToParent, block, css) {
    return new Rule(selector === void 0 ? this.selector : selector, passStaticClassesToParent === void 0 ? this.passStaticClassesToParent : passStaticClassesToParent, block === void 0 ? this.block : block, css === void 0 ? this.css : css);
  };
  Rule.prototype.toString = function () {
    return 'Rule(selector=' + Kotlin.toString(this.selector) + (', passStaticClassesToParent=' + Kotlin.toString(this.passStaticClassesToParent)) + (', block=' + Kotlin.toString(this.block)) + (', css=' + Kotlin.toString(this.css)) + ')';
  };
  function RuleContainer() {
  }
  RuleContainer.prototype.buildRules_s47sd7$ = function ($receiver, indent) {
    var resolvedRules = this.resolveRules_ry1ed0$(this.rules, this.multiRules);
    var tmp$;
    tmp$ = resolvedRules.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var value = element.selector + ' {';
      $receiver.append_pdl1vj$(value).append_s8itvh$(10);
      $receiver.append_s8jyv4$(element.css);
      $receiver.append_pdl1vj$('}').append_s8itvh$(10);
    }
  };
  RuleContainer.prototype.resolveRules_ry1ed0$ = function (rules, multiRules) {
    var resolvedRules = LinkedHashMap_init();
    var tmp$;
    tmp$ = rules.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var foundRule = resolvedRules.get_11rb$(element.selector);
      if (foundRule == null) {
        var tmp$_0 = element.selector;
        var tmp$_1 = element.selector;
        var tmp$_2 = void 0;
        var tmp$_3 = void 0;
        var $receiver = CssBuilder();
        $receiver.append_5cyqpy$(element.css);
        var value = new Rule(tmp$_1, tmp$_2, tmp$_3, $receiver);
        resolvedRules.put_xwzc9p$(tmp$_0, value);
      } else {
        foundRule.css.append_5cyqpy$(element.css);
      }
    }
    return plus(multiRules, resolvedRules.values);
  };
  RuleContainer.prototype.rule_v44dnz$ = function (selector, block) {
    return this.rule_1q2hwx$(selector, false, void 0, block);
  };
  RuleContainer.prototype.rule_1q2hwx$$default = function (selector, passStaticClassesToParent, repeatable, block) {
    var $receiver = CssBuilder(this.indent + '  ', false, passStaticClassesToParent ? this : null);
    block($receiver);
    var css = $receiver;
    return this.rule_jindqg$(selector, passStaticClassesToParent, repeatable, css);
  };
  RuleContainer.prototype.rule_1q2hwx$ = function (selector, passStaticClassesToParent, repeatable, block, callback$default) {
    if (repeatable === void 0)
      repeatable = false;
    return callback$default ? callback$default(selector, passStaticClassesToParent, repeatable, block) : this.rule_1q2hwx$$default(selector, passStaticClassesToParent, repeatable, block);
  };
  RuleContainer.prototype.rule_jindqg$$default = function (selector, passStaticClassesToParent, repeatable, css) {
    var $receiver = new Rule(selector, passStaticClassesToParent, void 0, css);
    css.parent = passStaticClassesToParent ? this : null;
    (repeatable ? this.multiRules : this.rules).add_11rb$($receiver);
    return $receiver;
  };
  RuleContainer.prototype.rule_jindqg$ = function (selector, passStaticClassesToParent, repeatable, css, callback$default) {
    if (repeatable === void 0)
      repeatable = false;
    return callback$default ? callback$default(selector, passStaticClassesToParent, repeatable, css) : this.rule_jindqg$$default(selector, passStaticClassesToParent, repeatable, css);
  };
  RuleContainer.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'RuleContainer', interfaces: []};
  var ZERO;
  function LinearDimension(value) {
    LinearDimension$Companion_getInstance();
    CssValue.call(this, value);
    this.value_nj4rtk$_0 = value;
  }
  Object.defineProperty(LinearDimension.prototype, 'value', {get: function () {
    return this.value_nj4rtk$_0;
  }});
  function LinearDimension$Companion() {
    LinearDimension$Companion_instance = this;
    this.none = new LinearDimension('none');
    this.auto = new LinearDimension('auto');
    this.initial = new LinearDimension('initial');
    this.inherit = new LinearDimension('inherit');
    this.available = new LinearDimension('available');
    this.fillAvailable = new LinearDimension('fill-available');
    this.borderBox = new LinearDimension('border-box');
    this.contentBox = new LinearDimension('content-box');
    this.maxContent = new LinearDimension('max-content');
    this.minContent = new LinearDimension('min-content');
    this.fitContent = new LinearDimension('fit-content');
  }
  LinearDimension$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var LinearDimension$Companion_instance = null;
  function LinearDimension$Companion_getInstance() {
    if (LinearDimension$Companion_instance === null) {
      new LinearDimension$Companion();
    }return LinearDimension$Companion_instance;
  }
  Object.defineProperty(LinearDimension.prototype, 'valueCalcSafe_0', {configurable: true, get: function () {
    return equals(this.value, ZERO) ? '0px' : this.value;
  }});
  LinearDimension.prototype.unaryMinus = function () {
    var tmp$;
    if (startsWith(this.value, 45)) {
      tmp$ = this.value.substring(1);
    } else if (startsWith_0(this.value, 'calc'))
      tmp$ = 'calc(0px - ' + this.value + ')';
    else if (equals(this.value, ZERO))
      tmp$ = this.value;
    else
      tmp$ = '-' + this.value;
    return new LinearDimension(tmp$);
  };
  LinearDimension.prototype.plus_tco10h$ = function (other) {
    return new LinearDimension('calc(' + this.valueCalcSafe_0 + ' + ' + other.valueCalcSafe_0 + ')');
  };
  LinearDimension.prototype.minus_tco10h$ = function (other) {
    return new LinearDimension('calc(' + this.valueCalcSafe_0 + ' - ' + other.valueCalcSafe_0 + ')');
  };
  LinearDimension.prototype.times_3p81yu$ = function (times) {
    return new LinearDimension('calc(' + this.valueCalcSafe_0 + ' * ' + times.toString() + ')');
  };
  LinearDimension.prototype.div_3p81yu$ = function (times) {
    return new LinearDimension('calc(' + this.valueCalcSafe_0 + ' / ' + times.toString() + ')');
  };
  LinearDimension.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    Kotlin.isType(tmp$_0 = other, LinearDimension) ? tmp$_0 : throwCCE();
    return equals(this.value, other.value);
  };
  LinearDimension.prototype.hashCode = function () {
    return hashCode(this.value);
  };
  LinearDimension.$metadata$ = {kind: Kind_CLASS, simpleName: 'LinearDimension', interfaces: [CssValue]};
  function CssValue(value) {
    this.value_tqttmh$_0 = value;
  }
  Object.defineProperty(CssValue.prototype, 'value', {get: function () {
    return this.value_tqttmh$_0;
  }});
  CssValue.prototype.toString = function () {
    return this.value;
  };
  CssValue.$metadata$ = {kind: Kind_CLASS, simpleName: 'CssValue', interfaces: []};
  var Align$initial_instance;
  var Align$inherit_instance;
  var Align$unset_instance;
  var Align$auto_instance;
  var Align$stretch_instance;
  var Align$center_instance;
  var Align$start_instance;
  var Align$end_instance;
  var Align$selfStart_instance;
  var Align$selfEnd_instance;
  var Align$flexStart_instance;
  var Align$flexEnd_instance;
  var Align$baseline_instance;
  var Appearance$none_instance;
  var Appearance$auto_instance;
  var Appearance$menulistButton_instance;
  var Appearance$textfield_instance;
  var Appearance$button_instance;
  var Appearance$searchfield_instance;
  var Appearance$textarea_instance;
  var Appearance$pushButton_instance;
  var Appearance$sliderHorizontal_instance;
  var Appearance$checkbox_instance;
  var Appearance$radio_instance;
  var Appearance$squareButton_instance;
  var Appearance$menulist_instance;
  var Appearance$listbox_instance;
  var Appearance$meter_instance;
  var Appearance$progressBar_instance;
  var Isolation$initial_instance;
  var Isolation$inherit_instance;
  var Isolation$revert_instance;
  var Isolation$unset_instance;
  var Isolation$auto_instance;
  var Isolation$isolate_instance;
  var JustifyContent$initial_instance;
  var JustifyContent$inherit_instance;
  var JustifyContent$unset_instance;
  var JustifyContent$center_instance;
  var JustifyContent$start_instance;
  var JustifyContent$end_instance;
  var JustifyContent$flexStart_instance;
  var JustifyContent$flexEnd_instance;
  var JustifyContent$left_instance;
  var JustifyContent$right_instance;
  var JustifyContent$baseline_instance;
  var JustifyContent$firstBaseline_instance;
  var JustifyContent$lastBaseline_instance;
  var JustifyContent$spaceBetween_instance;
  var JustifyContent$spaceAround_instance;
  var JustifyContent$spaceEvenly_instance;
  var JustifyContent$stretch_instance;
  var JustifyContent$safeCenter_instance;
  var JustifyContent$unsafeCenter_instance;
  var JustifyItems$initial_instance;
  var JustifyItems$inherit_instance;
  var JustifyItems$unset_instance;
  var JustifyItems$auto_instance;
  var JustifyItems$normal_instance;
  var JustifyItems$stretch_instance;
  var JustifyItems$center_instance;
  var JustifyItems$start_instance;
  var JustifyItems$end_instance;
  var JustifyItems$flexStart_instance;
  var JustifyItems$flexEnd_instance;
  var JustifyItems$selfStart_instance;
  var JustifyItems$selfEnd_instance;
  var JustifyItems$left_instance;
  var JustifyItems$right_instance;
  var JustifyItems$baseline_instance;
  var BackgroundRepeat$initial_instance;
  var BackgroundRepeat$inherit_instance;
  var BackgroundRepeat$unset_instance;
  var BackgroundRepeat$repeatX_instance;
  var BackgroundRepeat$repeatY_instance;
  var BackgroundRepeat$repeat_instance;
  var BackgroundRepeat$noRepeat_instance;
  var BackgroundAttachment$initial_instance;
  var BackgroundAttachment$inherit_instance;
  var BackgroundAttachment$unset_instance;
  var BackgroundAttachment$scroll_instance;
  var BackgroundAttachment$fixed_instance;
  var BackgroundAttachment$local_instance;
  var BackgroundClip$initial_instance;
  var BackgroundClip$inherit_instance;
  var BackgroundClip$unset_instance;
  var BackgroundClip$borderBox_instance;
  var BackgroundClip$paddingBox_instance;
  var BackgroundClip$contentBox_instance;
  var BackgroundClip$text_instance;
  var BackgroundOrigin$initial_instance;
  var BackgroundOrigin$inherit_instance;
  var BackgroundOrigin$unset_instance;
  var BackgroundOrigin$borderBox_instance;
  var BackgroundOrigin$paddingBox_instance;
  var BackgroundOrigin$contentBox_instance;
  var BorderCollapse$initial_instance;
  var BorderCollapse$inherit_instance;
  var BorderCollapse$unset_instance;
  var BorderCollapse$separate_instance;
  var BorderCollapse$collapse_instance;
  var BorderStyle$initial_instance;
  var BorderStyle$inherit_instance;
  var BorderStyle$unset_instance;
  var BorderStyle$none_instance;
  var BorderStyle$dotted_instance;
  var BorderStyle$dashed_instance;
  var BorderStyle$solid_instance;
  var BoxSizing$initial_instance;
  var BoxSizing$inherit_instance;
  var BoxSizing$unset_instance;
  var BoxSizing$contentBox_instance;
  var BoxSizing$borderBox_instance;
  var Clear$initial_instance;
  var Clear$inherit_instance;
  var Clear$unset_instance;
  var Clear$none_instance;
  var Clear$left_instance;
  var Clear$right_instance;
  var Clear$both_instance;
  var Color$Companion_instance = null;
  var Contain$initial_instance;
  var Contain$inherit_instance;
  var Contain$unset_instance;
  var Contain$none_instance;
  var Contain$strict_instance;
  var Contain$content_instance;
  var Contain$size_instance;
  var Contain$layout_instance;
  var Contain$style_instance;
  var Contain$paint_instance;
  var Cursor$initial_instance;
  var Cursor$inherit_instance;
  var Cursor$unset_instance;
  var Cursor$auto_instance;
  var Cursor$default_instance;
  var Cursor$none_instance;
  var Cursor$contextMenu_instance;
  var Cursor$help_instance;
  var Cursor$pointer_instance;
  var Cursor$progress_instance;
  var Cursor$wait_instance;
  var Cursor$cell_instance;
  var Cursor$crosshair_instance;
  var Cursor$text_instance;
  var Cursor$verticalText_instance;
  var Cursor$alias_instance;
  var Cursor$copy_instance;
  var Cursor$move_instance;
  var Cursor$noDrop_instance;
  var Cursor$notAllowed_instance;
  var Cursor$grab_instance;
  var Cursor$grabbing_instance;
  var Cursor$colResize_instance;
  var Cursor$rowResize_instance;
  var Cursor$allScroll_instance;
  var Cursor$eResize_instance;
  var Cursor$nResize_instance;
  var Cursor$neResize_instance;
  var Cursor$nwResize_instance;
  var Cursor$sResize_instance;
  var Cursor$seResize_instance;
  var Cursor$swResize_instance;
  var Cursor$wResize_instance;
  var Cursor$ewResize_instance;
  var Cursor$nsResize_instance;
  var Cursor$neswResize_instance;
  var Cursor$nwseResize_instance;
  var Cursor$zoomIn_instance;
  var Cursor$zoomOut_instance;
  function QuotedString(value) {
    CssValue.call(this, value);
    this.value_eybwfw$_0 = value;
  }
  Object.defineProperty(QuotedString.prototype, 'value', {get: function () {
    return this.value_eybwfw$_0;
  }});
  QuotedString.prototype.toString = function () {
    return "'" + this.value + "'";
  };
  QuotedString.$metadata$ = {kind: Kind_CLASS, simpleName: 'QuotedString', interfaces: [CssValue]};
  function get_quoted($receiver) {
    return new QuotedString($receiver);
  }
  var Direction$initial_instance;
  var Direction$inherit_instance;
  var Direction$unset_instance;
  var Direction$ltr_instance;
  var Direction$rtl_instance;
  var Display$initial_instance;
  var Display$inherit_instance;
  var Display$unset_instance;
  var Display$block_instance;
  var Display$inline_instance;
  var Display$runIn_instance;
  var Display$flow_instance;
  var Display$flowRoot_instance;
  var Display$table_instance;
  var Display$flex_instance;
  var Display$grid_instance;
  var Display$subgrid_instance;
  var Display$listItem_instance;
  var Display$tableRowGroup_instance;
  var Display$tableHeaderGroup_instance;
  var Display$tableFooterGroup_instance;
  var Display$tableRow_instance;
  var Display$tableCell_instance;
  var Display$tableColumnGroup_instance;
  var Display$tableColumn_instance;
  var Display$tableCaption_instance;
  var Display$contents_instance;
  var Display$none_instance;
  var Display$inlineBlock_instance;
  var Display$inlineListItem_instance;
  var Display$inlineTable_instance;
  var Display$inlineFlex_instance;
  var Display$inlineGrid_instance;
  var FlexBasis$Companion_instance = null;
  var FlexWrap$initial_instance;
  var FlexWrap$inherit_instance;
  var FlexWrap$unset_instance;
  var FlexWrap$nowrap_instance;
  var FlexWrap$wrap_instance;
  var FlexWrap$wrapReverse_instance;
  var Float$initial_instance;
  var Float$inherit_instance;
  var Float$unset_instance;
  var Float$left_instance;
  var Float$right_instance;
  var Float$none_instance;
  var FontWeight$Companion_instance = null;
  var FontStyle$Companion_instance = null;
  var FlexDirection$initial_instance;
  var FlexDirection$inherit_instance;
  var FlexDirection$unset_instance;
  var FlexDirection$column_instance;
  var FlexDirection$columnReverse_instance;
  var FlexDirection$row_instance;
  var FlexDirection$rowReverse_instance;
  var GridAutoColumns$Companion_instance = null;
  var GridAutoFlow$Companion_instance = null;
  var GridAutoRows$Companion_instance = null;
  var GridColumn$Companion_instance = null;
  var GridColumnEnd$Companion_instance = null;
  var GridColumnStart$Companion_instance = null;
  var GridRow$Companion_instance = null;
  var GridRowEnd$Companion_instance = null;
  var GridRowStart$Companion_instance = null;
  var GridTemplate$Companion_instance = null;
  var GridTemplateAreas$Companion_instance = null;
  var GridTemplateColumns$Companion_instance = null;
  var GridTemplateRows$Companion_instance = null;
  var Grow$NONE_instance;
  var Grow$GROW_instance;
  var Grow$SHRINK_instance;
  var Grow$GROW_SHRINK_instance;
  var Hyphens$initial_instance;
  var Hyphens$inherit_instance;
  var Hyphens$unset_instance;
  var Hyphens$none_instance;
  var Hyphens$manual_instance;
  var Hyphens$auto_instance;
  var ListStyleType$initial_instance;
  var ListStyleType$inherit_instance;
  var ListStyleType$unset_instance;
  var ListStyleType$none_instance;
  var ListStyleType$disc_instance;
  var ListStyleType$circle_instance;
  var ListStyleType$square_instance;
  var ListStyleType$decimal_instance;
  var ObjectFit$initial_instance;
  var ObjectFit$inherit_instance;
  var ObjectFit$unset_instance;
  var ObjectFit$contain_instance;
  var ObjectFit$cover_instance;
  var ObjectFit$fill_instance;
  var ObjectFit$none_instance;
  var ObjectFit$scaleDown_instance;
  var Outline$initial_instance;
  var Outline$inherit_instance;
  var Outline$unset_instance;
  var Outline$none_instance;
  var Overflow$initial_instance;
  var Overflow$inherit_instance;
  var Overflow$unset_instance;
  var Overflow$visible_instance;
  var Overflow$hidden_instance;
  var Overflow$scroll_instance;
  var Overflow$auto_instance;
  var OverflowWrap$initial_instance;
  var OverflowWrap$inherit_instance;
  var OverflowWrap$unset_instance;
  var OverflowWrap$normal_instance;
  var OverflowWrap$anywhere_instance;
  var OverflowWrap$breakWord_instance;
  var OverscrollBehavior$initial_instance;
  var OverscrollBehavior$inherit_instance;
  var OverscrollBehavior$unset_instance;
  var OverscrollBehavior$auto_instance;
  var OverscrollBehavior$contain_instance;
  var OverscrollBehavior$none_instance;
  var PointerEvents$initial_instance;
  var PointerEvents$inherit_instance;
  var PointerEvents$unset_instance;
  var PointerEvents$auto_instance;
  var PointerEvents$none_instance;
  var Position$initial_instance;
  var Position$inherit_instance;
  var Position$unset_instance;
  var Position$static_instance;
  var Position$relative_instance;
  var Position$absolute_instance;
  var Position$fixed_instance;
  var Position$sticky_instance;
  var ScrollBehavior$initial_instance;
  var ScrollBehavior$inherit_instance;
  var ScrollBehavior$unset_instance;
  var ScrollBehavior$auto_instance;
  var ScrollBehavior$smooth_instance;
  var TextAlign$initial_instance;
  var TextAlign$inherit_instance;
  var TextAlign$unset_instance;
  var TextAlign$left_instance;
  var TextAlign$right_instance;
  var TextAlign$center_instance;
  var TextAlign$justify_instance;
  var TextAlign$justifyAll_instance;
  var TextAlign$start_instance;
  var TextAlign$end_instance;
  var TextAlign$matchParent_instance;
  var TableLayout$initial_instance;
  var TableLayout$inherit_instance;
  var TableLayout$unset_instance;
  var TableLayout$auto_instance;
  var TableLayout$fixed_instance;
  var TextOverflow$initial_instance;
  var TextOverflow$inherit_instance;
  var TextOverflow$unset_instance;
  var TextOverflow$clip_instance;
  var TextOverflow$ellipsis_instance;
  var TextTransform$initial_instance;
  var TextTransform$inherit_instance;
  var TextTransform$unset_instance;
  var TextTransform$capitalize_instance;
  var TextTransform$uppercase_instance;
  var TextTransform$lowercase_instance;
  var TextTransform$none_instance;
  var TextTransform$fullWidth_instance;
  var UserSelect$initial_instance;
  var UserSelect$inherit_instance;
  var UserSelect$unset_instance;
  var UserSelect$none_instance;
  var UserSelect$auto_instance;
  var UserSelect$text_instance;
  var UserSelect$contain_instance;
  var UserSelect$all_instance;
  var VerticalAlign$Companion_instance = null;
  var Visibility$initial_instance;
  var Visibility$inherit_instance;
  var Visibility$unset_instance;
  var Visibility$visible_instance;
  var Visibility$hidden_instance;
  var Visibility$collapse_instance;
  var WhiteSpace$initial_instance;
  var WhiteSpace$inherit_instance;
  var WhiteSpace$unset_instance;
  var WhiteSpace$normal_instance;
  var WhiteSpace$nowrap_instance;
  var WhiteSpace$pre_instance;
  var WhiteSpace$preWrap_instance;
  var WhiteSpace$preLine_instance;
  var WordBreak$initial_instance;
  var WordBreak$inherit_instance;
  var WordBreak$unset_instance;
  var WordBreak$normal_instance;
  var WordBreak$breakAll_instance;
  var WordBreak$breakWord_instance;
  var WordBreak$keepAll_instance;
  var WordWrap$initial_instance;
  var WordWrap$inherit_instance;
  var WordWrap$unset_instance;
  var WordWrap$normal_instance;
  var WordWrap$breakWord_instance;
  var Resize$none_instance;
  var Resize$both_instance;
  var Resize$horizontal_instance;
  var Resize$vertical_instance;
  var Resize$block_instance;
  var Resize$inline_instance;
  var Resize$inherit_instance;
  var Resize$initial_instance;
  var Resize$unset_instance;
  var Image$Companion_instance = null;
  var RelativePosition$Companion_instance = null;
  function StyleList(delimiter) {
    this.delimiter_o62vis$_0 = delimiter;
    this.list_behuth$_0 = ArrayList_init();
  }
  StyleList.prototype.toString = function () {
    if (this.list_behuth$_0.isEmpty())
      return 'none';
    else
      return joinToString_0(this.list_behuth$_0, this.delimiter_o62vis$_0);
  };
  StyleList.prototype.clear = function () {
    this.list_behuth$_0.clear();
  };
  StyleList.prototype.plusAssign_11rb$ = function (item) {
    this.list_behuth$_0.add_11rb$(item);
  };
  StyleList.$metadata$ = {kind: Kind_CLASS, simpleName: 'StyleList', interfaces: []};
  function CssDeclarations() {
    this.$delegate_a29c06$_0 = LinkedHashMap_init();
    this.stringDecl_9g0u2z$_0 = null;
  }
  Object.defineProperty(CssDeclarations.prototype, 'stringDecl_0', {configurable: true, get: function () {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.stringDecl_9g0u2z$_0) != null)
      tmp$_0 = tmp$;
    else {
      var $receiver = StringBuilder_init();
      var tmp$_1;
      tmp$_1 = this.entries.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        var k = element.key;
        var v = element.value;
        $receiver.append_pdl1vj$(hyphenize(k) + ': ' + v.toString() + ';' + '\n');
      }
      var $receiver_0 = $receiver.toString();
      this.stringDecl_9g0u2z$_0 = $receiver_0;
      tmp$_0 = $receiver_0;
    }
    return tmp$_0;
  }, set: function (stringDecl) {
    this.stringDecl_9g0u2z$_0 = stringDecl;
  }});
  CssDeclarations.prototype.equals = function (other) {
    var calculateEquals$result;
    calculateEquals$break: do {
      var tmp$, tmp$_0;
      if (this === other) {
        calculateEquals$result = true;
        break calculateEquals$break;
      }if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null)) {
        calculateEquals$result = false;
        break calculateEquals$break;
      }Kotlin.isType(tmp$_0 = other, CssDeclarations) ? tmp$_0 : throwCCE();
      var tmp$_1 = hashCode(this) === hashCode(other);
      if (tmp$_1) {
        tmp$_1 = equals(this.stringDecl_0, other.stringDecl_0);
      }calculateEquals$result = tmp$_1;
    }
     while (false);
    return calculateEquals$result;
  };
  CssDeclarations.prototype.hashCode = function () {
    var $receiver = this.stringDecl_0;
    var tmp$;
    return (tmp$ = $receiver != null ? hashCode($receiver) : null) != null ? tmp$ : 0;
  };
  CssDeclarations.prototype.toString = function () {
    return ensureNotNull(this.stringDecl_0);
  };
  CssDeclarations.prototype.set_bm4g0d$ = function (name, value) {
    this.put_xwzc9p$(name, value);
    this.stringDecl_0 = null;
  };
  Object.defineProperty(CssDeclarations.prototype, 'entries', {configurable: true, get: function () {
    return this.$delegate_a29c06$_0.entries;
  }});
  Object.defineProperty(CssDeclarations.prototype, 'keys', {configurable: true, get: function () {
    return this.$delegate_a29c06$_0.keys;
  }});
  Object.defineProperty(CssDeclarations.prototype, 'size', {configurable: true, get: function () {
    return this.$delegate_a29c06$_0.size;
  }});
  Object.defineProperty(CssDeclarations.prototype, 'values', {configurable: true, get: function () {
    return this.$delegate_a29c06$_0.values;
  }});
  CssDeclarations.prototype.clear = function () {
    return this.$delegate_a29c06$_0.clear();
  };
  CssDeclarations.prototype.containsKey_11rb$ = function (key) {
    return this.$delegate_a29c06$_0.containsKey_11rb$(key);
  };
  CssDeclarations.prototype.containsValue_11rc$ = function (value) {
    return this.$delegate_a29c06$_0.containsValue_11rc$(value);
  };
  CssDeclarations.prototype.get_11rb$ = function (key) {
    return this.$delegate_a29c06$_0.get_11rb$(key);
  };
  CssDeclarations.prototype.isEmpty = function () {
    return this.$delegate_a29c06$_0.isEmpty();
  };
  CssDeclarations.prototype.put_xwzc9p$ = function (key, value) {
    return this.$delegate_a29c06$_0.put_xwzc9p$(key, value);
  };
  CssDeclarations.prototype.putAll_a2k3zr$ = function (from) {
    return this.$delegate_a29c06$_0.putAll_a2k3zr$(from);
  };
  CssDeclarations.prototype.remove_11rb$ = function (key) {
    return this.$delegate_a29c06$_0.remove_11rb$(key);
  };
  CssDeclarations.$metadata$ = {kind: Kind_CLASS, simpleName: 'CssDeclarations', interfaces: [MutableMap]};
  function StyledElement() {
  }
  StyledElement.prototype.put_puj7f4$ = function (key, value) {
    this.declarations.set_bm4g0d$(key, value);
  };
  StyledElement.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'StyledElement', interfaces: []};
  function StyledElementImpl() {
    this.declarations_xtyr2e$_0 = new CssDeclarations();
  }
  function CssProperty(default_0) {
    if (default_0 === void 0)
      default_0 = null;
    this.default_0 = default_0;
  }
  CssProperty.prototype.getValue_jto6o9$ = function (thisRef, property) {
    var tmp$, tmp$_0;
    if ((tmp$ = this.default_0) != null) {
      var tmp$_1;
      if (!thisRef.declarations.containsKey_11rb$(property.callableName)) {
        thisRef.declarations.set_bm4g0d$(property.callableName, Kotlin.isType(tmp$_1 = tmp$(), Any) ? tmp$_1 : throwCCE());
      }}return (tmp$_0 = thisRef.declarations.get_11rb$(property.callableName)) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
  };
  CssProperty.prototype.setValue_6qj5c4$ = function (thisRef, property, value) {
    var tmp$;
    thisRef.declarations.set_bm4g0d$(property.callableName, Kotlin.isType(tmp$ = value, Any) ? tmp$ : throwCCE());
  };
  CssProperty.$metadata$ = {kind: Kind_CLASS, simpleName: 'CssProperty', interfaces: []};
  var alignContent;
  var alignContent_metadata = new PropertyMetadata('alignContent');
  var alignItems;
  var alignItems_metadata = new PropertyMetadata('alignItems');
  var alignSelf;
  var alignSelf_metadata = new PropertyMetadata('alignSelf');
  function animation$lambda() {
    return new Animations();
  }
  var animation;
  var animation_metadata = new PropertyMetadata('animation');
  var animationDelay;
  var animationDelay_metadata = new PropertyMetadata('animationDelay');
  var animationDirection;
  var animationDirection_metadata = new PropertyMetadata('animationDirection');
  var animationDuration;
  var animationDuration_metadata = new PropertyMetadata('animationDuration');
  var animationFillMode;
  var animationFillMode_metadata = new PropertyMetadata('animationFillMode');
  var animationIterationCount;
  var animationIterationCount_metadata = new PropertyMetadata('animationIterationCount');
  var animationName;
  var animationName_metadata = new PropertyMetadata('animationName');
  var animationPlayState;
  var animationPlayState_metadata = new PropertyMetadata('animationPlayState');
  var animationTimingFunction;
  var animationTimingFunction_metadata = new PropertyMetadata('animationTimingFunction');
  var appearance;
  var appearance_metadata = new PropertyMetadata('appearance');
  var backfaceVisibility;
  var backfaceVisibility_metadata = new PropertyMetadata('backfaceVisibility');
  var background;
  var background_metadata = new PropertyMetadata('background');
  var backgroundAttachment;
  var backgroundAttachment_metadata = new PropertyMetadata('backgroundAttachment');
  var backgroundClip;
  var backgroundClip_metadata = new PropertyMetadata('backgroundClip');
  var backgroundColor;
  var backgroundColor_metadata = new PropertyMetadata('backgroundColor');
  var backgroundImage;
  var backgroundImage_metadata = new PropertyMetadata('backgroundImage');
  var backgroundOrigin;
  var backgroundOrigin_metadata = new PropertyMetadata('backgroundOrigin');
  var backgroundPosition;
  var backgroundPosition_metadata = new PropertyMetadata('backgroundPosition');
  var backgroundRepeat;
  var backgroundRepeat_metadata = new PropertyMetadata('backgroundRepeat');
  var backgroundSize;
  var backgroundSize_metadata = new PropertyMetadata('backgroundSize');
  var border;
  var border_metadata = new PropertyMetadata('border');
  function set_border($receiver, border_0) {
    border.setValue_6qj5c4$($receiver, border_metadata, border_0);
  }
  var borderTop;
  var borderTop_metadata = new PropertyMetadata('borderTop');
  var borderRight;
  var borderRight_metadata = new PropertyMetadata('borderRight');
  var borderBottom;
  var borderBottom_metadata = new PropertyMetadata('borderBottom');
  var borderLeft;
  var borderLeft_metadata = new PropertyMetadata('borderLeft');
  var borderCollapse;
  var borderCollapse_metadata = new PropertyMetadata('borderCollapse');
  var borderSpacing;
  var borderSpacing_metadata = new PropertyMetadata('borderSpacing');
  var borderRadius;
  var borderRadius_metadata = new PropertyMetadata('borderRadius');
  var borderTopLeftRadius;
  var borderTopLeftRadius_metadata = new PropertyMetadata('borderTopLeftRadius');
  var borderTopRightRadius;
  var borderTopRightRadius_metadata = new PropertyMetadata('borderTopRightRadius');
  var borderBottomLeftRadius;
  var borderBottomLeftRadius_metadata = new PropertyMetadata('borderBottomLeftRadius');
  var borderBottomRightRadius;
  var borderBottomRightRadius_metadata = new PropertyMetadata('borderBottomRightRadius');
  var borderStyle;
  var borderStyle_metadata = new PropertyMetadata('borderStyle');
  var borderTopStyle;
  var borderTopStyle_metadata = new PropertyMetadata('borderTopStyle');
  var borderRightStyle;
  var borderRightStyle_metadata = new PropertyMetadata('borderRightStyle');
  var borderBottomStyle;
  var borderBottomStyle_metadata = new PropertyMetadata('borderBottomStyle');
  var borderLeftStyle;
  var borderLeftStyle_metadata = new PropertyMetadata('borderLeftStyle');
  var borderWidth;
  var borderWidth_metadata = new PropertyMetadata('borderWidth');
  var borderTopWidth;
  var borderTopWidth_metadata = new PropertyMetadata('borderTopWidth');
  var borderRightWidth;
  var borderRightWidth_metadata = new PropertyMetadata('borderRightWidth');
  var borderBottomWidth;
  var borderBottomWidth_metadata = new PropertyMetadata('borderBottomWidth');
  var borderLeftWidth;
  var borderLeftWidth_metadata = new PropertyMetadata('borderLeftWidth');
  var borderColor;
  var borderColor_metadata = new PropertyMetadata('borderColor');
  var borderTopColor;
  var borderTopColor_metadata = new PropertyMetadata('borderTopColor');
  var borderRightColor;
  var borderRightColor_metadata = new PropertyMetadata('borderRightColor');
  var borderBottomColor;
  var borderBottomColor_metadata = new PropertyMetadata('borderBottomColor');
  var borderLeftColor;
  var borderLeftColor_metadata = new PropertyMetadata('borderLeftColor');
  var bottom;
  var bottom_metadata = new PropertyMetadata('bottom');
  function boxShadow$lambda() {
    return new BoxShadows();
  }
  var boxShadow;
  var boxShadow_metadata = new PropertyMetadata('boxShadow');
  var boxSizing;
  var boxSizing_metadata = new PropertyMetadata('boxSizing');
  var clear;
  var clear_metadata = new PropertyMetadata('clear');
  var color;
  var color_metadata = new PropertyMetadata('color');
  var columnGap;
  var columnGap_metadata = new PropertyMetadata('columnGap');
  var contain;
  var contain_metadata = new PropertyMetadata('contain');
  var content;
  var content_metadata = new PropertyMetadata('content');
  function set_content($receiver, content_0) {
    content.setValue_6qj5c4$($receiver, content_metadata, content_0);
  }
  var cursor;
  var cursor_metadata = new PropertyMetadata('cursor');
  var direction;
  var direction_metadata = new PropertyMetadata('direction');
  var display;
  var display_metadata = new PropertyMetadata('display');
  var filter;
  var filter_metadata = new PropertyMetadata('filter');
  var flexBasis;
  var flexBasis_metadata = new PropertyMetadata('flexBasis');
  var flexDirection;
  var flexDirection_metadata = new PropertyMetadata('flexDirection');
  var flexGrow;
  var flexGrow_metadata = new PropertyMetadata('flexGrow');
  var flexShrink;
  var flexShrink_metadata = new PropertyMetadata('flexShrink');
  var flexWrap;
  var flexWrap_metadata = new PropertyMetadata('flexWrap');
  var float;
  var float_metadata = new PropertyMetadata('float');
  var fontFamily;
  var fontFamily_metadata = new PropertyMetadata('fontFamily');
  var fontSize;
  var fontSize_metadata = new PropertyMetadata('fontSize');
  var fontSizeAdjust;
  var fontSizeAdjust_metadata = new PropertyMetadata('fontSizeAdjust');
  var fontStyle;
  var fontStyle_metadata = new PropertyMetadata('fontStyle');
  var fontWeight;
  var fontWeight_metadata = new PropertyMetadata('fontWeight');
  var gap;
  var gap_metadata = new PropertyMetadata('gap');
  var gridAutoColumns;
  var gridAutoColumns_metadata = new PropertyMetadata('gridAutoColumns');
  var gridAutoFlow;
  var gridAutoFlow_metadata = new PropertyMetadata('gridAutoFlow');
  var gridAutoRows;
  var gridAutoRows_metadata = new PropertyMetadata('gridAutoRows');
  var gridColumn;
  var gridColumn_metadata = new PropertyMetadata('gridColumn');
  var gridColumnEnd;
  var gridColumnEnd_metadata = new PropertyMetadata('gridColumnEnd');
  var gridColumnStart;
  var gridColumnStart_metadata = new PropertyMetadata('gridColumnStart');
  var gridRow;
  var gridRow_metadata = new PropertyMetadata('gridRow');
  var gridRowEnd;
  var gridRowEnd_metadata = new PropertyMetadata('gridRowEnd');
  var gridRowStart;
  var gridRowStart_metadata = new PropertyMetadata('gridRowStart');
  var gridTemplate;
  var gridTemplate_metadata = new PropertyMetadata('gridTemplate');
  var gridTemplateAreas;
  var gridTemplateAreas_metadata = new PropertyMetadata('gridTemplateAreas');
  var gridTemplateColumns;
  var gridTemplateColumns_metadata = new PropertyMetadata('gridTemplateColumns');
  var gridTemplateRows;
  var gridTemplateRows_metadata = new PropertyMetadata('gridTemplateRows');
  var height;
  var height_metadata = new PropertyMetadata('height');
  var hyphens;
  var hyphens_metadata = new PropertyMetadata('hyphens');
  var isolation;
  var isolation_metadata = new PropertyMetadata('isolation');
  var justifyContent;
  var justifyContent_metadata = new PropertyMetadata('justifyContent');
  var justifyItems;
  var justifyItems_metadata = new PropertyMetadata('justifyItems');
  var left;
  var left_metadata = new PropertyMetadata('left');
  var letterSpacing;
  var letterSpacing_metadata = new PropertyMetadata('letterSpacing');
  var lineHeight;
  var lineHeight_metadata = new PropertyMetadata('lineHeight');
  var listStyleType;
  var listStyleType_metadata = new PropertyMetadata('listStyleType');
  var margin;
  var margin_metadata = new PropertyMetadata('margin');
  var marginTop;
  var marginTop_metadata = new PropertyMetadata('marginTop');
  var marginRight;
  var marginRight_metadata = new PropertyMetadata('marginRight');
  var marginBottom;
  var marginBottom_metadata = new PropertyMetadata('marginBottom');
  var marginLeft;
  var marginLeft_metadata = new PropertyMetadata('marginLeft');
  var minWidth;
  var minWidth_metadata = new PropertyMetadata('minWidth');
  var maxWidth;
  var maxWidth_metadata = new PropertyMetadata('maxWidth');
  var minHeight;
  var minHeight_metadata = new PropertyMetadata('minHeight');
  var maxHeight;
  var maxHeight_metadata = new PropertyMetadata('maxHeight');
  var objectFit;
  var objectFit_metadata = new PropertyMetadata('objectFit');
  var objectPosition;
  var objectPosition_metadata = new PropertyMetadata('objectPosition');
  var opacity;
  var opacity_metadata = new PropertyMetadata('opacity');
  var outline;
  var outline_metadata = new PropertyMetadata('outline');
  var outlineColor;
  var outlineColor_metadata = new PropertyMetadata('outlineColor');
  var outlineOffset;
  var outlineOffset_metadata = new PropertyMetadata('outlineOffset');
  var outlineWidth;
  var outlineWidth_metadata = new PropertyMetadata('outlineWidth');
  var overflow;
  var overflow_metadata = new PropertyMetadata('overflow');
  var overflowX;
  var overflowX_metadata = new PropertyMetadata('overflowX');
  var overflowY;
  var overflowY_metadata = new PropertyMetadata('overflowY');
  var overflowWrap;
  var overflowWrap_metadata = new PropertyMetadata('overflowWrap');
  var overscrollBehavior;
  var overscrollBehavior_metadata = new PropertyMetadata('overscrollBehavior');
  var padding;
  var padding_metadata = new PropertyMetadata('padding');
  var paddingTop;
  var paddingTop_metadata = new PropertyMetadata('paddingTop');
  var paddingRight;
  var paddingRight_metadata = new PropertyMetadata('paddingRight');
  var paddingBottom;
  var paddingBottom_metadata = new PropertyMetadata('paddingBottom');
  var paddingLeft;
  var paddingLeft_metadata = new PropertyMetadata('paddingLeft');
  var pointerEvents;
  var pointerEvents_metadata = new PropertyMetadata('pointerEvents');
  var position;
  var position_metadata = new PropertyMetadata('position');
  var resize;
  var resize_metadata = new PropertyMetadata('resize');
  var right;
  var right_metadata = new PropertyMetadata('right');
  var rowGap;
  var rowGap_metadata = new PropertyMetadata('rowGap');
  var scrollBehavior;
  var scrollBehavior_metadata = new PropertyMetadata('scrollBehavior');
  var src;
  var src_metadata = new PropertyMetadata('src');
  var tableLayout;
  var tableLayout_metadata = new PropertyMetadata('tableLayout');
  var textAlign;
  var textAlign_metadata = new PropertyMetadata('textAlign');
  var textDecoration;
  var textDecoration_metadata = new PropertyMetadata('textDecoration');
  var textOverflow;
  var textOverflow_metadata = new PropertyMetadata('textOverflow');
  var textTransform;
  var textTransform_metadata = new PropertyMetadata('textTransform');
  var top;
  var top_metadata = new PropertyMetadata('top');
  function transform$lambda() {
    return new Transforms();
  }
  var transform;
  var transform_metadata = new PropertyMetadata('transform');
  function transition$lambda() {
    return new Transitions();
  }
  var transition;
  var transition_metadata = new PropertyMetadata('transition');
  var transitionDelay;
  var transitionDelay_metadata = new PropertyMetadata('transitionDelay');
  var transitionDuration;
  var transitionDuration_metadata = new PropertyMetadata('transitionDuration');
  var transitionProperty;
  var transitionProperty_metadata = new PropertyMetadata('transitionProperty');
  var transitionTimingFunction;
  var transitionTimingFunction_metadata = new PropertyMetadata('transitionTimingFunction');
  var userSelect;
  var userSelect_metadata = new PropertyMetadata('userSelect');
  var verticalAlign;
  var verticalAlign_metadata = new PropertyMetadata('verticalAlign');
  var visibility;
  var visibility_metadata = new PropertyMetadata('visibility');
  var whiteSpace;
  var whiteSpace_metadata = new PropertyMetadata('whiteSpace');
  var width;
  var width_metadata = new PropertyMetadata('width');
  var wordBreak;
  var wordBreak_metadata = new PropertyMetadata('wordBreak');
  var wordSpacing;
  var wordSpacing_metadata = new PropertyMetadata('wordSpacing');
  var wordWrap;
  var wordWrap_metadata = new PropertyMetadata('wordWrap');
  var zIndex;
  var zIndex_metadata = new PropertyMetadata('zIndex');
  function TagSelector(tagName) {
    this.tagName = tagName;
  }
  TagSelector.$metadata$ = {kind: Kind_CLASS, simpleName: 'TagSelector', interfaces: []};
  function TagSelectorFactory() {
    TagSelectorFactory_instance = this;
  }
  TagSelectorFactory.prototype.getValue_d6mtq7$ = function (thisRef, property) {
    return new TagSelector(property.callableName);
  };
  TagSelectorFactory.$metadata$ = {kind: Kind_OBJECT, simpleName: 'TagSelectorFactory', interfaces: []};
  var TagSelectorFactory_instance = null;
  function TagSelectorFactory_getInstance() {
    if (TagSelectorFactory_instance === null) {
      new TagSelectorFactory();
    }return TagSelectorFactory_instance;
  }
  var html;
  var html_metadata = new PropertyMetadata('html');
  var base;
  var base_metadata = new PropertyMetadata('base');
  var head;
  var head_metadata = new PropertyMetadata('head');
  var link;
  var link_metadata = new PropertyMetadata('link');
  var meta;
  var meta_metadata = new PropertyMetadata('meta');
  var style;
  var style_metadata = new PropertyMetadata('style');
  var title;
  var title_metadata = new PropertyMetadata('title');
  var body;
  var body_metadata = new PropertyMetadata('body');
  var address;
  var address_metadata = new PropertyMetadata('address');
  var article;
  var article_metadata = new PropertyMetadata('article');
  var aside;
  var aside_metadata = new PropertyMetadata('aside');
  var footer;
  var footer_metadata = new PropertyMetadata('footer');
  var header;
  var header_metadata = new PropertyMetadata('header');
  var h1;
  var h1_metadata = new PropertyMetadata('h1');
  var h2;
  var h2_metadata = new PropertyMetadata('h2');
  var h3;
  var h3_metadata = new PropertyMetadata('h3');
  var h4;
  var h4_metadata = new PropertyMetadata('h4');
  var h5;
  var h5_metadata = new PropertyMetadata('h5');
  var h6;
  var h6_metadata = new PropertyMetadata('h6');
  var main;
  var main_metadata = new PropertyMetadata('main');
  var nav;
  var nav_metadata = new PropertyMetadata('nav');
  var section;
  var section_metadata = new PropertyMetadata('section');
  var blockquote;
  var blockquote_metadata = new PropertyMetadata('blockquote');
  var dd;
  var dd_metadata = new PropertyMetadata('dd');
  var div;
  var div_metadata = new PropertyMetadata('div');
  var dl;
  var dl_metadata = new PropertyMetadata('dl');
  var dt;
  var dt_metadata = new PropertyMetadata('dt');
  var figcaption;
  var figcaption_metadata = new PropertyMetadata('figcaption');
  var figure;
  var figure_metadata = new PropertyMetadata('figure');
  var hr;
  var hr_metadata = new PropertyMetadata('hr');
  var li;
  var li_metadata = new PropertyMetadata('li');
  var ol;
  var ol_metadata = new PropertyMetadata('ol');
  var p;
  var p_metadata = new PropertyMetadata('p');
  var pre;
  var pre_metadata = new PropertyMetadata('pre');
  var ul;
  var ul_metadata = new PropertyMetadata('ul');
  var a;
  var a_metadata = new PropertyMetadata('a');
  var abbr;
  var abbr_metadata = new PropertyMetadata('abbr');
  var b;
  var b_metadata = new PropertyMetadata('b');
  var bdi;
  var bdi_metadata = new PropertyMetadata('bdi');
  var bdo;
  var bdo_metadata = new PropertyMetadata('bdo');
  var br;
  var br_metadata = new PropertyMetadata('br');
  var cite;
  var cite_metadata = new PropertyMetadata('cite');
  var code;
  var code_metadata = new PropertyMetadata('code');
  var data;
  var data_metadata = new PropertyMetadata('data');
  var dfn;
  var dfn_metadata = new PropertyMetadata('dfn');
  var em;
  var em_metadata = new PropertyMetadata('em');
  var i;
  var i_metadata = new PropertyMetadata('i');
  var kbd;
  var kbd_metadata = new PropertyMetadata('kbd');
  var mark;
  var mark_metadata = new PropertyMetadata('mark');
  var q;
  var q_metadata = new PropertyMetadata('q');
  var rb;
  var rb_metadata = new PropertyMetadata('rb');
  var rp;
  var rp_metadata = new PropertyMetadata('rp');
  var rt;
  var rt_metadata = new PropertyMetadata('rt');
  var rtc;
  var rtc_metadata = new PropertyMetadata('rtc');
  var ruby;
  var ruby_metadata = new PropertyMetadata('ruby');
  var s;
  var s_metadata = new PropertyMetadata('s');
  var samp;
  var samp_metadata = new PropertyMetadata('samp');
  var small;
  var small_metadata = new PropertyMetadata('small');
  var span;
  var span_metadata = new PropertyMetadata('span');
  var strong;
  var strong_metadata = new PropertyMetadata('strong');
  var sub;
  var sub_metadata = new PropertyMetadata('sub');
  var sup;
  var sup_metadata = new PropertyMetadata('sup');
  var time;
  var time_metadata = new PropertyMetadata('time');
  var u;
  var u_metadata = new PropertyMetadata('u');
  var wbr;
  var wbr_metadata = new PropertyMetadata('wbr');
  var area;
  var area_metadata = new PropertyMetadata('area');
  var audio;
  var audio_metadata = new PropertyMetadata('audio');
  var img;
  var img_metadata = new PropertyMetadata('img');
  var map;
  var map_metadata = new PropertyMetadata('map');
  var track;
  var track_metadata = new PropertyMetadata('track');
  var video;
  var video_metadata = new PropertyMetadata('video');
  var embed;
  var embed_metadata = new PropertyMetadata('embed');
  var iframe;
  var iframe_metadata = new PropertyMetadata('iframe');
  var param;
  var param_metadata = new PropertyMetadata('param');
  var picture;
  var picture_metadata = new PropertyMetadata('picture');
  var portal;
  var portal_metadata = new PropertyMetadata('portal');
  var source;
  var source_metadata = new PropertyMetadata('source');
  var svg;
  var svg_metadata = new PropertyMetadata('svg');
  var math_0;
  var math_metadata = new PropertyMetadata('math');
  var canvas;
  var canvas_metadata = new PropertyMetadata('canvas');
  var noscript;
  var noscript_metadata = new PropertyMetadata('noscript');
  var script;
  var script_metadata = new PropertyMetadata('script');
  var del;
  var del_metadata = new PropertyMetadata('del');
  var ins;
  var ins_metadata = new PropertyMetadata('ins');
  var caption;
  var caption_metadata = new PropertyMetadata('caption');
  var col;
  var col_metadata = new PropertyMetadata('col');
  var colgroup;
  var colgroup_metadata = new PropertyMetadata('colgroup');
  var table;
  var table_metadata = new PropertyMetadata('table');
  var tbody;
  var tbody_metadata = new PropertyMetadata('tbody');
  var td;
  var td_metadata = new PropertyMetadata('td');
  var tfoot;
  var tfoot_metadata = new PropertyMetadata('tfoot');
  var th;
  var th_metadata = new PropertyMetadata('th');
  var thead;
  var thead_metadata = new PropertyMetadata('thead');
  var tr;
  var tr_metadata = new PropertyMetadata('tr');
  var button;
  var button_metadata = new PropertyMetadata('button');
  var datalist;
  var datalist_metadata = new PropertyMetadata('datalist');
  var fieldset;
  var fieldset_metadata = new PropertyMetadata('fieldset');
  var form;
  var form_metadata = new PropertyMetadata('form');
  var input;
  var input_metadata = new PropertyMetadata('input');
  var label;
  var label_metadata = new PropertyMetadata('label');
  var legend;
  var legend_metadata = new PropertyMetadata('legend');
  var meter;
  var meter_metadata = new PropertyMetadata('meter');
  var optgroup;
  var optgroup_metadata = new PropertyMetadata('optgroup');
  var option;
  var option_metadata = new PropertyMetadata('option');
  var output;
  var output_metadata = new PropertyMetadata('output');
  var progress;
  var progress_metadata = new PropertyMetadata('progress');
  var select;
  var select_metadata = new PropertyMetadata('select');
  var textarea;
  var textarea_metadata = new PropertyMetadata('textarea');
  var details;
  var details_metadata = new PropertyMetadata('details');
  var dialog;
  var dialog_metadata = new PropertyMetadata('dialog');
  var menu;
  var menu_metadata = new PropertyMetadata('menu');
  var summary;
  var summary_metadata = new PropertyMetadata('summary');
  var slot;
  var slot_metadata = new PropertyMetadata('slot');
  var template;
  var template_metadata = new PropertyMetadata('template');
  var IterationCount$Companion_instance = null;
  var AnimationDirection$initial_instance;
  var AnimationDirection$inherit_instance;
  var AnimationDirection$unset_instance;
  var AnimationDirection$normal_instance;
  var AnimationDirection$reverse_instance;
  var AnimationDirection$alternate_instance;
  var AnimationDirection$alternateReverse_instance;
  var FillMode$initial_instance;
  var FillMode$inherit_instance;
  var FillMode$unset_instance;
  var FillMode$none_instance;
  var FillMode$forwards_instance;
  var FillMode$backwards_instance;
  var FillMode$both_instance;
  var PlayState$initial_instance;
  var PlayState$inherit_instance;
  var PlayState$unset_instance;
  var PlayState$running_instance;
  var PlayState$paused_instance;
  function Animations() {
    Animations$Companion_getInstance();
    StyleList.call(this, ', ');
  }
  function Animations$Companion() {
    Animations$Companion_instance = this;
    this.none = new Animations();
  }
  Animations$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Animations$Companion_instance = null;
  function Animations$Companion_getInstance() {
    if (Animations$Companion_instance === null) {
      new Animations$Companion();
    }return Animations$Companion_instance;
  }
  Animations.$metadata$ = {kind: Kind_CLASS, simpleName: 'Animations', interfaces: [StyleList]};
  function BoxShadows() {
    BoxShadows$Companion_getInstance();
    StyleList.call(this, ', ');
  }
  function BoxShadows$Companion() {
    BoxShadows$Companion_instance = this;
    this.none = new BoxShadows();
  }
  BoxShadows$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var BoxShadows$Companion_instance = null;
  function BoxShadows$Companion_getInstance() {
    if (BoxShadows$Companion_instance === null) {
      new BoxShadows$Companion();
    }return BoxShadows$Companion_instance;
  }
  BoxShadows.$metadata$ = {kind: Kind_CLASS, simpleName: 'BoxShadows', interfaces: [StyleList]};
  var GradientSideOrCorner$ToLeft_instance;
  var GradientSideOrCorner$ToLeftTop_instance;
  var GradientSideOrCorner$ToLeftBottom_instance;
  var GradientSideOrCorner$ToRight_instance;
  var GradientSideOrCorner$ToRightTop_instance;
  var GradientSideOrCorner$ToRightBottom_instance;
  var GradientSideOrCorner$ToTop_instance;
  var GradientSideOrCorner$ToBottom_instance;
  var RadialGradientExtent$closestCorner_instance;
  var RadialGradientExtent$closestSide_instance;
  var RadialGradientExtent$farthestCorner_instance;
  var RadialGradientExtent$farthestSide_instance;
  function KeyframesBuilder() {
  }
  KeyframesBuilder.prototype.from_lx8bml$ = function (block) {
    return this.rule_v44dnz$('from', block);
  };
  KeyframesBuilder.prototype.to_lx8bml$ = function (block) {
    return this.rule_v44dnz$('to', block);
  };
  KeyframesBuilder.prototype.invoke_u1vo8g$ = function ($receiver, block) {
    return this.rule_v44dnz$($receiver.toString() + '%', block);
  };
  KeyframesBuilder.prototype.invoke_31divo$ = function ($receiver, block) {
    return this.rule_v44dnz$($receiver.toString() + '%', block);
  };
  KeyframesBuilder.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'KeyframesBuilder', interfaces: [RuleContainer]};
  function KeyframesBuilder_0(indent) {
    if (indent === void 0)
      indent = '';
    return new KeyframesBuilderImpl(indent);
  }
  function KeyframesBuilderImpl(indent) {
    if (indent === void 0)
      indent = '';
    this.indent_lo30wh$_0 = indent;
    this.rules_5hpu3i$_0 = ArrayList_init();
    this.multiRules_76a4m5$_0 = ArrayList_init();
    this.memoizedHashCode_0 = null;
  }
  Object.defineProperty(KeyframesBuilderImpl.prototype, 'indent', {get: function () {
    return this.indent_lo30wh$_0;
  }});
  Object.defineProperty(KeyframesBuilderImpl.prototype, 'rules', {configurable: true, get: function () {
    return this.rules_5hpu3i$_0;
  }});
  Object.defineProperty(KeyframesBuilderImpl.prototype, 'multiRules', {configurable: true, get: function () {
    return this.multiRules_76a4m5$_0;
  }});
  KeyframesBuilderImpl.prototype.toString = function () {
    var $receiver = StringBuilder_init();
    this.buildRules_s47sd7$($receiver, this.indent);
    return $receiver.toString();
  };
  KeyframesBuilderImpl.prototype.hashCode = function () {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.memoizedHashCode_0) != null)
      tmp$_0 = tmp$;
    else {
      var tmp$_1;
      var sum = 0;
      tmp$_1 = this.rules.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        sum = sum + element.hashCode() | 0;
      }
      var tmp$_2 = sum;
      var tmp$_3;
      var sum_0 = 0;
      tmp$_3 = this.multiRules.iterator();
      while (tmp$_3.hasNext()) {
        var element_0 = tmp$_3.next();
        sum_0 = sum_0 + element_0.hashCode() | 0;
      }
      var $receiver = tmp$_2 + sum_0 | 0;
      this.memoizedHashCode_0 = $receiver;
      tmp$_0 = $receiver;
    }
    return tmp$_0;
  };
  KeyframesBuilderImpl.prototype.equals = function (other) {
    var calculateEquals$result;
    calculateEquals$break: do {
      var tmp$, tmp$_0;
      if (this === other) {
        calculateEquals$result = true;
        break calculateEquals$break;
      }if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null)) {
        calculateEquals$result = false;
        break calculateEquals$break;
      }Kotlin.isType(tmp$_0 = other, KeyframesBuilderImpl) ? tmp$_0 : throwCCE();
      var tmp$_1 = hashCode(this) === hashCode(other);
      if (tmp$_1) {
        tmp$_1 = (equals(this.rules, other.rules) && equals(this.multiRules, other.multiRules));
      }calculateEquals$result = tmp$_1;
    }
     while (false);
    return calculateEquals$result;
  };
  KeyframesBuilderImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'KeyframesBuilderImpl', interfaces: [KeyframesBuilder]};
  var LineHeight$Companion_instance = null;
  var TextDecorationLine$initial_instance;
  var TextDecorationLine$inherit_instance;
  var TextDecorationLine$unset_instance;
  var TextDecorationLine$underline_instance;
  var TextDecorationLine$overline_instance;
  var TextDecorationLine$lineThrough_instance;
  var TextDecoration$Companion_instance = null;
  var TextDecorationStyle$initial_instance;
  var TextDecorationStyle$inherit_instance;
  var TextDecorationStyle$unset_instance;
  var TextDecorationStyle$solid_instance;
  var TextDecorationStyle$double_instance;
  var TextDecorationStyle$dotted_instance;
  var TextDecorationStyle$dashed_instance;
  var TextDecorationStyle$wavy_instance;
  var Timing$Companion_instance = null;
  var TransitionDirection$initial_instance;
  var TransitionDirection$inherit_instance;
  var TransitionDirection$unset_instance;
  var TransitionDirection$start_instance;
  var TransitionDirection$end_instance;
  function Transforms() {
    Transforms$Companion_getInstance();
    StyleList.call(this, ' ');
  }
  function Transforms$Companion() {
    Transforms$Companion_instance = this;
    this.none = new Transforms();
  }
  Transforms$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Transforms$Companion_instance = null;
  function Transforms$Companion_getInstance() {
    if (Transforms$Companion_instance === null) {
      new Transforms$Companion();
    }return Transforms$Companion_instance;
  }
  Transforms.$metadata$ = {kind: Kind_CLASS, simpleName: 'Transforms', interfaces: [StyleList]};
  function Transitions() {
    Transitions$Companion_getInstance();
    StyleList.call(this, ', ');
  }
  function Transitions$Companion() {
    Transitions$Companion_instance = this;
    this.none = new Transitions();
  }
  Transitions$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Transitions$Companion_instance = null;
  function Transitions$Companion_getInstance() {
    if (Transitions$Companion_instance === null) {
      new Transitions$Companion();
    }return Transitions$Companion_instance;
  }
  Transitions.$metadata$ = {kind: Kind_CLASS, simpleName: 'Transitions', interfaces: [StyleList]};
  var package$kotlinx = _.kotlinx || (_.kotlinx = {});
  var package$css = package$kotlinx.css || (package$kotlinx.css = {});
  package$css.CssBuilder_ld8ri9$ = CssBuilder;
  Object.defineProperty(CssBuilder_0, 'Companion', {get: CssBuilder$Companion_getInstance});
  package$css.CssBuilder = CssBuilder_0;
  package$css.CssBuilderImpl = CssBuilderImpl;
  package$css.hyphenize_pdl1vz$ = hyphenize;
  package$css.Rule = Rule;
  package$css.RuleContainer = RuleContainer;
  Object.defineProperty(LinearDimension, 'Companion', {get: LinearDimension$Companion_getInstance});
  package$css.LinearDimension = LinearDimension;
  package$css.CssValue = CssValue;
  package$css.QuotedString = QuotedString;
  package$css.get_quoted_pdl1vz$ = get_quoted;
  package$css.StyleList = StyleList;
  package$css.CssDeclarations = CssDeclarations;
  package$css.StyledElement = StyledElement;
  package$css.StyledElementImpl = StyledElementImpl;
  package$css.set_border_krvuuu$ = set_border;
  package$css.set_content_qf37ct$ = set_content;
  package$css.TagSelector = TagSelector;
  var package$properties = package$css.properties || (package$css.properties = {});
  Object.defineProperty(Animations, 'Companion', {get: Animations$Companion_getInstance});
  package$properties.Animations = Animations;
  Object.defineProperty(BoxShadows, 'Companion', {get: BoxShadows$Companion_getInstance});
  package$properties.BoxShadows = BoxShadows;
  package$properties.KeyframesBuilder = KeyframesBuilder;
  package$properties.KeyframesBuilder_61zpoe$ = KeyframesBuilder_0;
  package$properties.KeyframesBuilderImpl = KeyframesBuilderImpl;
  Object.defineProperty(Transforms, 'Companion', {get: Transforms$Companion_getInstance});
  package$properties.Transforms = Transforms;
  Object.defineProperty(Transitions, 'Companion', {get: Transitions$Companion_getInstance});
  package$properties.Transitions = Transitions;
  CssBuilder_0.prototype.put_puj7f4$ = StyledElement.prototype.put_puj7f4$;
  CssBuilder_0.prototype.buildRules_s47sd7$ = RuleContainer.prototype.buildRules_s47sd7$;
  CssBuilder_0.prototype.resolveRules_ry1ed0$ = RuleContainer.prototype.resolveRules_ry1ed0$;
  CssBuilder_0.prototype.rule_v44dnz$ = RuleContainer.prototype.rule_v44dnz$;
  CssBuilder_0.prototype.rule_1q2hwx$$default = RuleContainer.prototype.rule_1q2hwx$$default;
  CssBuilder_0.prototype.rule_jindqg$$default = RuleContainer.prototype.rule_jindqg$$default;
  CssBuilder_0.prototype.rule_1q2hwx$ = RuleContainer.prototype.rule_1q2hwx$;
  CssBuilder_0.prototype.rule_jindqg$ = RuleContainer.prototype.rule_jindqg$;
  CssBuilderImpl.prototype.unaryPlus_v2gpjl$ = CssBuilder_0.prototype.unaryPlus_v2gpjl$;
  CssBuilderImpl.prototype.unaryPlus_pdl1vz$ = CssBuilder_0.prototype.unaryPlus_pdl1vz$;
  CssBuilderImpl.prototype.unaryPlus_a3w2bl$ = CssBuilder_0.prototype.unaryPlus_a3w2bl$;
  CssBuilderImpl.prototype.unaryPlus_sdeqdk$ = CssBuilder_0.prototype.unaryPlus_sdeqdk$;
  CssBuilderImpl.prototype.invoke_3ad21g$ = CssBuilder_0.prototype.invoke_3ad21g$;
  CssBuilderImpl.prototype.invoke_x7exez$ = CssBuilder_0.prototype.invoke_x7exez$;
  CssBuilderImpl.prototype.invoke_3c2457$ = CssBuilder_0.prototype.invoke_3c2457$;
  CssBuilderImpl.prototype.active_lx8bml$ = CssBuilder_0.prototype.active_lx8bml$;
  CssBuilderImpl.prototype.checked_lx8bml$ = CssBuilder_0.prototype.checked_lx8bml$;
  CssBuilderImpl.prototype.default_lx8bml$ = CssBuilder_0.prototype.default_lx8bml$;
  CssBuilderImpl.prototype.defined_lx8bml$ = CssBuilder_0.prototype.defined_lx8bml$;
  CssBuilderImpl.prototype.disabled_lx8bml$ = CssBuilder_0.prototype.disabled_lx8bml$;
  CssBuilderImpl.prototype.empty_lx8bml$ = CssBuilder_0.prototype.empty_lx8bml$;
  CssBuilderImpl.prototype.enabled_lx8bml$ = CssBuilder_0.prototype.enabled_lx8bml$;
  CssBuilderImpl.prototype.firstChild_lx8bml$ = CssBuilder_0.prototype.firstChild_lx8bml$;
  CssBuilderImpl.prototype.firstOfType_lx8bml$ = CssBuilder_0.prototype.firstOfType_lx8bml$;
  CssBuilderImpl.prototype.fullscreen_lx8bml$ = CssBuilder_0.prototype.fullscreen_lx8bml$;
  CssBuilderImpl.prototype.focus_lx8bml$ = CssBuilder_0.prototype.focus_lx8bml$;
  CssBuilderImpl.prototype.focusVisible_lx8bml$ = CssBuilder_0.prototype.focusVisible_lx8bml$;
  CssBuilderImpl.prototype.focusWithin_lx8bml$ = CssBuilder_0.prototype.focusWithin_lx8bml$;
  CssBuilderImpl.prototype.hover_lx8bml$ = CssBuilder_0.prototype.hover_lx8bml$;
  CssBuilderImpl.prototype.indeterminate_lx8bml$ = CssBuilder_0.prototype.indeterminate_lx8bml$;
  CssBuilderImpl.prototype.inRange_lx8bml$ = CssBuilder_0.prototype.inRange_lx8bml$;
  CssBuilderImpl.prototype.invalid_lx8bml$ = CssBuilder_0.prototype.invalid_lx8bml$;
  CssBuilderImpl.prototype.lastChild_lx8bml$ = CssBuilder_0.prototype.lastChild_lx8bml$;
  CssBuilderImpl.prototype.lastOfType_lx8bml$ = CssBuilder_0.prototype.lastOfType_lx8bml$;
  CssBuilderImpl.prototype.link_lx8bml$ = CssBuilder_0.prototype.link_lx8bml$;
  CssBuilderImpl.prototype.not_xqeqkq$ = CssBuilder_0.prototype.not_xqeqkq$;
  CssBuilderImpl.prototype.not_v2gpjl$ = CssBuilder_0.prototype.not_v2gpjl$;
  CssBuilderImpl.prototype.nthChild_xqeqkq$ = CssBuilder_0.prototype.nthChild_xqeqkq$;
  CssBuilderImpl.prototype.nthLastChild_xqeqkq$ = CssBuilder_0.prototype.nthLastChild_xqeqkq$;
  CssBuilderImpl.prototype.nthLastOfType_xqeqkq$ = CssBuilder_0.prototype.nthLastOfType_xqeqkq$;
  CssBuilderImpl.prototype.nthOfType_xqeqkq$ = CssBuilder_0.prototype.nthOfType_xqeqkq$;
  CssBuilderImpl.prototype.onlyChild_lx8bml$ = CssBuilder_0.prototype.onlyChild_lx8bml$;
  CssBuilderImpl.prototype.onlyOfType_lx8bml$ = CssBuilder_0.prototype.onlyOfType_lx8bml$;
  CssBuilderImpl.prototype.optional_lx8bml$ = CssBuilder_0.prototype.optional_lx8bml$;
  CssBuilderImpl.prototype.outOfRange_lx8bml$ = CssBuilder_0.prototype.outOfRange_lx8bml$;
  CssBuilderImpl.prototype.placeholderShown_lx8bml$ = CssBuilder_0.prototype.placeholderShown_lx8bml$;
  CssBuilderImpl.prototype.readOnly_lx8bml$ = CssBuilder_0.prototype.readOnly_lx8bml$;
  CssBuilderImpl.prototype.readWrite_lx8bml$ = CssBuilder_0.prototype.readWrite_lx8bml$;
  CssBuilderImpl.prototype.required_lx8bml$ = CssBuilder_0.prototype.required_lx8bml$;
  CssBuilderImpl.prototype.valid_lx8bml$ = CssBuilder_0.prototype.valid_lx8bml$;
  CssBuilderImpl.prototype.visited_lx8bml$ = CssBuilder_0.prototype.visited_lx8bml$;
  CssBuilderImpl.prototype.children_xqeqkq$$default = CssBuilder_0.prototype.children_xqeqkq$$default;
  CssBuilderImpl.prototype.descendants_xqeqkq$$default = CssBuilder_0.prototype.descendants_xqeqkq$$default;
  CssBuilderImpl.prototype.ancestorHover_xqeqkq$ = CssBuilder_0.prototype.ancestorHover_xqeqkq$;
  CssBuilderImpl.prototype.after_lx8bml$ = CssBuilder_0.prototype.after_lx8bml$;
  CssBuilderImpl.prototype.before_lx8bml$ = CssBuilder_0.prototype.before_lx8bml$;
  CssBuilderImpl.prototype.firstLetter_lx8bml$ = CssBuilder_0.prototype.firstLetter_lx8bml$;
  CssBuilderImpl.prototype.firstLine_lx8bml$ = CssBuilder_0.prototype.firstLine_lx8bml$;
  CssBuilderImpl.prototype.placeholder_lx8bml$ = CssBuilder_0.prototype.placeholder_lx8bml$;
  CssBuilderImpl.prototype.selection_lx8bml$ = CssBuilder_0.prototype.selection_lx8bml$;
  CssBuilderImpl.prototype.child_xqeqkq$ = CssBuilder_0.prototype.child_xqeqkq$;
  CssBuilderImpl.prototype.child_v077kx$ = CssBuilder_0.prototype.child_v077kx$;
  CssBuilderImpl.prototype.sibling_xqeqkq$ = CssBuilder_0.prototype.sibling_xqeqkq$;
  CssBuilderImpl.prototype.adjacentSibling_xqeqkq$ = CssBuilder_0.prototype.adjacentSibling_xqeqkq$;
  CssBuilderImpl.prototype.universal_lx8bml$ = CssBuilder_0.prototype.universal_lx8bml$;
  CssBuilderImpl.prototype.compareTo_er05um$ = CssBuilder_0.prototype.compareTo_er05um$;
  CssBuilderImpl.prototype.specific_4clrgz$$default = CssBuilder_0.prototype.specific_4clrgz$$default;
  CssBuilderImpl.prototype.prefix_xqeqkq$ = CssBuilder_0.prototype.prefix_xqeqkq$;
  CssBuilderImpl.prototype.media_v44dnz$ = CssBuilder_0.prototype.media_v44dnz$;
  CssBuilderImpl.prototype.supports_v44dnz$ = CssBuilder_0.prototype.supports_v44dnz$;
  CssBuilderImpl.prototype.container_v44dnz$ = CssBuilder_0.prototype.container_v44dnz$;
  CssBuilderImpl.prototype.fontFace_lx8bml$ = CssBuilder_0.prototype.fontFace_lx8bml$;
  CssBuilderImpl.prototype.retina_lx8bml$ = CssBuilder_0.prototype.retina_lx8bml$;
  CssBuilderImpl.prototype.root_lx8bml$ = CssBuilder_0.prototype.root_lx8bml$;
  CssBuilderImpl.prototype.setCustomProperty_lwowle$ = CssBuilder_0.prototype.setCustomProperty_lwowle$;
  CssBuilderImpl.prototype.min_5utlym$ = CssBuilder_0.prototype.min_5utlym$;
  CssBuilderImpl.prototype.max_5utlym$ = CssBuilder_0.prototype.max_5utlym$;
  CssBuilderImpl.prototype.clamp_me7l17$ = CssBuilder_0.prototype.clamp_me7l17$;
  CssBuilderImpl.prototype.addClass_v4ob8x$_0 = CssBuilder_0.prototype.addClass_v4ob8x$_0;
  CssBuilderImpl.prototype.append_5cyqpy$ = CssBuilder_0.prototype.append_5cyqpy$;
  CssBuilderImpl.prototype.put_puj7f4$ = CssBuilder_0.prototype.put_puj7f4$;
  CssBuilderImpl.prototype.buildRules_s47sd7$ = CssBuilder_0.prototype.buildRules_s47sd7$;
  CssBuilderImpl.prototype.resolveRules_ry1ed0$ = CssBuilder_0.prototype.resolveRules_ry1ed0$;
  CssBuilderImpl.prototype.rule_v44dnz$ = CssBuilder_0.prototype.rule_v44dnz$;
  CssBuilderImpl.prototype.rule_1q2hwx$$default = CssBuilder_0.prototype.rule_1q2hwx$$default;
  CssBuilderImpl.prototype.rule_jindqg$$default = CssBuilder_0.prototype.rule_jindqg$$default;
  CssBuilderImpl.prototype.children_xqeqkq$ = CssBuilder_0.prototype.children_xqeqkq$;
  CssBuilderImpl.prototype.descendants_xqeqkq$ = CssBuilder_0.prototype.descendants_xqeqkq$;
  CssBuilderImpl.prototype.specific_4clrgz$ = CssBuilder_0.prototype.specific_4clrgz$;
  CssBuilderImpl.prototype.rule_1q2hwx$ = CssBuilder_0.prototype.rule_1q2hwx$;
  CssBuilderImpl.prototype.rule_jindqg$ = CssBuilder_0.prototype.rule_jindqg$;
  StyledElementImpl.prototype.put_puj7f4$ = StyledElement.prototype.put_puj7f4$;
  KeyframesBuilder.prototype.buildRules_s47sd7$ = RuleContainer.prototype.buildRules_s47sd7$;
  KeyframesBuilder.prototype.resolveRules_ry1ed0$ = RuleContainer.prototype.resolveRules_ry1ed0$;
  KeyframesBuilder.prototype.rule_v44dnz$ = RuleContainer.prototype.rule_v44dnz$;
  KeyframesBuilder.prototype.rule_1q2hwx$$default = RuleContainer.prototype.rule_1q2hwx$$default;
  KeyframesBuilder.prototype.rule_jindqg$$default = RuleContainer.prototype.rule_jindqg$$default;
  KeyframesBuilder.prototype.rule_1q2hwx$ = RuleContainer.prototype.rule_1q2hwx$;
  KeyframesBuilder.prototype.rule_jindqg$ = RuleContainer.prototype.rule_jindqg$;
  KeyframesBuilderImpl.prototype.from_lx8bml$ = KeyframesBuilder.prototype.from_lx8bml$;
  KeyframesBuilderImpl.prototype.to_lx8bml$ = KeyframesBuilder.prototype.to_lx8bml$;
  KeyframesBuilderImpl.prototype.invoke_u1vo8g$ = KeyframesBuilder.prototype.invoke_u1vo8g$;
  KeyframesBuilderImpl.prototype.invoke_31divo$ = KeyframesBuilder.prototype.invoke_31divo$;
  KeyframesBuilderImpl.prototype.buildRules_s47sd7$ = KeyframesBuilder.prototype.buildRules_s47sd7$;
  KeyframesBuilderImpl.prototype.resolveRules_ry1ed0$ = KeyframesBuilder.prototype.resolveRules_ry1ed0$;
  KeyframesBuilderImpl.prototype.rule_v44dnz$ = KeyframesBuilder.prototype.rule_v44dnz$;
  KeyframesBuilderImpl.prototype.rule_1q2hwx$$default = KeyframesBuilder.prototype.rule_1q2hwx$$default;
  KeyframesBuilderImpl.prototype.rule_jindqg$$default = KeyframesBuilder.prototype.rule_jindqg$$default;
  KeyframesBuilderImpl.prototype.rule_1q2hwx$ = KeyframesBuilder.prototype.rule_1q2hwx$;
  KeyframesBuilderImpl.prototype.rule_jindqg$ = KeyframesBuilder.prototype.rule_jindqg$;
  CAPITAL_LETTER = Regex_init('[A-Z]');
  ZERO = '0';
  alignContent = new CssProperty();
  alignItems = new CssProperty();
  alignSelf = new CssProperty();
  animation = new CssProperty(animation$lambda);
  animationDelay = new CssProperty();
  animationDirection = new CssProperty();
  animationDuration = new CssProperty();
  animationFillMode = new CssProperty();
  animationIterationCount = new CssProperty();
  animationName = new CssProperty();
  animationPlayState = new CssProperty();
  animationTimingFunction = new CssProperty();
  appearance = new CssProperty();
  backfaceVisibility = new CssProperty();
  background = new CssProperty();
  backgroundAttachment = new CssProperty();
  backgroundClip = new CssProperty();
  backgroundColor = new CssProperty();
  backgroundImage = new CssProperty();
  backgroundOrigin = new CssProperty();
  backgroundPosition = new CssProperty();
  backgroundRepeat = new CssProperty();
  backgroundSize = new CssProperty();
  border = new CssProperty();
  borderTop = new CssProperty();
  borderRight = new CssProperty();
  borderBottom = new CssProperty();
  borderLeft = new CssProperty();
  borderCollapse = new CssProperty();
  borderSpacing = new CssProperty();
  borderRadius = new CssProperty();
  borderTopLeftRadius = new CssProperty();
  borderTopRightRadius = new CssProperty();
  borderBottomLeftRadius = new CssProperty();
  borderBottomRightRadius = new CssProperty();
  borderStyle = new CssProperty();
  borderTopStyle = new CssProperty();
  borderRightStyle = new CssProperty();
  borderBottomStyle = new CssProperty();
  borderLeftStyle = new CssProperty();
  borderWidth = new CssProperty();
  borderTopWidth = new CssProperty();
  borderRightWidth = new CssProperty();
  borderBottomWidth = new CssProperty();
  borderLeftWidth = new CssProperty();
  borderColor = new CssProperty();
  borderTopColor = new CssProperty();
  borderRightColor = new CssProperty();
  borderBottomColor = new CssProperty();
  borderLeftColor = new CssProperty();
  bottom = new CssProperty();
  boxShadow = new CssProperty(boxShadow$lambda);
  boxSizing = new CssProperty();
  clear = new CssProperty();
  color = new CssProperty();
  columnGap = new CssProperty();
  contain = new CssProperty();
  content = new CssProperty();
  cursor = new CssProperty();
  direction = new CssProperty();
  display = new CssProperty();
  filter = new CssProperty();
  flexBasis = new CssProperty();
  flexDirection = new CssProperty();
  flexGrow = new CssProperty();
  flexShrink = new CssProperty();
  flexWrap = new CssProperty();
  float = new CssProperty();
  fontFamily = new CssProperty();
  fontSize = new CssProperty();
  fontSizeAdjust = new CssProperty();
  fontStyle = new CssProperty();
  fontWeight = new CssProperty();
  gap = new CssProperty();
  gridAutoColumns = new CssProperty();
  gridAutoFlow = new CssProperty();
  gridAutoRows = new CssProperty();
  gridColumn = new CssProperty();
  gridColumnEnd = new CssProperty();
  gridColumnStart = new CssProperty();
  gridRow = new CssProperty();
  gridRowEnd = new CssProperty();
  gridRowStart = new CssProperty();
  gridTemplate = new CssProperty();
  gridTemplateAreas = new CssProperty();
  gridTemplateColumns = new CssProperty();
  gridTemplateRows = new CssProperty();
  height = new CssProperty();
  hyphens = new CssProperty();
  isolation = new CssProperty();
  justifyContent = new CssProperty();
  justifyItems = new CssProperty();
  left = new CssProperty();
  letterSpacing = new CssProperty();
  lineHeight = new CssProperty();
  listStyleType = new CssProperty();
  margin = new CssProperty();
  marginTop = new CssProperty();
  marginRight = new CssProperty();
  marginBottom = new CssProperty();
  marginLeft = new CssProperty();
  minWidth = new CssProperty();
  maxWidth = new CssProperty();
  minHeight = new CssProperty();
  maxHeight = new CssProperty();
  objectFit = new CssProperty();
  objectPosition = new CssProperty();
  opacity = new CssProperty();
  outline = new CssProperty();
  outlineColor = new CssProperty();
  outlineOffset = new CssProperty();
  outlineWidth = new CssProperty();
  overflow = new CssProperty();
  overflowX = new CssProperty();
  overflowY = new CssProperty();
  overflowWrap = new CssProperty();
  overscrollBehavior = new CssProperty();
  padding = new CssProperty();
  paddingTop = new CssProperty();
  paddingRight = new CssProperty();
  paddingBottom = new CssProperty();
  paddingLeft = new CssProperty();
  pointerEvents = new CssProperty();
  position = new CssProperty();
  resize = new CssProperty();
  right = new CssProperty();
  rowGap = new CssProperty();
  scrollBehavior = new CssProperty();
  src = new CssProperty();
  tableLayout = new CssProperty();
  textAlign = new CssProperty();
  textDecoration = new CssProperty();
  textOverflow = new CssProperty();
  textTransform = new CssProperty();
  top = new CssProperty();
  transform = new CssProperty(transform$lambda);
  transition = new CssProperty(transition$lambda);
  transitionDelay = new CssProperty();
  transitionDuration = new CssProperty();
  transitionProperty = new CssProperty();
  transitionTimingFunction = new CssProperty();
  userSelect = new CssProperty();
  verticalAlign = new CssProperty();
  visibility = new CssProperty();
  whiteSpace = new CssProperty();
  width = new CssProperty();
  wordBreak = new CssProperty();
  wordSpacing = new CssProperty();
  wordWrap = new CssProperty();
  zIndex = new CssProperty();
  html = TagSelectorFactory_getInstance();
  base = TagSelectorFactory_getInstance();
  head = TagSelectorFactory_getInstance();
  link = TagSelectorFactory_getInstance();
  meta = TagSelectorFactory_getInstance();
  style = TagSelectorFactory_getInstance();
  title = TagSelectorFactory_getInstance();
  body = TagSelectorFactory_getInstance();
  address = TagSelectorFactory_getInstance();
  article = TagSelectorFactory_getInstance();
  aside = TagSelectorFactory_getInstance();
  footer = TagSelectorFactory_getInstance();
  header = TagSelectorFactory_getInstance();
  h1 = TagSelectorFactory_getInstance();
  h2 = TagSelectorFactory_getInstance();
  h3 = TagSelectorFactory_getInstance();
  h4 = TagSelectorFactory_getInstance();
  h5 = TagSelectorFactory_getInstance();
  h6 = TagSelectorFactory_getInstance();
  main = TagSelectorFactory_getInstance();
  nav = TagSelectorFactory_getInstance();
  section = TagSelectorFactory_getInstance();
  blockquote = TagSelectorFactory_getInstance();
  dd = TagSelectorFactory_getInstance();
  div = TagSelectorFactory_getInstance();
  dl = TagSelectorFactory_getInstance();
  dt = TagSelectorFactory_getInstance();
  figcaption = TagSelectorFactory_getInstance();
  figure = TagSelectorFactory_getInstance();
  hr = TagSelectorFactory_getInstance();
  li = TagSelectorFactory_getInstance();
  ol = TagSelectorFactory_getInstance();
  p = TagSelectorFactory_getInstance();
  pre = TagSelectorFactory_getInstance();
  ul = TagSelectorFactory_getInstance();
  a = TagSelectorFactory_getInstance();
  abbr = TagSelectorFactory_getInstance();
  b = TagSelectorFactory_getInstance();
  bdi = TagSelectorFactory_getInstance();
  bdo = TagSelectorFactory_getInstance();
  br = TagSelectorFactory_getInstance();
  cite = TagSelectorFactory_getInstance();
  code = TagSelectorFactory_getInstance();
  data = TagSelectorFactory_getInstance();
  dfn = TagSelectorFactory_getInstance();
  em = TagSelectorFactory_getInstance();
  i = TagSelectorFactory_getInstance();
  kbd = TagSelectorFactory_getInstance();
  mark = TagSelectorFactory_getInstance();
  q = TagSelectorFactory_getInstance();
  rb = TagSelectorFactory_getInstance();
  rp = TagSelectorFactory_getInstance();
  rt = TagSelectorFactory_getInstance();
  rtc = TagSelectorFactory_getInstance();
  ruby = TagSelectorFactory_getInstance();
  s = TagSelectorFactory_getInstance();
  samp = TagSelectorFactory_getInstance();
  small = TagSelectorFactory_getInstance();
  span = TagSelectorFactory_getInstance();
  strong = TagSelectorFactory_getInstance();
  sub = TagSelectorFactory_getInstance();
  sup = TagSelectorFactory_getInstance();
  time = TagSelectorFactory_getInstance();
  u = TagSelectorFactory_getInstance();
  wbr = TagSelectorFactory_getInstance();
  area = TagSelectorFactory_getInstance();
  audio = TagSelectorFactory_getInstance();
  img = TagSelectorFactory_getInstance();
  map = TagSelectorFactory_getInstance();
  track = TagSelectorFactory_getInstance();
  video = TagSelectorFactory_getInstance();
  embed = TagSelectorFactory_getInstance();
  iframe = TagSelectorFactory_getInstance();
  param = TagSelectorFactory_getInstance();
  picture = TagSelectorFactory_getInstance();
  portal = TagSelectorFactory_getInstance();
  source = TagSelectorFactory_getInstance();
  svg = TagSelectorFactory_getInstance();
  math_0 = TagSelectorFactory_getInstance();
  canvas = TagSelectorFactory_getInstance();
  noscript = TagSelectorFactory_getInstance();
  script = TagSelectorFactory_getInstance();
  del = TagSelectorFactory_getInstance();
  ins = TagSelectorFactory_getInstance();
  caption = TagSelectorFactory_getInstance();
  col = TagSelectorFactory_getInstance();
  colgroup = TagSelectorFactory_getInstance();
  table = TagSelectorFactory_getInstance();
  tbody = TagSelectorFactory_getInstance();
  td = TagSelectorFactory_getInstance();
  tfoot = TagSelectorFactory_getInstance();
  th = TagSelectorFactory_getInstance();
  thead = TagSelectorFactory_getInstance();
  tr = TagSelectorFactory_getInstance();
  button = TagSelectorFactory_getInstance();
  datalist = TagSelectorFactory_getInstance();
  fieldset = TagSelectorFactory_getInstance();
  form = TagSelectorFactory_getInstance();
  input = TagSelectorFactory_getInstance();
  label = TagSelectorFactory_getInstance();
  legend = TagSelectorFactory_getInstance();
  meter = TagSelectorFactory_getInstance();
  optgroup = TagSelectorFactory_getInstance();
  option = TagSelectorFactory_getInstance();
  output = TagSelectorFactory_getInstance();
  progress = TagSelectorFactory_getInstance();
  select = TagSelectorFactory_getInstance();
  textarea = TagSelectorFactory_getInstance();
  details = TagSelectorFactory_getInstance();
  dialog = TagSelectorFactory_getInstance();
  menu = TagSelectorFactory_getInstance();
  summary = TagSelectorFactory_getInstance();
  slot = TagSelectorFactory_getInstance();
  template = TagSelectorFactory_getInstance();
  return _;
}));

//# sourceMappingURL=kotlin-css.js.map
