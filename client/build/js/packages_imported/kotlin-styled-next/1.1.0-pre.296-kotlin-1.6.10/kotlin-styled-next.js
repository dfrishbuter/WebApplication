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
  var get_s = $module$kotlin_css.kotlinx.css.properties.get_s_rcaex3$;
  var Timing = $module$kotlin_css.kotlinx.css.properties.Timing;
  var get_times = $module$kotlin_css.kotlinx.css.properties.get_times_s8ev3n$;
  var AnimationDirection = $module$kotlin_css.kotlinx.css.properties.AnimationDirection;
  var FillMode = $module$kotlin_css.kotlinx.css.properties.FillMode;
  var PlayState = $module$kotlin_css.kotlinx.css.properties.PlayState;
  var animation = $module$kotlin_css.kotlinx.css.properties.animation_hb31zf$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var throwCCE = Kotlin.throwCCE;
  var KeyframesBuilder = $module$kotlin_css.kotlinx.css.properties.KeyframesBuilder_61zpoe$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var Map = Kotlin.kotlin.collections.Map;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var StyledElement = $module$kotlin_css.kotlinx.css.StyledElement_create;
  var setProp = $module$kotlin_react_dom_legacy.react.dom.setProp_v86kls$;
  var prefix = $module$inline_style_prefixer.prefix;
  var hyphenize = $module$kotlin_css.kotlinx.css.hyphenize_pdl1vz$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var rawUseMemo = $module$react.useMemo;
  var useInsertionEffect = $module$kotlin_react_core.react.useInsertionEffect_c147l4$;
  var useLayoutEffect = $module$kotlin_react_core.react.useLayoutEffect_c147l4$;
  var useRef = $module$react.useRef;
  var joinToString = Kotlin.kotlin.collections.joinToString_cgipc5$;
  var joinToString_0 = Kotlin.kotlin.collections.joinToString_fmv235$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var ReadOnlyProperty = Kotlin.kotlin.properties.ReadOnlyProperty;
  var CssBuilder = $module$kotlin_css.kotlinx.css.CssBuilder_ld8ri9$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var RElementBuilder = $module$kotlin_react_legacy.react.RElementBuilder;
  var RElementBuilderImpl = $module$kotlin_react_legacy.react.RElementBuilderImpl;
  var RDOMBuilder = $module$kotlin_react_dom_legacy.react.dom.RDOMBuilder;
  var RDOMBuilderImpl = $module$kotlin_react_dom_legacy.react.dom.RDOMBuilderImpl;
  var useState = $module$react.useState;
  var clone = $module$kotlin_extensions.kotlinext.js.clone_issdgt$;
  var toString = Kotlin.toString;
  var createElement = $module$react.createElement;
  var forwardRef = $module$kotlin_react_legacy.react.forwardRef_2tjgre$;
  var unboxChar = Kotlin.unboxChar;
  var titlecase = Kotlin.kotlin.text.titlecase_myv2d0$;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var repeat = Kotlin.kotlin.text.repeat_94bcnn$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var Pair_init = Kotlin.kotlin.Pair;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var Throwable = Error;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var reversed = Kotlin.kotlin.ranges.reversed_zf1xzc$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var count = Kotlin.kotlin.collections.count_7wnvza$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var drop = Kotlin.kotlin.collections.drop_ba2ldo$;
  var asList = Kotlin.org.w3c.dom.asList_kt9thq$;
  var appendText = Kotlin.kotlinx.dom.appendText_46n0ku$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  GlobalCssAccess$SheetType.prototype = Object.create(Enum.prototype);
  GlobalCssAccess$SheetType.prototype.constructor = GlobalCssAccess$SheetType;
  StyledElementBuilderImpl.prototype = Object.create(RElementBuilderImpl.prototype);
  StyledElementBuilderImpl.prototype.constructor = StyledElementBuilderImpl;
  StyledDOMBuilderImpl.prototype = Object.create(RDOMBuilderImpl.prototype);
  StyledDOMBuilderImpl.prototype.constructor = StyledDOMBuilderImpl;
  CSSOMPersistentSheet.prototype = Object.create(AbstractSheet.prototype);
  CSSOMPersistentSheet.prototype.constructor = CSSOMPersistentSheet;
  RemoveMode.prototype = Object.create(Enum.prototype);
  RemoveMode.prototype.constructor = RemoveMode;
  CSSOMSheet.prototype = Object.create(AbstractSheet.prototype);
  CSSOMSheet.prototype.constructor = CSSOMSheet;
  DevSheet.prototype = Object.create(AbstractSheet.prototype);
  DevSheet.prototype.constructor = DevSheet;
  RuleType.prototype = Object.create(Enum.prototype);
  RuleType.prototype.constructor = RuleType;
  function GlobalCssAccess() {
    GlobalCssAccess_instance = this;
    this.sheetTypeKey_0 = 'sheetType';
  }
  function GlobalCssAccess$SheetType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function GlobalCssAccess$SheetType_initFields() {
    GlobalCssAccess$SheetType_initFields = function () {
    };
    GlobalCssAccess$SheetType$Dev_instance = new GlobalCssAccess$SheetType('Dev', 0);
    GlobalCssAccess$SheetType$CSSOM_instance = new GlobalCssAccess$SheetType('CSSOM', 1);
  }
  var GlobalCssAccess$SheetType$Dev_instance;
  function GlobalCssAccess$SheetType$Dev_getInstance() {
    GlobalCssAccess$SheetType_initFields();
    return GlobalCssAccess$SheetType$Dev_instance;
  }
  var GlobalCssAccess$SheetType$CSSOM_instance;
  function GlobalCssAccess$SheetType$CSSOM_getInstance() {
    GlobalCssAccess$SheetType_initFields();
    return GlobalCssAccess$SheetType$CSSOM_instance;
  }
  GlobalCssAccess$SheetType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SheetType',
    interfaces: [Enum]
  };
  function GlobalCssAccess$SheetType$values() {
    return [GlobalCssAccess$SheetType$Dev_getInstance(), GlobalCssAccess$SheetType$CSSOM_getInstance()];
  }
  GlobalCssAccess$SheetType.values = GlobalCssAccess$SheetType$values;
  function GlobalCssAccess$SheetType$valueOf(name) {
    switch (name) {
      case 'Dev':
        return GlobalCssAccess$SheetType$Dev_getInstance();
      case 'CSSOM':
        return GlobalCssAccess$SheetType$CSSOM_getInstance();
      default:throwISE('No enum constant styled.GlobalCssAccess.SheetType.' + name);
    }
  }
  GlobalCssAccess$SheetType.valueOf_61zpoe$ = GlobalCssAccess$SheetType$valueOf;
  GlobalCssAccess.prototype.downloadFile_0 = function (blob, name) {
    var binaryData = [];
    binaryData.push(blob);
    var blobUrl = URL.createObjectURL(new Blob(binaryData, {type: 'application/text'}));
    var link = document.createElement('a');
    link.href = blobUrl;
    link.download = name;
    document.body.appendChild(link);
    link.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view: window}));
    document.body.removeChild(link);
  };
  GlobalCssAccess.prototype.downloadCss_0 = function (partialCss, filename) {
    if (partialCss === void 0)
      partialCss = null;
    if (filename === void 0)
      filename = 'index.css';
    this.downloadFile_0(this.getCss_7efafy$(partialCss).join('\n'), filename);
  };
  GlobalCssAccess.prototype.getStylesheet_0 = function () {
    var tmp$;
    for (var i = 0; i < document.styleSheets.length; i++) {
      var node = document.styleSheets[i];
      if (node.ownerNode.id === 'ksc-global-style')
        return node;
    }
    return tmp$;
  };
  GlobalCssAccess.prototype.mapNotNullRules_0 = function (block) {
    var rules = StyledNext.getStylesheet().rules;
    var result = [];
    for (var i = 0; i < rules.length; i++) {
      var value = block(rules[i].cssText);
      if (value != null) {
        result.push(value);
      }}
    return result;
  };
  GlobalCssAccess.prototype.getCss_7efafy$ = function (partialCss) {
    if (partialCss === void 0)
      partialCss = null;
    return StyledNext.mapNotNullRules(function (it) {
      return it.includes(partialCss || '') ? it : null;
    });
  };
  GlobalCssAccess.prototype.useDevSheet_vft4zs$ = function (isDev) {
    if (isDev === void 0)
      isDev = true;
    window.localStorage.setItem(this.sheetTypeKey_0, isDev ? GlobalCssAccess$SheetType$Dev_getInstance().name : GlobalCssAccess$SheetType$CSSOM_getInstance().name);
    window.location.reload();
  };
  GlobalCssAccess.prototype.isDevSheet = function () {
    return equals(window.localStorage.getItem(this.sheetTypeKey_0), GlobalCssAccess$SheetType$Dev_getInstance().name);
  };
  function GlobalCssAccess$setupCssHelperFunctions$lambda$lambda(this$GlobalCssAccess) {
    return function (str) {
      return this$GlobalCssAccess.getCss_7efafy$(str);
    };
  }
  function GlobalCssAccess$setupCssHelperFunctions$lambda$lambda_0(this$GlobalCssAccess) {
    return function () {
      return this$GlobalCssAccess.getStylesheet_0();
    };
  }
  function GlobalCssAccess$setupCssHelperFunctions$lambda$lambda_1(this$GlobalCssAccess) {
    return function (block) {
      return this$GlobalCssAccess.mapNotNullRules_0(block);
    };
  }
  function GlobalCssAccess$setupCssHelperFunctions$lambda$lambda_2(this$GlobalCssAccess) {
    return function (str) {
      this$GlobalCssAccess.downloadCss_0(str);
      return Unit;
    };
  }
  function GlobalCssAccess$setupCssHelperFunctions$lambda$lambda_3(this$GlobalCssAccess) {
    return function (isDev) {
      this$GlobalCssAccess.useDevSheet_vft4zs$(isDev);
      return Unit;
    };
  }
  GlobalCssAccess.prototype.setupCssHelperFunctions_8be2vx$ = function () {
    var tmp$ = window;
    var $receiver = {};
    if (!this.isDevSheet()) {
      $receiver.getCss = GlobalCssAccess$setupCssHelperFunctions$lambda$lambda(this);
      $receiver.getStylesheet = GlobalCssAccess$setupCssHelperFunctions$lambda$lambda_0(this);
      $receiver.mapNotNullRules = GlobalCssAccess$setupCssHelperFunctions$lambda$lambda_1(this);
      $receiver.downloadCss = GlobalCssAccess$setupCssHelperFunctions$lambda$lambda_2(this);
    }$receiver.useDevSheet = GlobalCssAccess$setupCssHelperFunctions$lambda$lambda_3(this);
    tmp$.StyledNext = $receiver;
  };
  GlobalCssAccess.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'GlobalCssAccess',
    interfaces: []
  };
  var GlobalCssAccess_instance = null;
  function GlobalCssAccess_getInstance() {
    if (GlobalCssAccess_instance === null) {
      new GlobalCssAccess();
    }return GlobalCssAccess_instance;
  }
  function animation_0($receiver, duration, timing, delay, iterationCount, direction, fillMode, playState, builder) {
    if (duration === void 0)
      duration = get_s(0);
    if (timing === void 0)
      timing = Timing.Companion.ease;
    if (delay === void 0)
      delay = get_s(0);
    if (iterationCount === void 0)
      iterationCount = get_times(1);
    if (direction === void 0)
      direction = AnimationDirection.normal;
    if (fillMode === void 0)
      fillMode = FillMode.none;
    if (playState === void 0)
      playState = PlayState.running;
    var name = GlobalStyles_getInstance().scheduleToInject_hrs2am$(builder);
    animation($receiver, name, duration, timing, delay, iterationCount, direction, fillMode, playState);
  }
  function UsedCssInfo(className, usedBy, groupId) {
    this.className = className;
    this.usedBy = usedBy;
    this.groupId = groupId;
  }
  UsedCssInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UsedCssInfo',
    interfaces: []
  };
  UsedCssInfo.prototype.component1 = function () {
    return this.className;
  };
  UsedCssInfo.prototype.component2 = function () {
    return this.usedBy;
  };
  UsedCssInfo.prototype.component3 = function () {
    return this.groupId;
  };
  UsedCssInfo.prototype.copy_3m52m6$ = function (className, usedBy, groupId) {
    return new UsedCssInfo(className === void 0 ? this.className : className, usedBy === void 0 ? this.usedBy : usedBy, groupId === void 0 ? this.groupId : groupId);
  };
  UsedCssInfo.prototype.toString = function () {
    return 'UsedCssInfo(className=' + Kotlin.toString(this.className) + (', usedBy=' + Kotlin.toString(this.usedBy)) + (', groupId=' + Kotlin.toString(this.groupId)) + ')';
  };
  UsedCssInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.className) | 0;
    result = result * 31 + Kotlin.hashCode(this.usedBy) | 0;
    result = result * 31 + Kotlin.hashCode(this.groupId) | 0;
    return result;
  };
  UsedCssInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.className, other.className) && Kotlin.equals(this.usedBy, other.usedBy) && Kotlin.equals(this.groupId, other.groupId)))));
  };
  function CssInfo(isFresh, className) {
    this.isFresh = isFresh;
    this.className = className;
  }
  CssInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CssInfo',
    interfaces: []
  };
  CssInfo.prototype.component1 = function () {
    return this.isFresh;
  };
  CssInfo.prototype.component2 = function () {
    return this.className;
  };
  CssInfo.prototype.copy_8kj6y5$ = function (isFresh, className) {
    return new CssInfo(isFresh === void 0 ? this.isFresh : isFresh, className === void 0 ? this.className : className);
  };
  CssInfo.prototype.toString = function () {
    return 'CssInfo(isFresh=' + Kotlin.toString(this.isFresh) + (', className=' + Kotlin.toString(this.className)) + ')';
  };
  CssInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.isFresh) | 0;
    result = result * 31 + Kotlin.hashCode(this.className) | 0;
    return result;
  };
  CssInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.isFresh, other.isFresh) && Kotlin.equals(this.className, other.className)))));
  };
  function injectGlobal(css) {
    GlobalStyles_getInstance().sheet_8be2vx$.scheduleToInject_upaayv$(getCssRules(css, null));
    GlobalStyles_getInstance().injectScheduled();
  }
  var isDevelopment = defineInlineFunction('kotlin-styled-next.styled.isDevelopment_8be2vx$', wrapFunction(function () {
    var throwCCE = Kotlin.throwCCE;
    return function () {
      var tmp$;
      return typeof (tmp$ = process.env.NODE_ENV !== 'production') === 'boolean' ? tmp$ : throwCCE();
    };
  }));
  function GlobalStyles() {
    GlobalStyles_instance = this;
    this.sheet_8be2vx$ = null;
    this.importSheet_8be2vx$ = null;
    var tmp$;
    if ((typeof (tmp$ = process.env.NODE_ENV !== 'production') === 'boolean' ? tmp$ : throwCCE()) && GlobalCssAccess_getInstance().isDevSheet()) {
      this.sheet_8be2vx$ = new DevSheet(RuleType$REGULAR_getInstance());
      this.importSheet_8be2vx$ = new DevSheet(RuleType$IMPORT_getInstance());
    } else {
      this.sheet_8be2vx$ = new CSSOMSheet(RuleType$REGULAR_getInstance());
      this.importSheet_8be2vx$ = new CSSOMPersistentSheet(RuleType$IMPORT_getInstance());
    }
    var tmp$_0;
    if (typeof (tmp$_0 = process.env.NODE_ENV !== 'production') === 'boolean' ? tmp$_0 : throwCCE()) {
      GlobalCssAccess_getInstance().setupCssHelperFunctions_8be2vx$();
    }this.incrementedClassName_vq605l$_0 = 0;
    this.styledClasses_8be2vx$ = LinkedHashMap_init();
    this.scheduledToDelete_8be2vx$ = LinkedHashSet_init();
    this.injectedStyleSheetRules_8be2vx$ = LinkedHashMap_init();
    this.keyframeByName_8be2vx$ = LinkedHashMap_init();
    this.injectedKeyframes_8be2vx$ = LinkedHashMap_init();
  }
  GlobalStyles.prototype.useDevSheet_6taknv$ = function (isDev) {
    if (isDev === void 0)
      isDev = true;
    GlobalCssAccess_getInstance().useDevSheet_vft4zs$(isDev);
  };
  Object.defineProperty(GlobalStyles.prototype, 'incrementedClassName_0', {
    configurable: true,
    get: function () {
      var tmp$;
      return tmp$ = this.incrementedClassName_vq605l$_0, this.incrementedClassName_vq605l$_0 = tmp$ + 1 | 0, tmp$;
    },
    set: function (incrementedClassName) {
      this.incrementedClassName_vq605l$_0 = incrementedClassName;
    }
  });
  GlobalStyles.prototype.injectScheduled = function () {
    this.sheet_8be2vx$.injectScheduled();
    this.importSheet_8be2vx$.injectScheduled();
  };
  GlobalStyles.prototype.scheduleToInject_sjvxug$ = function (selector, css) {
    var $receiver = this.injectedStyleSheetRules_8be2vx$;
    var tmp$;
    if (!(Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(selector)) {
      var groupId = this.sheet_8be2vx$.scheduleToInject_upaayv$(getCssRules(css, selector));
      this.injectedStyleSheetRules_8be2vx$.put_xwzc9p$(selector, groupId);
    }};
  GlobalStyles.prototype.removeInjectedStyleSheet_mhpeer$ = function (selectors) {
    var tmp$;
    if (Kotlin.isType(this.sheet_8be2vx$, CSSOMSheet)) {
      var sheet = Kotlin.isType(tmp$ = this.sheet_8be2vx$, CSSOMSheet) ? tmp$ : throwCCE();
      var destination = ArrayList_init();
      var tmp$_0;
      tmp$_0 = selectors.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        var tmp$_0_0;
        var $receiver = this.injectedStyleSheetRules_8be2vx$.get_11rb$(element);
        this.injectedStyleSheetRules_8be2vx$.remove_11rb$(element);
        if ((tmp$_0_0 = $receiver) != null) {
          destination.add_11rb$(tmp$_0_0);
        }}
      var groups = destination;
      sheet.removeGroups_pqoyrt$(groups);
    }};
  GlobalStyles.prototype.scheduleImports_u18cvv$ = function (imports) {
    var tmp$ = this.importSheet_8be2vx$;
    var destination = ArrayList_init_0(collectionSizeOrDefault(imports, 10));
    var tmp$_0;
    tmp$_0 = imports.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(item.build());
    }
    tmp$.scheduleToInject_upaayv$(destination);
  };
  GlobalStyles.prototype.scheduleToInject_hrs2am$ = function (builder) {
    var tmp$;
    var $receiver = KeyframesBuilder();
    builder($receiver);
    var keyframes = $receiver;
    var keyframe = this.injectedKeyframes_8be2vx$.get_11rb$(keyframes);
    if (keyframe == null) {
      var keyframeName = 'ksc-keyframe-' + this.incrementedClassName_0;
      var css = keyframes.toString();
      var prefixes = listOf(['@-webkit-keyframes', '@keyframes']);
      var tmp$_0 = this.sheet_8be2vx$;
      var destination = ArrayList_init_0(collectionSizeOrDefault(prefixes, 10));
      var tmp$_1;
      tmp$_1 = prefixes.iterator();
      while (tmp$_1.hasNext()) {
        var item = tmp$_1.next();
        destination.add_11rb$(item + ' ' + keyframeName + ' { ' + css + ' }');
      }
      var groupId = tmp$_0.scheduleToInject_upaayv$(destination);
      var $receiver_0 = this.injectedKeyframes_8be2vx$;
      var value = new UsedCssInfo(keyframeName, 0, groupId);
      $receiver_0.put_xwzc9p$(keyframes, value);
      this.keyframeByName_8be2vx$.put_xwzc9p$(keyframeName, keyframes);
      tmp$ = keyframeName;
    } else
      tmp$ = keyframe.className;
    return tmp$;
  };
  function GlobalStyles$removeStyles$lambda(closure$cssomSheet, this$GlobalStyles) {
    return function () {
      this$GlobalStyles.clean_0(closure$cssomSheet);
      return Unit;
    };
  }
  GlobalStyles.prototype.removeStyles_3iuu1j$ = function (css) {
    var tmp$;
    var cssomSheet = this.sheet_8be2vx$;
    if (!Kotlin.isType(cssomSheet, CSSOMSheet))
      return;
    tmp$ = this.styledClasses_8be2vx$.get_11rb$(css);
    if (tmp$ == null) {
      throw IllegalStateException_init('Trying to remove non-existent css');
    }var info = tmp$;
    info.usedBy = info.usedBy - 1 | 0;
    if (info.usedBy === 0) {
      this.scheduledToDelete_8be2vx$.add_11rb$(css);
    }cssomSheet.requestClean_o14v8n$(GlobalStyles$removeStyles$lambda(cssomSheet, this));
  };
  GlobalStyles.prototype.clean_0 = function (sheet) {
    var $receiver = this.scheduledToDelete_8be2vx$;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var tmp$_1;
      tmp$_1 = this.styledClasses_8be2vx$.get_11rb$(item);
      if (tmp$_1 == null) {
        throw IllegalStateException_init('Non-existent css cleanup');
      }if (tmp$_1.usedBy === 0) {
        this.styledClasses_8be2vx$.remove_11rb$(item);
      }tmp$_0.call(destination, tmp$_1);
    }
    var toRemove = destination;
    var destination_0 = ArrayList_init();
    var tmp$_2;
    tmp$_2 = toRemove.iterator();
    while (tmp$_2.hasNext()) {
      var element = tmp$_2.next();
      if (element.usedBy === 0)
        destination_0.add_11rb$(element);
    }
    var destination_1 = ArrayList_init_0(collectionSizeOrDefault(destination_0, 10));
    var tmp$_3;
    tmp$_3 = destination_0.iterator();
    while (tmp$_3.hasNext()) {
      var item_0 = tmp$_3.next();
      destination_1.add_11rb$(item_0.groupId);
    }
    var removalGroups = destination_1;
    sheet.removeGroups_pqoyrt$(removalGroups);
    this.scheduledToDelete_8be2vx$.clear();
  };
  GlobalStyles.prototype.getInjectedClassNames_3iuu1j$ = function (css) {
    var tmp$;
    var info = this.styledClasses_8be2vx$.get_11rb$(css);
    if (info != null) {
      info.usedBy = info.usedBy + 1 | 0;
      tmp$ = new CssInfo(false, info.className);
    } else {
      var className = 'ksc-' + this.incrementedClassName_0;
      var selector = '.' + className;
      var rules = getCssRules(css, selector);
      var groupId = this.sheet_8be2vx$.scheduleToInject_upaayv$(rules);
      var $receiver = this.styledClasses_8be2vx$;
      var value = new UsedCssInfo(className, 1, groupId);
      $receiver.put_xwzc9p$(css, value);
      tmp$ = new CssInfo(true, className);
    }
    return tmp$;
  };
  GlobalStyles.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'GlobalStyles',
    interfaces: []
  };
  var GlobalStyles_instance = null;
  function GlobalStyles_getInstance() {
    if (GlobalStyles_instance === null) {
      new GlobalStyles();
    }return GlobalStyles_instance;
  }
  function inlineStyles($receiver, prefix, builder) {
    if (prefix === void 0)
      prefix = true;
    var styles = StyledElement();
    builder(styles);
    setProp($receiver, 'style', toStyle(styles, prefix));
  }
  function toStyle($receiver, prefix_0) {
    if (prefix_0 === void 0)
      prefix_0 = true;
    var tmp$;
    var res = mapToObj($receiver.declarations);
    if (!prefix_0) {
      return res;
    }var prefixed = Kotlin.isType(tmp$ = prefix(res), Object) ? tmp$ : throwCCE();
    var $receiver_0 = Object.keys(prefixed);
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver_0.length; ++tmp$_0) {
      var element_0 = $receiver_0[tmp$_0];
      if (prefixed.hasOwnProperty(element_0)) {
        var value = prefixed[element_0];
        if (Kotlin.isType(value, Array)) {
          var displayValue = value.find(function (element) {
            return !element.startsWith('-');
          });
          prefixed[element_0] = displayValue;
        }}}
    return prefixed;
  }
  function mapToObj($receiver) {
    var $receiver_0 = {};
    var res = $receiver_0;
    var tmp$;
    tmp$ = $receiver.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var key = element.key;
      var value = element.value;
      var tmp$_0;
      if (typeof value === 'string' || Kotlin.isNumber(value))
        tmp$_0 = value;
      else
        tmp$_0 = value.toString();
      res[key] = tmp$_0;
    }
    return res;
  }
  function buildPrefixedString($receiver, indent) {
    if (indent === void 0)
      indent = '';
    var tmp$;
    var res = mapToObj($receiver);
    var prefixed = Kotlin.isType(tmp$ = prefix(res), Object) ? tmp$ : throwCCE();
    var $receiver_0 = StringBuilder_init();
    var $receiver_1 = Object.keys(prefixed);
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver_1.length; ++tmp$_0) {
      var element = $receiver_1[tmp$_0];
      var tmp$_1, tmp$_2;
      var value = prefixed[element];
      if (Kotlin.isType(value, Array)) {
        tmp$_2 = typeof (tmp$_1 = value.length) === 'number' ? tmp$_1 : throwCCE();
        for (var i = 0; i < tmp$_2; i++) {
          var value_0 = indent + hyphenize(element) + ': ' + value[i].toString() + ';';
          $receiver_0.append_pdl1vj$(value_0).append_s8itvh$(10);
        }
      } else {
        var value_1 = indent + hyphenize(element) + ': ' + value.toString() + ';';
        $receiver_0.append_pdl1vj$(value_1).append_s8itvh$(10);
      }
    }
    return $receiver_0.toString();
  }
  function useStructMemo(dependencies, callback) {
    return rawUseMemo(getMemoizedCallback(dependencies, callback), dependencies);
  }
  function useCustomInsertionEffect(dependencies, effect) {
    if ($module$react_0.useInsertionEffect != undefined) {
      useInsertionEffect(dependencies.slice(), effect);
    } else {
      useLayoutEffect(dependencies.slice(), effect);
    }
  }
  function MemoizedResult(args, value, cleanups) {
    this.args = args;
    this.value = value;
    this.cleanups = cleanups;
  }
  MemoizedResult.prototype.cleanup = function () {
    var $receiver = this.cleanups;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      element();
    }
  };
  MemoizedResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MemoizedResult',
    interfaces: []
  };
  MemoizedResult.prototype.component1 = function () {
    return this.args;
  };
  MemoizedResult.prototype.component2 = function () {
    return this.value;
  };
  MemoizedResult.prototype.component3 = function () {
    return this.cleanups;
  };
  MemoizedResult.prototype.copy_ig03ck$ = function (args, value, cleanups) {
    return new MemoizedResult(args === void 0 ? this.args : args, value === void 0 ? this.value : value, cleanups === void 0 ? this.cleanups : cleanups);
  };
  MemoizedResult.prototype.toString = function () {
    return 'MemoizedResult(args=' + Kotlin.toString(this.args) + (', value=' + Kotlin.toString(this.value)) + (', cleanups=' + Kotlin.toString(this.cleanups)) + ')';
  };
  MemoizedResult.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.args) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    result = result * 31 + Kotlin.hashCode(this.cleanups) | 0;
    return result;
  };
  MemoizedResult.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.args, other.args) && Kotlin.equals(this.value, other.value) && Kotlin.equals(this.cleanups, other.cleanups)))));
  };
  function runCallback($receiver, callback, args) {
    var tmp$;
    if ((tmp$ = $receiver.current) != null) {
      if (argsEqual(tmp$, args))
        return tmp$.value;
    }var cleanups = [];
    var $receiver_0 = callback();
    $receiver.current = new MemoizedResult(args, $receiver_0, cleanups);
    return $receiver_0;
  }
  function getMemoizedCallback$lambda(closure$prevResultRef, closure$callback, closure$args) {
    return function () {
      return runCallback(closure$prevResultRef, closure$callback, closure$args);
    };
  }
  function getMemoizedCallback(args, callback) {
    var prevResultRef = useRef(null);
    return getMemoizedCallback$lambda(prevResultRef, callback, args);
  }
  function argsEqual($receiver, args) {
    if ($receiver == null)
      return false;
    if ($receiver.args.length !== args.length) {
      var tmp$;
      if (typeof (tmp$ = process.env.NODE_ENV !== 'production') === 'boolean' ? tmp$ : throwCCE())
        console.warn('Calling useEffect with different number of dependencies: ' + joinToString($receiver.args) + ' and ' + joinToString(args));
      return false;
    }var index = {v: -1};
    var $receiver_0 = $receiver.args;
    var all$result;
    all$break: do {
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== $receiver_0.length; ++tmp$_0) {
        var element = $receiver_0[tmp$_0];
        index.v = index.v + 1 | 0;
        var newArg = args[index.v];
        if (!equals(element, newArg)) {
          all$result = false;
          break all$break;
        }}
      all$result = true;
    }
     while (false);
    return all$result;
  }
  function Import(url, types) {
    if (types === void 0) {
      types = emptyList();
    }this.url_0 = url;
    this.types_0 = types;
  }
  Import.prototype.build = function () {
    return '@import ' + this.url_0 + joinToString_0(this.types_0, void 0, ' ') + ';';
  };
  Import.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Import',
    interfaces: []
  };
  function StyleSheet(name, isStatic, imports) {
    if (isStatic === void 0)
      isStatic = false;
    if (imports === void 0)
      imports = emptyList();
    this.name = name;
    this.isStatic = isStatic;
    this.imports_8be2vx$ = imports;
    this.holders_q142jc$_0 = ArrayList_init();
  }
  StyleSheet.prototype.css_uisso7$ = function (parents, builder) {
    var $receiver = new CssHolder(this, parents.concat([builder]));
    this.addCssHolder_jwasi7$($receiver);
    return $receiver;
  };
  StyleSheet.prototype.addCssHolder_jwasi7$ = function (holder) {
    this.holders_q142jc$_0.add_11rb$(holder);
  };
  StyleSheet.prototype.inject = function () {
    this.scheduleToInject_3fmxri$_0();
    GlobalStyles_getInstance().injectScheduled();
  };
  StyleSheet.prototype.scheduleImports_8be2vx$ = function () {
    if (!this.imports_8be2vx$.isEmpty()) {
      GlobalStyles_getInstance().scheduleImports_u18cvv$(this.imports_8be2vx$);
      this.imports_8be2vx$ = emptyList();
    }};
  StyleSheet.prototype.scheduleToInject_3fmxri$_0 = function () {
    this.scheduleImports_8be2vx$();
    var tmp$;
    tmp$ = this.holders_q142jc$_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.scheduleToInject();
    }
  };
  StyleSheet.prototype.scheduleToInject_61zpoe$ = function (className) {
    var tmp$;
    tmp$ = this.holders_q142jc$_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.scheduleToInject_61zpoe$(className);
    }
  };
  StyleSheet.prototype.removeInjected = function () {
    var tmp$;
    tmp$ = this.holders_q142jc$_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.removeInjected();
    }
  };
  StyleSheet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StyleSheet',
    interfaces: []
  };
  function StyleSheet_init(name, parent, isStatic, $this) {
    if (isStatic === void 0)
      isStatic = false;
    $this = $this || Object.create(StyleSheet.prototype);
    StyleSheet.call($this, parent.name + '-' + name, isStatic);
    return $this;
  }
  function CssHolder(sheet, ruleSets) {
    this.sheet_0 = sheet;
    this.ruleSets_0 = ruleSets;
    this.classNamesToInject_0 = LinkedHashMap_init();
    this.css_8exkxd$_0 = lazy(CssHolder$css$lambda(this));
  }
  Object.defineProperty(CssHolder.prototype, 'css', {
    configurable: true,
    get: function () {
      return this.css_8exkxd$_0.value;
    }
  });
  CssHolder.prototype.scheduleToInject_61zpoe$ = function (className) {
    if (this.classNamesToInject_0.get_11rb$(className) === true) {
      this.classNamesToInject_0.put_xwzc9p$(className, false);
      GlobalStyles_getInstance().scheduleToInject_sjvxug$('.' + className, this.css);
    }};
  CssHolder.prototype.removeInjected = function () {
    var tmp$ = GlobalStyles_getInstance();
    var $receiver = this.classNamesToInject_0;
    var destination = ArrayList_init_0($receiver.size);
    var tmp$_0;
    tmp$_0 = $receiver.entries.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      var tmp$_1 = destination.add_11rb$;
      var className = item.key;
      tmp$_1.call(destination, '.' + className);
    }
    tmp$.removeInjectedStyleSheet_mhpeer$(destination);
  };
  CssHolder.prototype.scheduleToInject = function () {
    var tmp$;
    tmp$ = this.classNamesToInject_0.keys.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.scheduleToInject_61zpoe$(element);
    }
  };
  function CssHolder$provideDelegate$lambda$lambda(this$CssHolder, closure$className, closure$property) {
    return function ($receiver) {
      this$CssHolder.sheet_0.scheduleImports_8be2vx$();
      if (this$CssHolder.sheet_0.isStatic) {
        this$CssHolder.scheduleToInject_61zpoe$(closure$className);
        $receiver.unaryPlus_pdl1vz$(closure$className);
      }if (!this$CssHolder.sheet_0.isStatic || !$receiver.allowClasses || $receiver.isHolder) {
        $receiver.styleName.add_11rb$(getClassName_0(this$CssHolder.sheet_0, closure$property));
        var $receiver_0 = this$CssHolder.ruleSets_0;
        var tmp$;
        for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
          var element = $receiver_0[tmp$];
          element($receiver);
        }
      }return Unit;
    };
  }
  function CssHolder$provideDelegate$lambda(this$CssHolder, closure$className) {
    return function (f, property) {
      return CssHolder$provideDelegate$lambda$lambda(this$CssHolder, closure$className, property);
    };
  }
  CssHolder.prototype.provideDelegate_n5byny$ = function (thisRef, providingProperty) {
    var className = getClassName_0(this.sheet_0, providingProperty);
    this.classNamesToInject_0.put_xwzc9p$(className, true);
    return new ReadOnlyProperty(CssHolder$provideDelegate$lambda(this, className));
  };
  function CssHolder$css$lambda(this$CssHolder) {
    return function () {
      var $receiver = CssBuilder(void 0, false);
      var $receiver_0 = this$CssHolder.ruleSets_0;
      var destination = ArrayList_init_0($receiver_0.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var item = $receiver_0[tmp$];
        var tmp$_0 = destination.add_11rb$;
        item($receiver);
        tmp$_0.call(destination, Unit);
      }
      return $receiver;
    };
  }
  CssHolder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CssHolder',
    interfaces: []
  };
  function getClassName$lambda$lambda(closure$className, this$getClassName) {
    return function (it) {
      this$getClassName.scheduleToInject_61zpoe$(closure$className);
      GlobalStyles_getInstance().injectScheduled();
      return Unit;
    };
  }
  function getClassName($receiver, getClass) {
    var $receiver_0 = getClassName_0($receiver, getClass($receiver));
    Promise.resolve(Unit).then(getClassName$lambda$lambda($receiver_0, $receiver));
    return $receiver_0;
  }
  function getClassName_0($receiver, property) {
    return $receiver.name + '-' + property.callableName;
  }
  function getClassSelector($receiver, getClass) {
    return '.' + getClassName($receiver, getClass);
  }
  function cssMarker$lambda($receiver) {
    return Unit;
  }
  function cssMarker($receiver) {
    var $receiver_0 = new CssHolder($receiver, [cssMarker$lambda]);
    $receiver.addCssHolder_jwasi7$($receiver_0);
    return $receiver_0;
  }
  var forwardCss = defineInlineFunction('kotlin-styled-next.styled.forwardCss_ckjb8o$', function ($receiver, builder) {
    var tmp$;
    if ((tmp$ = $receiver.css) != null) {
      builder.append_5cyqpy$(tmp$);
    }});
  var forwardCss_0 = defineInlineFunction('kotlin-styled-next.styled.forwardCss_hrqukv$', wrapFunction(function () {
    var CssBuilder = _.$$importsForInline$$['kotlin-css'].kotlinx.css.CssBuilder_ld8ri9$;
    return function ($receiver, props) {
      var tmp$;
      if ((tmp$ = $receiver.css) != null) {
        var tmp$_0;
        var $receiver_0 = (tmp$_0 = props.css) != null ? tmp$_0 : CssBuilder(void 0, void 0, void 0, true);
        $receiver_0.append_5cyqpy$(tmp$);
        props.css = $receiver_0;
      }};
  }));
  function StyledBuilder() {
  }
  StyledBuilder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'StyledBuilder',
    interfaces: []
  };
  var css = defineInlineFunction('kotlin-styled-next.styled.css_vpie0h$', function ($receiver, handler) {
    handler($receiver.css);
  });
  function StyledElementBuilder() {
    StyledElementBuilder$Companion_getInstance();
  }
  function StyledElementBuilder$Companion() {
    StyledElementBuilder$Companion_instance = this;
  }
  StyledElementBuilder$Companion.prototype.invoke_k87xji$ = function (type, attrs) {
    if (attrs === void 0) {
      attrs = {};
    }return new StyledElementBuilderImpl(type, attrs);
  };
  StyledElementBuilder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var StyledElementBuilder$Companion_instance = null;
  function StyledElementBuilder$Companion_getInstance() {
    if (StyledElementBuilder$Companion_instance === null) {
      new StyledElementBuilder$Companion();
    }return StyledElementBuilder$Companion_instance;
  }
  StyledElementBuilder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'StyledElementBuilder',
    interfaces: [StyledBuilder, RElementBuilder]
  };
  function StyledElementBuilderImpl(type, attrs) {
    if (attrs === void 0) {
      attrs = {};
    }RElementBuilderImpl.call(this, attrs);
    this.type_j70h7l$_0 = type;
    this.css_l8ze94$_0 = CssBuilder();
  }
  Object.defineProperty(StyledElementBuilderImpl.prototype, 'type', {
    get: function () {
      return this.type_j70h7l$_0;
    }
  });
  Object.defineProperty(StyledElementBuilderImpl.prototype, 'css', {
    configurable: true,
    get: function () {
      return this.css_l8ze94$_0;
    }
  });
  StyledElementBuilderImpl.prototype.create = function () {
    return Styled_getInstance().createElement_ji6hf8$(this.type, this.css, this.attrs, this.childList);
  };
  StyledElementBuilderImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StyledElementBuilderImpl',
    interfaces: [RElementBuilderImpl, StyledElementBuilder]
  };
  function StyledDOMBuilder() {
    StyledDOMBuilder$Companion_getInstance();
  }
  Object.defineProperty(StyledDOMBuilder.prototype, 'type', {
    configurable: true,
    get: function () {
      return this.attrs.tagName;
    }
  });
  StyledDOMBuilder.prototype.create = function () {
    return Styled_getInstance().createElement_ji6hf8$(this.type, this.css, this.domProps, this.childList);
  };
  function StyledDOMBuilder$Companion() {
    StyledDOMBuilder$Companion_instance = this;
  }
  StyledDOMBuilder$Companion.prototype.invoke_f6ihu2$ = function (factory) {
    return new StyledDOMBuilderImpl(factory);
  };
  StyledDOMBuilder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var StyledDOMBuilder$Companion_instance = null;
  function StyledDOMBuilder$Companion_getInstance() {
    if (StyledDOMBuilder$Companion_instance === null) {
      new StyledDOMBuilder$Companion();
    }return StyledDOMBuilder$Companion_instance;
  }
  StyledDOMBuilder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'StyledDOMBuilder',
    interfaces: [StyledBuilder, RDOMBuilder]
  };
  function StyledDOMBuilderImpl(factory) {
    RDOMBuilderImpl.call(this, factory);
    this.css_sotjku$_0 = CssBuilder();
  }
  Object.defineProperty(StyledDOMBuilderImpl.prototype, 'css', {
    configurable: true,
    get: function () {
      return this.css_sotjku$_0;
    }
  });
  StyledDOMBuilderImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StyledDOMBuilderImpl',
    interfaces: [RDOMBuilderImpl, StyledDOMBuilder]
  };
  function styled$lambda(closure$type) {
    return function ($receiver, handler) {
      var $receiver_0 = StyledElementBuilder$Companion_getInstance().invoke_k87xji$(closure$type);
      handler($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
      return Unit;
    };
  }
  function styled(type) {
    return styled$lambda(type);
  }
  var css_0 = defineInlineFunction('kotlin-styled-next.styled.css_nqyh8f$', wrapFunction(function () {
    var CssBuilder = _.$$importsForInline$$['kotlin-css'].kotlinx.css.CssBuilder_ld8ri9$;
    return function ($receiver, handler) {
      var tmp$;
      var $receiver_0 = (tmp$ = $receiver.css) != null ? tmp$ : CssBuilder(void 0, void 0, void 0, true);
      handler($receiver_0);
      $receiver.css = $receiver_0;
    };
  }));
  var css_1 = defineInlineFunction('kotlin-styled-next.styled.css_akzz26$', wrapFunction(function () {
    var CssBuilder = _.$$importsForInline$$['kotlin-css'].kotlinx.css.CssBuilder_ld8ri9$;
    return function ($receiver, handler) {
      var $receiver_0 = $receiver.attrs;
      var tmp$;
      var $receiver_1 = (tmp$ = $receiver_0.css) != null ? tmp$ : CssBuilder(void 0, void 0, void 0, true);
      handler($receiver_1);
      $receiver_0.css = $receiver_1;
    };
  }));
  function customStyled$lambda$lambda(closure$css, closure$generatedClasses, closure$type) {
    return function () {
      var $receiver = GlobalStyles_getInstance().getInjectedClassNames_3iuu1j$(closure$css);
      var closure$generatedClasses_0 = closure$generatedClasses;
      var closure$type_0 = closure$type;
      var selfClassName = $receiver.component2();
      closure$generatedClasses_0 != null ? (checkGeneratedCss(closure$generatedClasses_0, selfClassName, closure$type_0.toString()), Unit) : null;
      return $receiver;
    };
  }
  function customStyled$lambda$lambda$lambda(closure$css) {
    return function () {
      GlobalStyles_getInstance().removeStyles_3iuu1j$(closure$css);
      return Unit;
    };
  }
  function customStyled$lambda$lambda_0(closure$isFresh, closure$css) {
    return function ($receiver) {
      if (closure$isFresh.v) {
        GlobalStyles_getInstance().injectScheduled();
      }var block = customStyled$lambda$lambda$lambda(closure$css);
      $receiver.push(block);
      return Unit;
    };
  }
  function customStyled$lambda$lambda_1($receiver) {
    GlobalStyles_getInstance().injectScheduled();
    return Unit;
  }
  function customStyled$lambda(closure$type) {
    return function ($receiver, props, rRef) {
      var css = props.css;
      var classes = props.classes;
      var tmp$;
      var generatedClasses = (typeof (tmp$ = process.env.NODE_ENV !== 'production') === 'boolean' ? tmp$ : throwCCE()) ? useState(HashSet_init()) : null;
      var tmp$_0 = useStructMemo([css], customStyled$lambda$lambda(css, generatedClasses, closure$type));
      var isFresh = {v: tmp$_0.component1()}
      , className = tmp$_0.component2();
      useCustomInsertionEffect([isFresh.v, className], customStyled$lambda$lambda_0(isFresh, css));
      useCustomInsertionEffect([classes], customStyled$lambda$lambda_1);
      var newProps = clone(props);
      if (classes.length > 0) {
        className = className + ' ' + classes;
      }if (!equals(props.className, undefined)) {
        className = toString(props.className) + ' ' + className;
      }newProps.className = className;
      newProps.ref = rRef;
      delete(newProps.css);
      delete(newProps.classes);
      $receiver.child_30b5ua$(createElement(closure$type, newProps));
      return Unit;
    };
  }
  function customStyled(type) {
    var fc = forwardRef(customStyled$lambda(type));
    var $receiver = type.toString();
    fc.displayName = 'styled' + ($receiver.length > 0 ? titlecase(unboxChar(toBoxedChar($receiver.charCodeAt(0)))).toString() + $receiver.substring(1) : $receiver);
    return fc;
  }
  function checkGeneratedCss($receiver, className, type) {
    var classes = $receiver[0];
    var setClasses = $receiver[1];
    if (classes == null)
      return;
    var maxStylesForElement = 50;
    var size = classes.size;
    classes.add_11rb$(className);
    if (classes.size > maxStylesForElement) {
      console.warn('Over ' + maxStylesForElement + ' were generated for ' + type + '. Consider using inline styles for frequently changed styles:' + '\n' + '\n' + 'styledDiv {\n' + '    inlineStyles {\n' + '        width = 100.px\n' + '        backgroundColor = Color.blue\n' + '    }\n' + '}\n');
      setClasses(null);
    } else {
      if (size !== classes.size) {
        setClasses(classes);
      }}
  }
  function toClassName($receiver) {
    return joinToString_0($receiver, ' ');
  }
  function Styled() {
    Styled_instance = this;
    this.cache_0 = LinkedHashMap_init();
  }
  Styled.prototype.wrap_0 = function (type) {
    var $receiver = this.cache_0;
    var tmp$;
    var value = $receiver.get_11rb$(type);
    if (value == null) {
      var answer = customStyled(type);
      $receiver.put_xwzc9p$(type, answer);
      tmp$ = answer;
    } else {
      tmp$ = value;
    }
    return tmp$;
  };
  Styled.prototype.createElement_ji6hf8$ = function (type, css, props, children) {
    var wrappedType = this.wrap_0(type);
    var styledProps = props;
    styledProps.css = css;
    styledProps.classes = toClassName(css.classes);
    return createElement.apply(null, [wrappedType, styledProps].concat(copyToArray(children)));
  };
  Styled.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Styled',
    interfaces: []
  };
  var Styled_instance = null;
  function Styled_getInstance() {
    if (Styled_instance === null) {
      new Styled();
    }return Styled_instance;
  }
  function withMedia(selector) {
    var tmp$;
    return startsWith(trim(Kotlin.isCharSequence(tmp$ = selector) ? tmp$ : throwCCE()).toString(), '@media');
  }
  function withContainer(selector) {
    var tmp$;
    return startsWith(trim(Kotlin.isCharSequence(tmp$ = selector) ? tmp$ : throwCCE()).toString(), '@container');
  }
  function withAmpersand(selector) {
    return contains(selector, '&');
  }
  function withFontFace(selector) {
    var tmp$;
    return startsWith(trim(Kotlin.isCharSequence(tmp$ = selector) ? tmp$ : throwCCE()).toString(), '@font-face');
  }
  function withSupports(selector) {
    var tmp$;
    return startsWith(trim(Kotlin.isCharSequence(tmp$ = selector) ? tmp$ : throwCCE()).toString(), '@supports');
  }
  function withCustomHandle(selector) {
    return withMedia(selector) || withContainer(selector) || withSupports(selector) || withAmpersand(selector) || withFontFace(selector);
  }
  function getCssRules($receiver, outerSelector, indent) {
    if (indent === void 0)
      indent = '';
    var declarationBlock = buildPrefixedString($receiver.declarations, '  ');
    var result = ArrayList_init();
    var $receiver_0 = plus($receiver.rules, $receiver.multiRules);
    var tmp$;
    var first = ArrayList_init();
    var second = ArrayList_init();
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (!withCustomHandle(element.selector)) {
        first.add_11rb$(element);
      } else {
        second.add_11rb$(element);
      }
    }
    var tmp$_0 = new Pair_init(first, second);
    var rules = tmp$_0.component1()
    , handleRules = tmp$_0.component2();
    if (declarationBlock.length > 0 && outerSelector != null) {
      var $receiver_1 = StringBuilder_init();
      var value = indent + toString(outerSelector) + ' {';
      $receiver_1.append_pdl1vj$(value).append_s8itvh$(10);
      $receiver_1.append_pdl1vj$(declarationBlock);
      var value_0 = indent + '}';
      $receiver_1.append_pdl1vj$(value_0).append_s8itvh$(10);
      result.add_11rb$($receiver_1.toString());
    }result.addAll_brywnq$(buildRules(rules, outerSelector != null ? outerSelector : ''));
    var tmp$_1;
    tmp$_1 = handleRules.iterator();
    while (tmp$_1.hasNext()) {
      var element_0 = tmp$_1.next();
      var selector = element_0.component1()
      , css = element_0.component4();
      var resolvedSelector = resolveRelative(selector, outerSelector);
      if (withMedia(resolvedSelector)) {
        var $receiver_2 = StringBuilder_init();
        var value_1 = indent + selector + ' {';
        $receiver_2.append_pdl1vj$(value_1).append_s8itvh$(10);
        var tmp$_2;
        tmp$_2 = getCssRules(css, outerSelector, '  ' + indent).iterator();
        while (tmp$_2.hasNext()) {
          var element_1 = tmp$_2.next();
          $receiver_2.append_pdl1vj$(element_1).append_s8itvh$(10);
        }
        var value_2 = indent + '}';
        $receiver_2.append_pdl1vj$(value_2).append_s8itvh$(10);
        result.add_11rb$($receiver_2.toString());
      } else if (withContainer(resolvedSelector) || withSupports(resolvedSelector)) {
        var $receiver_3 = StringBuilder_init();
        $receiver_3.append_pdl1vj$(indent + selector + ' {' + '\n');
        var tmp$_3;
        tmp$_3 = getCssRules(css, '  ' + indent).iterator();
        while (tmp$_3.hasNext()) {
          var element_2 = tmp$_3.next();
          $receiver_3.append_pdl1vj$(element_2).append_s8itvh$(10);
        }
        $receiver_3.append_pdl1vj$(indent + '}' + '\n');
        result.add_11rb$($receiver_3.toString());
      } else {
        result.addAll_brywnq$(getCssRules(css, resolvedSelector));
      }
    }
    return result;
  }
  function resolveExponential($receiver, parentSelector) {
    if (contains($receiver, '&&')) {
      var $receiver_0 = split(parentSelector, ['.']);
      var destination = ArrayList_init();
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.length > 0)
          destination.add_11rb$(element);
      }
      var classes = destination;
      if (classes.size > 1 && toSet(classes).size === 1) {
        var repeated = repeat('.' + first(classes), classes.size + 1 | 0);
        return replace($receiver, '&&', repeated);
      }}return $receiver;
  }
  function resolveRelative$lambda(closure$selector) {
    return function (it) {
      var tmp$;
      var part = trim(Kotlin.isCharSequence(tmp$ = it) ? tmp$ : throwCCE()).toString();
      return replace(resolveExponential(closure$selector, part), '&', part);
    };
  }
  function resolveRelative(selector, parentSelector) {
    if (parentSelector == null)
      return selector;
    return joinToString_0(split(parentSelector, [',']), void 0, void 0, void 0, void 0, void 0, resolveRelative$lambda(selector));
  }
  function isPseudoClass(selector) {
    var tmp$;
    return startsWith(trim(Kotlin.isCharSequence(tmp$ = selector) ? tmp$ : throwCCE()).toString(), ':');
  }
  function buildRules$lambda$lambda(closure$outerSelector, closure$delimiter) {
    return function (it) {
      var tmp$;
      return closure$outerSelector + closure$delimiter + trim(Kotlin.isCharSequence(tmp$ = it) ? tmp$ : throwCCE()).toString();
    };
  }
  function buildRules(rules, outerSelector) {
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = rules.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var selector = element.component1()
      , css = element.component4();
      var delimiter = isPseudoClass(selector) ? '' : ' ';
      var list = getCssRules(css, joinToString_0(split(selector, [',']), void 0, void 0, void 0, void 0, void 0, buildRules$lambda$lambda(outerSelector, delimiter)));
      addAll(destination, list);
    }
    return destination;
  }
  var styledTag = defineInlineFunction('kotlin-styled-next.styled.styledTag_8tb0c0$', wrapFunction(function () {
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    return function ($receiver, block, factory) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(factory);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledHtml = defineInlineFunction('kotlin-styled-next.styled.styledHtml_ke3yi3$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var HTML_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.HTML;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledHtml$lambda(it) {
      return new HTML_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledHtml$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledBase = defineInlineFunction('kotlin-styled-next.styled.styledBase_1upga7$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var BASE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BASE;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledBase$lambda(it) {
      return new BASE_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledBase$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledHead = defineInlineFunction('kotlin-styled-next.styled.styledHead_pxbiyo$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var HEAD_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.HEAD;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledHead$lambda(it) {
      return new HEAD_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledHead$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledLink = defineInlineFunction('kotlin-styled-next.styled.styledLink_w1nb4n$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var LINK_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.LINK;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledLink$lambda(closure$href, closure$rel, closure$type) {
      return function (it) {
        return new LINK_init(attributesMapOf(['href', closure$href, 'rel', closure$rel, 'type', closure$type]), it);
      };
    }
    return function ($receiver, href, rel, type, block) {
      if (href === void 0)
        href = null;
      if (rel === void 0)
        rel = null;
      if (type === void 0)
        type = null;
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledLink$lambda(href, rel, type));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledMeta = defineInlineFunction('kotlin-styled-next.styled.styledMeta_1zzqmz$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var META_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.META;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledMeta$lambda(closure$name, closure$content) {
      return function (it) {
        return new META_init(attributesMapOf(['name', closure$name, 'content', closure$content]), it);
      };
    }
    return function ($receiver, name, content, block) {
      if (name === void 0)
        name = null;
      if (content === void 0)
        content = null;
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledMeta$lambda(name, content));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledStyle = defineInlineFunction('kotlin-styled-next.styled.styledStyle_xoe246$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var STYLE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.STYLE;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledStyle$lambda(closure$type) {
      return function (it) {
        return new STYLE_init(attributesMapOf('type', closure$type), it);
      };
    }
    return function ($receiver, type, content) {
      if (type === void 0)
        type = null;
      if (content === void 0)
        content = '';
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledStyle$lambda(type));
      $receiver_0.unaryPlus_pdl1vz$(content);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledStyle_0 = defineInlineFunction('kotlin-styled-next.styled.styledStyle_ligb9c$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var STYLE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.STYLE;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledStyle$lambda(closure$type) {
      return function (it) {
        return new STYLE_init(attributesMapOf('type', closure$type), it);
      };
    }
    return function ($receiver, type, block) {
      if (type === void 0)
        type = null;
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledStyle$lambda(type));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledTitle = defineInlineFunction('kotlin-styled-next.styled.styledTitle_hw0qe1$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var TITLE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TITLE;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledTitle$lambda(it) {
      return new TITLE_init(html.emptyMap, it);
    }
    return function ($receiver, content) {
      if (content === void 0)
        content = '';
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTitle$lambda);
      $receiver_0.unaryPlus_pdl1vz$(content);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledTitle_0 = defineInlineFunction('kotlin-styled-next.styled.styledTitle_ysxh38$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var TITLE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TITLE;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledTitle$lambda(it) {
      return new TITLE_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTitle$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledBody = defineInlineFunction('kotlin-styled-next.styled.styledBody_na2bsy$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var BODY_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BODY;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledBody$lambda(it) {
      return new BODY_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledBody$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledAddress = defineInlineFunction('kotlin-styled-next.styled.styledAddress_vixkf4$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var ADDRESS_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.ADDRESS;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledAddress$lambda(it) {
      return new ADDRESS_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledAddress$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledArticle = defineInlineFunction('kotlin-styled-next.styled.styledArticle_lgmfz2$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var ARTICLE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.ARTICLE;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledArticle$lambda(it) {
      return new ARTICLE_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledArticle$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledAside = defineInlineFunction('kotlin-styled-next.styled.styledAside_rd7t5o$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var ASIDE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.ASIDE;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledAside$lambda(it) {
      return new ASIDE_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledAside$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledFooter = defineInlineFunction('kotlin-styled-next.styled.styledFooter_abs6jp$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var FOOTER_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.FOOTER;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledFooter$lambda(it) {
      return new FOOTER_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledFooter$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledHeader = defineInlineFunction('kotlin-styled-next.styled.styledHeader_nyg1zh$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var HEADER_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.HEADER;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledHeader$lambda(it) {
      return new HEADER_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledHeader$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledH1 = defineInlineFunction('kotlin-styled-next.styled.styledH1_k7892h$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var H1_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H1;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledH1$lambda(it) {
      return new H1_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledH1$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledH2 = defineInlineFunction('kotlin-styled-next.styled.styledH2_sn6rre$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var H2_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H2;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledH2$lambda(it) {
      return new H2_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledH2$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledH3 = defineInlineFunction('kotlin-styled-next.styled.styledH3_xxyrit$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var H3_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H3;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledH3$lambda(it) {
      return new H3_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledH3$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledH4 = defineInlineFunction('kotlin-styled-next.styled.styledH4_pi08tw$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var H4_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H4;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledH4$lambda(it) {
      return new H4_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledH4$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledH5 = defineInlineFunction('kotlin-styled-next.styled.styledH5_h21q4z$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var H5_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H5;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledH5$lambda(it) {
      return new H5_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledH5$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledH6 = defineInlineFunction('kotlin-styled-next.styled.styledH6_8m37g2$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var H6_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H6;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledH6$lambda(it) {
      return new H6_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledH6$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledMain = defineInlineFunction('kotlin-styled-next.styled.styledMain_pe1pvd$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var MAIN_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.MAIN;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledMain$lambda(it) {
      return new MAIN_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledMain$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledNav = defineInlineFunction('kotlin-styled-next.styled.styledNav_cdm54f$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var NAV_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.NAV;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledNav$lambda(it) {
      return new NAV_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledNav$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledSection = defineInlineFunction('kotlin-styled-next.styled.styledSection_46srkf$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var SECTION_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SECTION;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledSection$lambda(it) {
      return new SECTION_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledSection$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledBlockquote = defineInlineFunction('kotlin-styled-next.styled.styledBlockquote_ysxgdt$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var BLOCKQUOTE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BLOCKQUOTE;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledBlockquote$lambda(it) {
      return new BLOCKQUOTE_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledBlockquote$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledDd = defineInlineFunction('kotlin-styled-next.styled.styledDd_dz3lwg$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var DD_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DD;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledDd$lambda(it) {
      return new DD_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDd$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledDiv = defineInlineFunction('kotlin-styled-next.styled.styledDiv_nl27x9$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var DIV_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledDiv$lambda(it) {
      return new DIV_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledDl = defineInlineFunction('kotlin-styled-next.styled.styledDl_hgjic8$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var DL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DL;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledDl$lambda(it) {
      return new DL_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDl$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledDt = defineInlineFunction('kotlin-styled-next.styled.styledDt_kxzes0$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var DT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DT;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledDt$lambda(it) {
      return new DT_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDt$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledFigcaption = defineInlineFunction('kotlin-styled-next.styled.styledFigcaption_c04876$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var FIGCAPTION_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.FIGCAPTION;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledFigcaption$lambda(it) {
      return new FIGCAPTION_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledFigcaption$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledFigure = defineInlineFunction('kotlin-styled-next.styled.styledFigure_le7sck$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var FIGURE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.FIGURE;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledFigure$lambda(it) {
      return new FIGURE_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledFigure$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledHr = defineInlineFunction('kotlin-styled-next.styled.styledHr_epf60a$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var HR_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.HR;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledHr$lambda(it) {
      return new HR_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledHr$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledLi = defineInlineFunction('kotlin-styled-next.styled.styledLi_8qvw1v$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var LI_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.LI;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledLi$lambda(it) {
      return new LI_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledLi$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledOl = defineInlineFunction('kotlin-styled-next.styled.styledOl_kgxcnx$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var OL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OL;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledOl$lambda(it) {
      return new OL_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledOl$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledP = defineInlineFunction('kotlin-styled-next.styled.styledP_iop6fw$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var P_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.P;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledP$lambda(it) {
      return new P_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledP$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledPre = defineInlineFunction('kotlin-styled-next.styled.styledPre_ik11in$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var PRE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.PRE;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledPre$lambda(it) {
      return new PRE_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledPre$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledUl = defineInlineFunction('kotlin-styled-next.styled.styledUl_s8spxz$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var UL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.UL;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledUl$lambda(it) {
      return new UL_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledUl$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledA = defineInlineFunction('kotlin-styled-next.styled.styledA_8k1tal$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var A_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.A;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledA$lambda(closure$href, closure$target) {
      return function (it) {
        return new A_init(attributesMapOf(['href', closure$href, 'target', closure$target]), it);
      };
    }
    return function ($receiver, href, target, block) {
      if (href === void 0)
        href = null;
      if (target === void 0)
        target = null;
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledA$lambda(href, target));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledAbbr = defineInlineFunction('kotlin-styled-next.styled.styledAbbr_6au89b$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var ABBR_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.ABBR;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledAbbr$lambda(it) {
      return new ABBR_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledAbbr$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledB = defineInlineFunction('kotlin-styled-next.styled.styledB_shm19u$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var B_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.B;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledB$lambda(it) {
      return new B_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledB$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledBdi = defineInlineFunction('kotlin-styled-next.styled.styledBdi_791cr1$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var BDI_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BDI;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledBdi$lambda(it) {
      return new BDI_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledBdi$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledBdo = defineInlineFunction('kotlin-styled-next.styled.styledBdo_rmeakn$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var BDO_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BDO;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledBdo$lambda(it) {
      return new BDO_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledBdo$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledBr = defineInlineFunction('kotlin-styled-next.styled.styledBr_6xjsq8$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var BR_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BR;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledBr$lambda(it) {
      return new BR_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledBr$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledCite = defineInlineFunction('kotlin-styled-next.styled.styledCite_ketyeh$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var CITE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.CITE;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledCite$lambda(it) {
      return new CITE_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledCite$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledCode = defineInlineFunction('kotlin-styled-next.styled.styledCode_afw0kt$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var CODE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.CODE;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledCode$lambda(it) {
      return new CODE_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledCode$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledDfn = defineInlineFunction('kotlin-styled-next.styled.styledDfn_n6kfq0$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var DFN_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DFN;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledDfn$lambda(it) {
      return new DFN_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDfn$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledEm = defineInlineFunction('kotlin-styled-next.styled.styledEm_veb43c$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var EM_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.EM;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledEm$lambda(it) {
      return new EM_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledEm$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledI = defineInlineFunction('kotlin-styled-next.styled.styledI_um3lkl$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var I_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.I;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledI$lambda(it) {
      return new I_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledI$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledKbd = defineInlineFunction('kotlin-styled-next.styled.styledKbd_1n2oah$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var KBD_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.KBD;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledKbd$lambda(it) {
      return new KBD_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledKbd$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledMark = defineInlineFunction('kotlin-styled-next.styled.styledMark_bpz7pp$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var MARK_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.MARK;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledMark$lambda(it) {
      return new MARK_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledMark$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledQ = defineInlineFunction('kotlin-styled-next.styled.styledQ_r4np4t$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var Q_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.Q;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledQ$lambda(it) {
      return new Q_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledQ$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledRp = defineInlineFunction('kotlin-styled-next.styled.styledRp_cwexwi$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var RP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.RP;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledRp$lambda(it) {
      return new RP_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledRp$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledRt = defineInlineFunction('kotlin-styled-next.styled.styledRt_kvf4v6$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var RT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.RT;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledRt$lambda(it) {
      return new RT_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledRt$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledRuby = defineInlineFunction('kotlin-styled-next.styled.styledRuby_za616i$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var RUBY_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.RUBY;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledRuby$lambda(it) {
      return new RUBY_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledRuby$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledSamp = defineInlineFunction('kotlin-styled-next.styled.styledSamp_yhe0i7$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var SAMP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SAMP;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledSamp$lambda(it) {
      return new SAMP_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledSamp$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledSmall = defineInlineFunction('kotlin-styled-next.styled.styledSmall_s8f5bh$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var SMALL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SMALL;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledSmall$lambda(it) {
      return new SMALL_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledSmall$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledSpan = defineInlineFunction('kotlin-styled-next.styled.styledSpan_wnx53q$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var SPAN_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SPAN;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledSpan$lambda(it) {
      return new SPAN_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledSpan$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledStrong = defineInlineFunction('kotlin-styled-next.styled.styledStrong_1nxmeh$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var STRONG_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.STRONG;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledStrong$lambda(it) {
      return new STRONG_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledStrong$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledSub = defineInlineFunction('kotlin-styled-next.styled.styledSub_og4q1g$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var SUB_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SUB;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledSub$lambda(it) {
      return new SUB_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledSub$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledSup = defineInlineFunction('kotlin-styled-next.styled.styledSup_mq6hoa$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var SUP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SUP;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledSup$lambda(it) {
      return new SUP_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledSup$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledTime = defineInlineFunction('kotlin-styled-next.styled.styledTime_iiw05p$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var TIME_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TIME;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledTime$lambda(it) {
      return new TIME_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTime$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledVar = defineInlineFunction('kotlin-styled-next.styled.styledVar_vje9zh$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var VAR_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.VAR;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledVar$lambda(it) {
      return new VAR_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledVar$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledArea = defineInlineFunction('kotlin-styled-next.styled.styledArea_oyrah7$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var AREA_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.AREA;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledArea$lambda(closure$shape, closure$alt) {
      return function (it) {
        return new AREA_init(attributesMapOf(['Shape', closure$shape != null ? enumEncode(closure$shape) : null, 'alt', closure$alt]), it);
      };
    }
    return function ($receiver, shape, alt, block) {
      if (shape === void 0)
        shape = null;
      if (alt === void 0)
        alt = null;
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledArea$lambda(shape, alt));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledAudio = defineInlineFunction('kotlin-styled-next.styled.styledAudio_wpd72a$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var AUDIO_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.AUDIO;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledAudio$lambda(it) {
      return new AUDIO_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledAudio$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledImg = defineInlineFunction('kotlin-styled-next.styled.styledImg_7q4769$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var IMG_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.IMG;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledImg$lambda(closure$alt, closure$src) {
      return function (it) {
        return new IMG_init(attributesMapOf(['alt', closure$alt, 'src', closure$src]), it);
      };
    }
    return function ($receiver, alt, src, block) {
      if (alt === void 0)
        alt = null;
      if (src === void 0)
        src = null;
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledImg$lambda(alt, src));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledMap = defineInlineFunction('kotlin-styled-next.styled.styledMap_7ty1qj$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var MAP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.MAP;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledMap$lambda(closure$name) {
      return function (it) {
        return new MAP_init(attributesMapOf('name', closure$name), it);
      };
    }
    return function ($receiver, name, block) {
      if (name === void 0)
        name = null;
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledMap$lambda(name));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledVideo = defineInlineFunction('kotlin-styled-next.styled.styledVideo_plb1hj$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var VIDEO_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.VIDEO;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledVideo$lambda(it) {
      return new VIDEO_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledVideo$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledEmbed = defineInlineFunction('kotlin-styled-next.styled.styledEmbed_ha10uz$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var EMBED_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.EMBED;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledEmbed$lambda(it) {
      return new EMBED_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledEmbed$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledIframe = defineInlineFunction('kotlin-styled-next.styled.styledIframe_kqjv7h$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var IFRAME_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.IFRAME;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledIframe$lambda(closure$sandbox) {
      return function (it) {
        return new IFRAME_init(attributesMapOf('sandbox', closure$sandbox != null ? enumEncode(closure$sandbox) : null), it);
      };
    }
    return function ($receiver, sandbox, content) {
      if (sandbox === void 0)
        sandbox = null;
      if (content === void 0)
        content = '';
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledIframe$lambda(sandbox));
      $receiver_0.unaryPlus_pdl1vz$(content);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledIframe_0 = defineInlineFunction('kotlin-styled-next.styled.styledIframe_mfopg8$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var IFRAME_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.IFRAME;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledIframe$lambda(closure$sandbox) {
      return function (it) {
        return new IFRAME_init(attributesMapOf('sandbox', closure$sandbox != null ? enumEncode(closure$sandbox) : null), it);
      };
    }
    return function ($receiver, sandbox, block) {
      if (sandbox === void 0)
        sandbox = null;
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledIframe$lambda(sandbox));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledObject = defineInlineFunction('kotlin-styled-next.styled.styledObject_u1xvy9$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var OBJECT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OBJECT;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledObject$lambda(it) {
      return new OBJECT_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledObject$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledParam = defineInlineFunction('kotlin-styled-next.styled.styledParam_70o309$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var PARAM_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.PARAM;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledParam$lambda(closure$name, closure$value) {
      return function (it) {
        return new PARAM_init(attributesMapOf(['name', closure$name, 'value', closure$value]), it);
      };
    }
    return function ($receiver, name, value, block) {
      if (name === void 0)
        name = null;
      if (value === void 0)
        value = null;
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledParam$lambda(name, value));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledPicture = defineInlineFunction('kotlin-styled-next.styled.styledPicture_6hj3qi$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var PICTURE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.PICTURE;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledPicture$lambda(it) {
      return new PICTURE_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledPicture$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledSource = defineInlineFunction('kotlin-styled-next.styled.styledSource_12vx3v$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var SOURCE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SOURCE;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledSource$lambda(it) {
      return new SOURCE_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledSource$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledSvg = defineInlineFunction('kotlin-styled-next.styled.styledSvg_hw0qe1$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var SVG_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SVG;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledSvg$lambda(it) {
      return new SVG_init(html.emptyMap, it);
    }
    return function ($receiver, content) {
      if (content === void 0)
        content = '';
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledSvg$lambda);
      $receiver_0.unaryPlus_pdl1vz$(content);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledSvg_0 = defineInlineFunction('kotlin-styled-next.styled.styledSvg_4m290w$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var SVG_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SVG;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledSvg$lambda(it) {
      return new SVG_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledSvg$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledMath = defineInlineFunction('kotlin-styled-next.styled.styledMath_cnrgq0$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var MATH_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.MATH;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledMath$lambda(it) {
      return new MATH_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledMath$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledCanvas = defineInlineFunction('kotlin-styled-next.styled.styledCanvas_hw0qe1$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var CANVAS_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.CANVAS;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledCanvas$lambda(it) {
      return new CANVAS_init(html.emptyMap, it);
    }
    return function ($receiver, content) {
      if (content === void 0)
        content = '';
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledCanvas$lambda);
      $receiver_0.unaryPlus_pdl1vz$(content);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledCanvas_0 = defineInlineFunction('kotlin-styled-next.styled.styledCanvas_mheybc$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var CANVAS_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.CANVAS;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledCanvas$lambda(it) {
      return new CANVAS_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledCanvas$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledNoscript = defineInlineFunction('kotlin-styled-next.styled.styledNoscript_xt87u4$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var NOSCRIPT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.NOSCRIPT;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledNoscript$lambda(it) {
      return new NOSCRIPT_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledNoscript$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledScript = defineInlineFunction('kotlin-styled-next.styled.styledScript_f5jx5h$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var SCRIPT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SCRIPT;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledScript$lambda(closure$type, closure$src) {
      return function (it) {
        return new SCRIPT_init(attributesMapOf(['type', closure$type, 'src', closure$src]), it);
      };
    }
    return function ($receiver, type, src, block) {
      if (type === void 0)
        type = null;
      if (src === void 0)
        src = null;
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledScript$lambda(type, src));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledDel = defineInlineFunction('kotlin-styled-next.styled.styledDel_sodis7$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var DEL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DEL;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledDel$lambda(it) {
      return new DEL_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDel$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledIns = defineInlineFunction('kotlin-styled-next.styled.styledIns_v7acme$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var INS_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.INS;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledIns$lambda(it) {
      return new INS_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledIns$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledCaption = defineInlineFunction('kotlin-styled-next.styled.styledCaption_ff1mjy$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var CAPTION_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.CAPTION;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledCaption$lambda(it) {
      return new CAPTION_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledCaption$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledCol = defineInlineFunction('kotlin-styled-next.styled.styledCol_1gtqb0$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var COL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.COL;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledCol$lambda(it) {
      return new COL_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledCol$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledColgroup = defineInlineFunction('kotlin-styled-next.styled.styledColgroup_j3cjpd$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var COLGROUP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.COLGROUP;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledColgroup$lambda(it) {
      return new COLGROUP_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledColgroup$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledTable = defineInlineFunction('kotlin-styled-next.styled.styledTable_il2xhi$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var TABLE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TABLE;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledTable$lambda(it) {
      return new TABLE_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTable$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledTbody = defineInlineFunction('kotlin-styled-next.styled.styledTbody_al0num$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var TBODY_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TBODY;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledTbody$lambda(it) {
      return new TBODY_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTbody$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledTd = defineInlineFunction('kotlin-styled-next.styled.styledTd_gx5b5c$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var TD_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TD;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledTd$lambda(it) {
      return new TD_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledTfoot = defineInlineFunction('kotlin-styled-next.styled.styledTfoot_u1clma$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var TFOOT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TFOOT;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledTfoot$lambda(it) {
      return new TFOOT_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTfoot$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledTh = defineInlineFunction('kotlin-styled-next.styled.styledTh_953rpx$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var TH_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TH;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledTh$lambda(closure$scope) {
      return function (it) {
        return new TH_init(attributesMapOf('scope', closure$scope != null ? enumEncode(closure$scope) : null), it);
      };
    }
    return function ($receiver, scope, block) {
      if (scope === void 0)
        scope = null;
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTh$lambda(scope));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledThead = defineInlineFunction('kotlin-styled-next.styled.styledThead_b8pjcw$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var THEAD_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.THEAD;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledThead$lambda(it) {
      return new THEAD_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledThead$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledTr = defineInlineFunction('kotlin-styled-next.styled.styledTr_u95wke$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var TR_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TR;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledTr$lambda(it) {
      return new TR_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTr$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledButton = defineInlineFunction('kotlin-styled-next.styled.styledButton_v3mt7e$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var BUTTON_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BUTTON;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledButton$lambda(closure$formEncType, closure$formMethod, closure$type) {
      return function (it) {
        return new BUTTON_init(attributesMapOf(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null]), it);
      };
    }
    return function ($receiver, formEncType, formMethod, type, block) {
      if (formEncType === void 0)
        formEncType = null;
      if (formMethod === void 0)
        formMethod = null;
      if (type === void 0)
        type = null;
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledButton$lambda(formEncType, formMethod, type));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledDatalist = defineInlineFunction('kotlin-styled-next.styled.styledDatalist_q0qxew$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var DATALIST_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DATALIST;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledDatalist$lambda(it) {
      return new DATALIST_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDatalist$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledFieldset = defineInlineFunction('kotlin-styled-next.styled.styledFieldset_xj98jc$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var FIELDSET_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.FIELDSET;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledFieldset$lambda(it) {
      return new FIELDSET_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledFieldset$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledForm = defineInlineFunction('kotlin-styled-next.styled.styledForm_k88gii$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var FORM_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.FORM;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledForm$lambda(closure$action, closure$encType, closure$method) {
      return function (it) {
        return new FORM_init(attributesMapOf(['action', closure$action, 'enctype', closure$encType != null ? enumEncode(closure$encType) : null, 'method', closure$method != null ? enumEncode(closure$method) : null]), it);
      };
    }
    return function ($receiver, action, encType, method, block) {
      if (action === void 0)
        action = null;
      if (encType === void 0)
        encType = null;
      if (method === void 0)
        method = null;
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledForm$lambda(action, encType, method));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledInput = defineInlineFunction('kotlin-styled-next.styled.styledInput_gxkg23$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var INPUT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.INPUT;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledInput$lambda(closure$type, closure$formEncType, closure$formMethod, closure$name) {
      return function (it) {
        return new INPUT_init(attributesMapOf(['type', closure$type != null ? enumEncode(closure$type) : null, 'formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'name', closure$name]), it);
      };
    }
    return function ($receiver, type, formEncType, formMethod, name, block) {
      if (type === void 0)
        type = null;
      if (formEncType === void 0)
        formEncType = null;
      if (formMethod === void 0)
        formMethod = null;
      if (name === void 0)
        name = null;
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledInput$lambda(type, formEncType, formMethod, name));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledLabel = defineInlineFunction('kotlin-styled-next.styled.styledLabel_119a74$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var LABEL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.LABEL;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledLabel$lambda(it) {
      return new LABEL_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledLabel$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledLegend = defineInlineFunction('kotlin-styled-next.styled.styledLegend_3psej1$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var LEGEND_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.LEGEND;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledLegend$lambda(it) {
      return new LEGEND_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledLegend$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledMeter = defineInlineFunction('kotlin-styled-next.styled.styledMeter_f1skx7$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var METER_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.METER;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledMeter$lambda(it) {
      return new METER_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledMeter$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledOptgroup = defineInlineFunction('kotlin-styled-next.styled.styledOptgroup_vqdpuf$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var OPTGROUP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OPTGROUP;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledOptgroup$lambda(closure$label) {
      return function (it) {
        return new OPTGROUP_init(attributesMapOf('label', closure$label), it);
      };
    }
    return function ($receiver, label, block) {
      if (label === void 0)
        label = null;
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledOptgroup$lambda(label));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledOption = defineInlineFunction('kotlin-styled-next.styled.styledOption_hw0qe1$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var OPTION_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OPTION;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledOption$lambda(it) {
      return new OPTION_init(html.emptyMap, it);
    }
    return function ($receiver, content) {
      if (content === void 0)
        content = '';
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledOption$lambda);
      $receiver_0.unaryPlus_pdl1vz$(content);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledOption_0 = defineInlineFunction('kotlin-styled-next.styled.styledOption_m0ne2d$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var OPTION_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OPTION;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledOption$lambda(it) {
      return new OPTION_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledOption$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledOutput = defineInlineFunction('kotlin-styled-next.styled.styledOutput_gldd6p$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var OUTPUT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OUTPUT;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledOutput$lambda(it) {
      return new OUTPUT_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledOutput$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledProgress = defineInlineFunction('kotlin-styled-next.styled.styledProgress_6rgx5f$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var PROGRESS_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.PROGRESS;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledProgress$lambda(it) {
      return new PROGRESS_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledProgress$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledSelect = defineInlineFunction('kotlin-styled-next.styled.styledSelect_46ho4c$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var SELECT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SELECT;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledSelect$lambda(it) {
      return new SELECT_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledSelect$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledTextarea = defineInlineFunction('kotlin-styled-next.styled.styledTextarea_fmll6w$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var TEXTAREA_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TEXTAREA;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledTextarea$lambda(closure$rows, closure$cols, closure$wrap) {
      return function (it) {
        return new TEXTAREA_init(attributesMapOf(['rows', closure$rows, 'cols', closure$cols, 'wrap', closure$wrap != null ? enumEncode(closure$wrap) : null]), it);
      };
    }
    return function ($receiver, rows, cols, wrap, content) {
      if (rows === void 0)
        rows = null;
      if (cols === void 0)
        cols = null;
      if (wrap === void 0)
        wrap = null;
      if (content === void 0)
        content = '';
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTextarea$lambda(rows, cols, wrap));
      $receiver_0.unaryPlus_pdl1vz$(content);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledTextarea_0 = defineInlineFunction('kotlin-styled-next.styled.styledTextarea_zcvaif$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var TEXTAREA_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TEXTAREA;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledTextarea$lambda(closure$rows, closure$cols, closure$wrap) {
      return function (it) {
        return new TEXTAREA_init(attributesMapOf(['rows', closure$rows, 'cols', closure$cols, 'wrap', closure$wrap != null ? enumEncode(closure$wrap) : null]), it);
      };
    }
    return function ($receiver, rows, cols, wrap, block) {
      if (rows === void 0)
        rows = null;
      if (cols === void 0)
        cols = null;
      if (wrap === void 0)
        wrap = null;
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTextarea$lambda(rows, cols, wrap));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledDetails = defineInlineFunction('kotlin-styled-next.styled.styledDetails_hf2xda$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var DETAILS_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DETAILS;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledDetails$lambda(it) {
      return new DETAILS_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDetails$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledDialog = defineInlineFunction('kotlin-styled-next.styled.styledDialog_m9v0a0$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var DIALOG_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIALOG;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledDialog$lambda(it) {
      return new DIALOG_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDialog$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledSummary = defineInlineFunction('kotlin-styled-next.styled.styledSummary_gn4pqq$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var SUMMARY_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SUMMARY;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledSummary$lambda(it) {
      return new SUMMARY_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledSummary$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  function CSSOMPersistentSheet(type, maxRulesPerSheet) {
    if (maxRulesPerSheet === void 0)
      maxRulesPerSheet = 50;
    AbstractSheet.call(this, type, maxRulesPerSheet);
    this.scheduledRules_0 = ArrayList_init();
  }
  CSSOMPersistentSheet.prototype.scheduleToInject_upaayv$ = function (rules) {
    addAll(this.scheduledRules_0, rules);
    return 0;
  };
  CSSOMPersistentSheet.prototype.inject_0 = function (sheet, rules) {
    var tmp$;
    var ruleId = sheet.cssRules.length;
    tmp$ = rules.iterator();
    while (tmp$.hasNext()) {
      var rule = tmp$.next();
      try {
        sheet.insertRule(rule, ruleId);
        ruleId = ruleId + 1 | 0;
      } catch (e) {
        if (!Kotlin.isType(e, Throwable))
          throw e;
      }
    }
    rules.clear();
  };
  CSSOMPersistentSheet.prototype.injectScheduled = function () {
    if (!this.scheduledRules_0.isEmpty()) {
      this.inject_0(this.get_cssSheet_0(this.getCurrentStyleElement_0(this.scheduledRules_0.size)), this.scheduledRules_0);
    }};
  CSSOMPersistentSheet.prototype.clear = function () {
    AbstractSheet.prototype.clear.call(this);
    this.scheduledRules_0.clear();
  };
  CSSOMPersistentSheet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CSSOMPersistentSheet',
    interfaces: [AbstractSheet]
  };
  function RemoveMode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function RemoveMode_initFields() {
    RemoveMode_initFields = function () {
    };
    RemoveMode$OnBrowserIdle_instance = new RemoveMode('OnBrowserIdle', 0);
    RemoveMode$Instantly_instance = new RemoveMode('Instantly', 1);
  }
  var RemoveMode$OnBrowserIdle_instance;
  function RemoveMode$OnBrowserIdle_getInstance() {
    RemoveMode_initFields();
    return RemoveMode$OnBrowserIdle_instance;
  }
  var RemoveMode$Instantly_instance;
  function RemoveMode$Instantly_getInstance() {
    RemoveMode_initFields();
    return RemoveMode$Instantly_instance;
  }
  RemoveMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RemoveMode',
    interfaces: [Enum]
  };
  function RemoveMode$values() {
    return [RemoveMode$OnBrowserIdle_getInstance(), RemoveMode$Instantly_getInstance()];
  }
  RemoveMode.values = RemoveMode$values;
  function RemoveMode$valueOf(name) {
    switch (name) {
      case 'OnBrowserIdle':
        return RemoveMode$OnBrowserIdle_getInstance();
      case 'Instantly':
        return RemoveMode$Instantly_getInstance();
      default:throwISE('No enum constant styled.sheets.RemoveMode.' + name);
    }
  }
  RemoveMode.valueOf_61zpoe$ = RemoveMode$valueOf;
  function CSSOMSheet(type, removeMode, cleanTimeout, maxRulesPerSheet) {
    if (removeMode === void 0)
      removeMode = RemoveMode$OnBrowserIdle_getInstance();
    if (cleanTimeout === void 0)
      cleanTimeout = 30000;
    if (maxRulesPerSheet === void 0)
      maxRulesPerSheet = 50;
    AbstractSheet.call(this, type, maxRulesPerSheet);
    this.type = type;
    this.removeMode = removeMode;
    this.cleanTimeout_0 = cleanTimeout;
    this.groups_0 = LinkedHashMap_init();
    this.scheduledGroups_8be2vx$ = LinkedHashMap_init();
    this.groupId_hb5imp$_0 = 0;
    this.isCleanRequested_0 = false;
  }
  Object.defineProperty(CSSOMSheet.prototype, 'groupId_0', {
    configurable: true,
    get: function () {
      var $receiver = this.groupId_hb5imp$_0;
      this.groupId_hb5imp$_0 = this.groupId_hb5imp$_0 + 1 | 0;
      return $receiver;
    },
    set: function (groupId) {
      this.groupId_hb5imp$_0 = groupId;
    }
  });
  CSSOMSheet.prototype.scheduleToInject_upaayv$ = function (rules) {
    var $receiver = this.groupId_0;
    this.scheduledGroups_8be2vx$.put_xwzc9p$($receiver, rules);
    return $receiver;
  };
  function CSSOMSheet$requestClean$lambda$lambda(this$CSSOMSheet, closure$clean) {
    return function () {
      this$CSSOMSheet.isCleanRequested_0 = false;
      closure$clean();
      return Unit;
    };
  }
  function CSSOMSheet$requestClean$lambda(this$CSSOMSheet, closure$clean) {
    return function () {
      var idleCallback = window.requestIdleCallback;
      if (idleCallback != undefined && this$CSSOMSheet.removeMode === RemoveMode$OnBrowserIdle_getInstance()) {
        return idleCallback(CSSOMSheet$requestClean$lambda$lambda(this$CSSOMSheet, closure$clean));
      } else {
        this$CSSOMSheet.isCleanRequested_0 = false;
        return closure$clean();
      }
    };
  }
  CSSOMSheet.prototype.requestClean_o14v8n$ = function (clean) {
    if (this.isCleanRequested_0)
      return;
    this.isCleanRequested_0 = true;
    if (this.removeMode === RemoveMode$Instantly_getInstance()) {
      this.isCleanRequested_0 = false;
      clean();
      return;
    }window.setTimeout(CSSOMSheet$requestClean$lambda(this, clean), this.cleanTimeout_0);
  };
  CSSOMSheet.prototype.removeGroups_pqoyrt$ = function (groupIds) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = groupIds.iterator();
    while (tmp$.hasNext()) {
      var groupId = tmp$.next();
      var $receiver = this.scheduledGroups_8be2vx$;
      var tmp$_2;
      if ((Kotlin.isType(tmp$_2 = $receiver, Map) ? tmp$_2 : throwCCE()).containsKey_11rb$(groupId)) {
        this.scheduledGroups_8be2vx$.remove_11rb$(groupId);
        continue;
      }tmp$_0 = this.groups_0.remove_11rb$(groupId);
      if (tmp$_0 == null) {
        throw IllegalArgumentException_init('Group ' + groupId + ' does not exist');
      }var removedGroup = tmp$_0;
      if (!removedGroup.rulesRange.isEmpty()) {
        var sheet = this.get_cssSheet_0(removedGroup.element);
        var tmp$_3;
        tmp$_3 = reversed(removedGroup.rulesRange).iterator();
        while (tmp$_3.hasNext()) {
          var element = tmp$_3.next();
          sheet.deleteRule(element);
        }
        if (sheet.cssRules.length === 0) {
          this.removeAndCleanUp_0(removedGroup.element);
        }}var rulesShift = removedGroup.rulesRange.last - removedGroup.rulesRange.first + 1 | 0;
      tmp$_1 = this.groups_0.entries.iterator();
      while (tmp$_1.hasNext()) {
        var entry = tmp$_1.next();
        var otherGroupId = entry.key;
        var otherGroup = entry.value;
        if (equals(otherGroup.element, removedGroup.element) && otherGroupId > groupId) {
          var otherRange = otherGroup.rulesRange;
          var shiftedRange = new IntRange(otherRange.first - rulesShift | 0, otherRange.last - rulesShift | 0);
          entry.setValue_11rc$(otherGroup.copy_3rt3bm$(void 0, shiftedRange));
        }}
    }
    this.compressSheets_0();
  };
  CSSOMSheet.prototype.injectScheduled = function () {
    var tmp$, tmp$_0;
    if (!this.scheduledGroups_8be2vx$.isEmpty()) {
      tmp$ = this.scheduledGroups_8be2vx$.entries.iterator();
      while (tmp$.hasNext()) {
        var tmp$_1 = tmp$.next();
        var groupId = tmp$_1.key;
        var rules = tmp$_1.value;
        var element = this.getCurrentStyleElement_0(count(rules));
        var ruleStart = this.get_cssSheet_0(element).cssRules.length;
        var ruleId = ruleStart;
        tmp$_0 = rules.iterator();
        while (tmp$_0.hasNext()) {
          var rule = tmp$_0.next();
          try {
            this.get_cssSheet_0(element).insertRule(rule, ruleId);
            ruleId = ruleId + 1 | 0;
          } catch (e) {
            if (!Kotlin.isType(e, Throwable))
              throw e;
          }
        }
        var $receiver = this.groups_0;
        var value = new CSSOMSheet$RulesGroup(element, until(ruleStart, ruleId));
        $receiver.put_xwzc9p$(groupId, value);
      }
      this.scheduledGroups_8be2vx$.clear();
    }};
  function CSSOMSheet$compressSheets$RulesGroupUpdate(element, shift) {
    this.element = element;
    this.shift = shift;
  }
  CSSOMSheet$compressSheets$RulesGroupUpdate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RulesGroupUpdate',
    interfaces: []
  };
  CSSOMSheet.prototype.compressSheets_0 = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    tmp$ = this.maxRulesPerSheet_0;
    if (tmp$ == null) {
      return;
    }var maxRulesPerSheet = tmp$;
    var elementGroups = ArrayList_init();
    var currentMergeGroup = ArrayList_init();
    var totalRulesCount = 0;
    tmp$_0 = this.usedStyleElements_0.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      var rulesLength = this.get_cssSheet_0(element).cssRules.length;
      if ((rulesLength + totalRulesCount | 0) > maxRulesPerSheet) {
        if (currentMergeGroup.size > 1) {
          var element_0 = currentMergeGroup;
          elementGroups.add_11rb$(element_0);
        }totalRulesCount = 0;
        currentMergeGroup = ArrayList_init();
      }totalRulesCount = totalRulesCount + rulesLength | 0;
      currentMergeGroup.add_11rb$(element);
    }
    if (currentMergeGroup.size > 1) {
      var element_1 = currentMergeGroup;
      elementGroups.add_11rb$(element_1);
    }var groupUpdates = LinkedHashMap_init();
    var tmp$_3;
    tmp$_3 = elementGroups.iterator();
    while (tmp$_3.hasNext()) {
      var element_2 = tmp$_3.next();
      var reused = first(element_2);
      var tmp$_4;
      tmp$_4 = drop(element_2, 1).iterator();
      while (tmp$_4.hasNext()) {
        var element_3 = tmp$_4.next();
        var value = new CSSOMSheet$compressSheets$RulesGroupUpdate(reused, this.get_cssSheet_0(reused).cssRules.length);
        groupUpdates.put_xwzc9p$(element_3, value);
        var tmp$_5;
        tmp$_5 = asList(this.get_cssSheet_0(element_3).cssRules).iterator();
        while (tmp$_5.hasNext()) {
          var element_4 = tmp$_5.next();
          this.get_cssSheet_0(reused).insertRule(element_4.cssText, this.get_cssSheet_0(reused).cssRules.length);
        }
        this.removeAndCleanUp_0(element_3);
      }
    }
    tmp$_1 = this.groups_0.entries.iterator();
    while (tmp$_1.hasNext()) {
      var entry = tmp$_1.next();
      var otherGroup = entry.value;
      if ((tmp$_2 = groupUpdates.get_11rb$(otherGroup.element)) != null) {
        var otherRange = otherGroup.rulesRange;
        var shiftedRange = new IntRange(otherRange.first + tmp$_2.shift | 0, otherRange.last + tmp$_2.shift | 0);
        entry.setValue_11rc$(new CSSOMSheet$RulesGroup(tmp$_2.element, shiftedRange));
      }}
  };
  CSSOMSheet.prototype.clear = function () {
    AbstractSheet.prototype.clear.call(this);
    this.groups_0.clear();
    this.scheduledGroups_8be2vx$.clear();
  };
  function CSSOMSheet$RulesGroup(element, rulesRange) {
    this.element = element;
    this.rulesRange = rulesRange;
  }
  CSSOMSheet$RulesGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RulesGroup',
    interfaces: []
  };
  CSSOMSheet$RulesGroup.prototype.component1 = function () {
    return this.element;
  };
  CSSOMSheet$RulesGroup.prototype.component2 = function () {
    return this.rulesRange;
  };
  CSSOMSheet$RulesGroup.prototype.copy_3rt3bm$ = function (element, rulesRange) {
    return new CSSOMSheet$RulesGroup(element === void 0 ? this.element : element, rulesRange === void 0 ? this.rulesRange : rulesRange);
  };
  CSSOMSheet$RulesGroup.prototype.toString = function () {
    return 'RulesGroup(element=' + Kotlin.toString(this.element) + (', rulesRange=' + Kotlin.toString(this.rulesRange)) + ')';
  };
  CSSOMSheet$RulesGroup.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.element) | 0;
    result = result * 31 + Kotlin.hashCode(this.rulesRange) | 0;
    return result;
  };
  CSSOMSheet$RulesGroup.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.element, other.element) && Kotlin.equals(this.rulesRange, other.rulesRange)))));
  };
  CSSOMSheet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CSSOMSheet',
    interfaces: [AbstractSheet]
  };
  function DevSheet(type) {
    AbstractSheet.call(this, type, null);
    this.scheduledRules_0 = ArrayList_init();
  }
  DevSheet.prototype.scheduleToInject_upaayv$ = function (rules) {
    addAll(this.scheduledRules_0, rules);
    return 0;
  };
  DevSheet.prototype.injectScheduled = function () {
    appendText(this.getCurrentStyleElement_0(this.scheduledRules_0.size), joinToString_0(this.scheduledRules_0, '\n'));
    this.scheduledRules_0.clear();
  };
  DevSheet.prototype.clear = function () {
    AbstractSheet.prototype.clear.call(this);
    this.scheduledRules_0.clear();
  };
  DevSheet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DevSheet',
    interfaces: [AbstractSheet]
  };
  var styleId;
  var importStyleId;
  function RuleType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function RuleType_initFields() {
    RuleType_initFields = function () {
    };
    RuleType$REGULAR_instance = new RuleType('REGULAR', 0);
    RuleType$IMPORT_instance = new RuleType('IMPORT', 1);
  }
  var RuleType$REGULAR_instance;
  function RuleType$REGULAR_getInstance() {
    RuleType_initFields();
    return RuleType$REGULAR_instance;
  }
  var RuleType$IMPORT_instance;
  function RuleType$IMPORT_getInstance() {
    RuleType_initFields();
    return RuleType$IMPORT_instance;
  }
  RuleType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RuleType',
    interfaces: [Enum]
  };
  function RuleType$values() {
    return [RuleType$REGULAR_getInstance(), RuleType$IMPORT_getInstance()];
  }
  RuleType.values = RuleType$values;
  function RuleType$valueOf(name) {
    switch (name) {
      case 'REGULAR':
        return RuleType$REGULAR_getInstance();
      case 'IMPORT':
        return RuleType$IMPORT_getInstance();
      default:throwISE('No enum constant styled.sheets.RuleType.' + name);
    }
  }
  RuleType.valueOf_61zpoe$ = RuleType$valueOf;
  function Sheet() {
  }
  Sheet.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Sheet',
    interfaces: []
  };
  var DEFAULT_MAX_RULES_PER_SHEET;
  function AbstractSheet(ruleType, maxRulesPerSheet) {
    if (maxRulesPerSheet === void 0)
      maxRulesPerSheet = 50;
    this.ruleType_0 = ruleType;
    this.maxRulesPerSheet_0 = maxRulesPerSheet;
    this.usedStyleElements_0 = ArrayList_init();
    this.currentStyleElement_0 = null;
    this.partitionCounter_0 = 0;
  }
  Object.defineProperty(AbstractSheet.prototype, 'id_0', {
    configurable: true,
    get: function () {
      switch (this.ruleType_0.name) {
        case 'REGULAR':
          return styleId;
        case 'IMPORT':
          return importStyleId;
        default:return Kotlin.noWhenBranchMatched();
      }
    }
  });
  AbstractSheet.prototype.createStyleElement_0 = function () {
    var tmp$, tmp$_0, tmp$_1;
    if (this.maxRulesPerSheet_0 == null)
      tmp$_0 = this.id_0;
    else
      tmp$_0 = this.id_0 + '_' + (tmp$ = this.partitionCounter_0, this.partitionCounter_0 = tmp$ + 1 | 0, tmp$);
    var id = tmp$_0;
    var style = Kotlin.isType(tmp$_1 = ensureNotNull(window.document.head).appendChild(window.document.createElement('style')), HTMLStyleElement) ? tmp$_1 : throwCCE();
    style.setAttribute('id', id);
    this.usedStyleElements_0.add_11rb$(style);
    return style;
  };
  AbstractSheet.prototype.getCurrentStyleElement_0 = function (rulesToAdd) {
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$_0 = (tmp$ = this.currentStyleElement_0) != null ? tmp$.parentNode != null && (this.maxRulesPerSheet_0 == null || (this.get_cssSheet_0(tmp$).cssRules.length + rulesToAdd | 0) <= this.maxRulesPerSheet_0) ? tmp$ : null : null) != null)
      tmp$_1 = tmp$_0;
    else {
      var $receiver = this.createStyleElement_0();
      this.currentStyleElement_0 = $receiver;
      tmp$_1 = $receiver;
    }
    var element = tmp$_1;
    return element;
  };
  AbstractSheet.prototype.get_cssSheet_0 = function ($receiver) {
    var tmp$;
    return Kotlin.isType(tmp$ = $receiver.sheet, CSSStyleSheet) ? tmp$ : throwCCE();
  };
  AbstractSheet.prototype.removeAndCleanUp_0 = function ($receiver) {
    $receiver.remove();
    this.usedStyleElements_0.remove_11rb$($receiver);
    if (equals(this.currentStyleElement_0, $receiver)) {
      this.currentStyleElement_0 = null;
    }};
  AbstractSheet.prototype.clear = function () {
    var tmp$;
    tmp$ = toList(this.usedStyleElements_0).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.removeAndCleanUp_0(element);
    }
    var tmp$_0;
    tmp$_0 = asList(window.document.querySelectorAll(styleElementsSelector(this.id_0))).iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      var tmp$_1;
      (Kotlin.isType(tmp$_1 = element_0, HTMLStyleElement) ? tmp$_1 : throwCCE()).remove();
    }
  };
  AbstractSheet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractSheet',
    interfaces: [Sheet]
  };
  function styleElementsSelector(id) {
    return "[id^='" + id + "_'],[id='" + id + "']";
  }
  $$importsForInline$$['kotlin-extensions'] = $module$kotlin_extensions;
  var package$styled = _.styled || (_.styled = {});
  Object.defineProperty(package$styled, 'GlobalCssAccess', {
    get: GlobalCssAccess_getInstance
  });
  package$styled.animation_z6115y$ = animation_0;
  package$styled.UsedCssInfo = UsedCssInfo;
  package$styled.CssInfo = CssInfo;
  package$styled.injectGlobal_5cyqpy$ = injectGlobal;
  package$styled.isDevelopment_8be2vx$ = isDevelopment;
  $$importsForInline$$['kotlin-styled-next'] = _;
  Object.defineProperty(package$styled, 'GlobalStyles', {
    get: GlobalStyles_getInstance
  });
  package$styled.inlineStyles_b07t6c$ = inlineStyles;
  package$styled.toStyle_y3tcm5$ = toStyle;
  package$styled.buildPrefixedString_7wku0c$ = buildPrefixedString;
  package$styled.useStructMemo_8intxr$ = useStructMemo;
  package$styled.useCustomInsertionEffect_f47d3f$ = useCustomInsertionEffect;
  package$styled.Import = Import;
  package$styled.StyleSheet_init_tl0644$ = StyleSheet_init;
  package$styled.StyleSheet = StyleSheet;
  package$styled.CssHolder = CssHolder;
  package$styled.getClassName_4rhl28$ = getClassName;
  package$styled.getClassSelector_4rhl28$ = getClassSelector;
  package$styled.cssMarker_pgm7eu$ = cssMarker;
  package$styled.forwardCss_ckjb8o$ = forwardCss;
  $$importsForInline$$['kotlin-css'] = $module$kotlin_css;
  package$styled.forwardCss_hrqukv$ = forwardCss_0;
  package$styled.StyledBuilder = StyledBuilder;
  package$styled.css_vpie0h$ = css;
  Object.defineProperty(StyledElementBuilder, 'Companion', {
    get: StyledElementBuilder$Companion_getInstance
  });
  package$styled.StyledElementBuilder = StyledElementBuilder;
  package$styled.StyledElementBuilderImpl = StyledElementBuilderImpl;
  Object.defineProperty(StyledDOMBuilder, 'Companion', {
    get: StyledDOMBuilder$Companion_getInstance
  });
  package$styled.StyledDOMBuilder = StyledDOMBuilder;
  package$styled.StyledDOMBuilderImpl = StyledDOMBuilderImpl;
  package$styled.styled_s3r830$ = styled;
  package$styled.css_nqyh8f$ = css_0;
  package$styled.css_akzz26$ = css_1;
  $$importsForInline$$['kotlin-react-core'] = $module$kotlin_react_core;
  package$styled.customStyled_kcmwxo$ = customStyled;
  package$styled.checkGeneratedCss_mdegqc$ = checkGeneratedCss;
  package$styled.toClassName_n005mh$ = toClassName;
  Object.defineProperty(package$styled, 'Styled', {
    get: Styled_getInstance
  });
  package$styled.getCssRules_lbpiid$ = getCssRules;
  package$styled.styledTag_8tb0c0$ = styledTag;
  $$importsForInline$$['kotlinx-html-js'] = $module$kotlinx_html_js;
  package$styled.styledHtml_ke3yi3$ = styledHtml;
  package$styled.styledBase_1upga7$ = styledBase;
  package$styled.styledHead_pxbiyo$ = styledHead;
  package$styled.styledLink_w1nb4n$ = styledLink;
  package$styled.styledMeta_1zzqmz$ = styledMeta;
  package$styled.styledStyle_xoe246$ = styledStyle;
  package$styled.styledStyle_ligb9c$ = styledStyle_0;
  package$styled.styledTitle_hw0qe1$ = styledTitle;
  package$styled.styledTitle_ysxh38$ = styledTitle_0;
  package$styled.styledBody_na2bsy$ = styledBody;
  package$styled.styledAddress_vixkf4$ = styledAddress;
  package$styled.styledArticle_lgmfz2$ = styledArticle;
  package$styled.styledAside_rd7t5o$ = styledAside;
  package$styled.styledFooter_abs6jp$ = styledFooter;
  package$styled.styledHeader_nyg1zh$ = styledHeader;
  package$styled.styledH1_k7892h$ = styledH1;
  package$styled.styledH2_sn6rre$ = styledH2;
  package$styled.styledH3_xxyrit$ = styledH3;
  package$styled.styledH4_pi08tw$ = styledH4;
  package$styled.styledH5_h21q4z$ = styledH5;
  package$styled.styledH6_8m37g2$ = styledH6;
  package$styled.styledMain_pe1pvd$ = styledMain;
  package$styled.styledNav_cdm54f$ = styledNav;
  package$styled.styledSection_46srkf$ = styledSection;
  package$styled.styledBlockquote_ysxgdt$ = styledBlockquote;
  package$styled.styledDd_dz3lwg$ = styledDd;
  package$styled.styledDiv_nl27x9$ = styledDiv;
  package$styled.styledDl_hgjic8$ = styledDl;
  package$styled.styledDt_kxzes0$ = styledDt;
  package$styled.styledFigcaption_c04876$ = styledFigcaption;
  package$styled.styledFigure_le7sck$ = styledFigure;
  package$styled.styledHr_epf60a$ = styledHr;
  package$styled.styledLi_8qvw1v$ = styledLi;
  package$styled.styledOl_kgxcnx$ = styledOl;
  package$styled.styledP_iop6fw$ = styledP;
  package$styled.styledPre_ik11in$ = styledPre;
  package$styled.styledUl_s8spxz$ = styledUl;
  package$styled.styledA_8k1tal$ = styledA;
  package$styled.styledAbbr_6au89b$ = styledAbbr;
  package$styled.styledB_shm19u$ = styledB;
  package$styled.styledBdi_791cr1$ = styledBdi;
  package$styled.styledBdo_rmeakn$ = styledBdo;
  package$styled.styledBr_6xjsq8$ = styledBr;
  package$styled.styledCite_ketyeh$ = styledCite;
  package$styled.styledCode_afw0kt$ = styledCode;
  package$styled.styledDfn_n6kfq0$ = styledDfn;
  package$styled.styledEm_veb43c$ = styledEm;
  package$styled.styledI_um3lkl$ = styledI;
  package$styled.styledKbd_1n2oah$ = styledKbd;
  package$styled.styledMark_bpz7pp$ = styledMark;
  package$styled.styledQ_r4np4t$ = styledQ;
  package$styled.styledRp_cwexwi$ = styledRp;
  package$styled.styledRt_kvf4v6$ = styledRt;
  package$styled.styledRuby_za616i$ = styledRuby;
  package$styled.styledSamp_yhe0i7$ = styledSamp;
  package$styled.styledSmall_s8f5bh$ = styledSmall;
  package$styled.styledSpan_wnx53q$ = styledSpan;
  package$styled.styledStrong_1nxmeh$ = styledStrong;
  package$styled.styledSub_og4q1g$ = styledSub;
  package$styled.styledSup_mq6hoa$ = styledSup;
  package$styled.styledTime_iiw05p$ = styledTime;
  package$styled.styledVar_vje9zh$ = styledVar;
  package$styled.styledArea_oyrah7$ = styledArea;
  package$styled.styledAudio_wpd72a$ = styledAudio;
  package$styled.styledImg_7q4769$ = styledImg;
  package$styled.styledMap_7ty1qj$ = styledMap;
  package$styled.styledVideo_plb1hj$ = styledVideo;
  package$styled.styledEmbed_ha10uz$ = styledEmbed;
  package$styled.styledIframe_kqjv7h$ = styledIframe;
  package$styled.styledIframe_mfopg8$ = styledIframe_0;
  package$styled.styledObject_u1xvy9$ = styledObject;
  package$styled.styledParam_70o309$ = styledParam;
  package$styled.styledPicture_6hj3qi$ = styledPicture;
  package$styled.styledSource_12vx3v$ = styledSource;
  package$styled.styledSvg_hw0qe1$ = styledSvg;
  package$styled.styledSvg_4m290w$ = styledSvg_0;
  package$styled.styledMath_cnrgq0$ = styledMath;
  package$styled.styledCanvas_hw0qe1$ = styledCanvas;
  package$styled.styledCanvas_mheybc$ = styledCanvas_0;
  package$styled.styledNoscript_xt87u4$ = styledNoscript;
  package$styled.styledScript_f5jx5h$ = styledScript;
  package$styled.styledDel_sodis7$ = styledDel;
  package$styled.styledIns_v7acme$ = styledIns;
  package$styled.styledCaption_ff1mjy$ = styledCaption;
  package$styled.styledCol_1gtqb0$ = styledCol;
  package$styled.styledColgroup_j3cjpd$ = styledColgroup;
  package$styled.styledTable_il2xhi$ = styledTable;
  package$styled.styledTbody_al0num$ = styledTbody;
  package$styled.styledTd_gx5b5c$ = styledTd;
  package$styled.styledTfoot_u1clma$ = styledTfoot;
  package$styled.styledTh_953rpx$ = styledTh;
  package$styled.styledThead_b8pjcw$ = styledThead;
  package$styled.styledTr_u95wke$ = styledTr;
  package$styled.styledButton_v3mt7e$ = styledButton;
  package$styled.styledDatalist_q0qxew$ = styledDatalist;
  package$styled.styledFieldset_xj98jc$ = styledFieldset;
  package$styled.styledForm_k88gii$ = styledForm;
  package$styled.styledInput_gxkg23$ = styledInput;
  package$styled.styledLabel_119a74$ = styledLabel;
  package$styled.styledLegend_3psej1$ = styledLegend;
  package$styled.styledMeter_f1skx7$ = styledMeter;
  package$styled.styledOptgroup_vqdpuf$ = styledOptgroup;
  package$styled.styledOption_hw0qe1$ = styledOption;
  package$styled.styledOption_m0ne2d$ = styledOption_0;
  package$styled.styledOutput_gldd6p$ = styledOutput;
  package$styled.styledProgress_6rgx5f$ = styledProgress;
  package$styled.styledSelect_46ho4c$ = styledSelect;
  package$styled.styledTextarea_fmll6w$ = styledTextarea;
  package$styled.styledTextarea_zcvaif$ = styledTextarea_0;
  package$styled.styledDetails_hf2xda$ = styledDetails;
  package$styled.styledDialog_m9v0a0$ = styledDialog;
  package$styled.styledSummary_gn4pqq$ = styledSummary;
  var package$sheets = package$styled.sheets || (package$styled.sheets = {});
  package$sheets.CSSOMPersistentSheet = CSSOMPersistentSheet;
  Object.defineProperty(RemoveMode, 'OnBrowserIdle', {
    get: RemoveMode$OnBrowserIdle_getInstance
  });
  Object.defineProperty(RemoveMode, 'Instantly', {
    get: RemoveMode$Instantly_getInstance
  });
  package$sheets.RemoveMode = RemoveMode;
  package$sheets.CSSOMSheet = CSSOMSheet;
  package$sheets.DevSheet = DevSheet;
  Object.defineProperty(package$sheets, 'styleId_8be2vx$', {
    get: function () {
      return styleId;
    }
  });
  Object.defineProperty(package$sheets, 'importStyleId_8be2vx$', {
    get: function () {
      return importStyleId;
    }
  });
  Object.defineProperty(RuleType, 'REGULAR', {
    get: RuleType$REGULAR_getInstance
  });
  Object.defineProperty(RuleType, 'IMPORT', {
    get: RuleType$IMPORT_getInstance
  });
  package$sheets.RuleType = RuleType;
  package$sheets.Sheet = Sheet;
  Object.defineProperty(package$sheets, 'DEFAULT_MAX_RULES_PER_SHEET_8be2vx$', {
    get: function () {
      return DEFAULT_MAX_RULES_PER_SHEET;
    }
  });
  package$sheets.AbstractSheet = AbstractSheet;
  package$sheets.styleElementsSelector_y4putb$ = styleElementsSelector;
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
  Object.defineProperty(StyledDOMBuilderImpl.prototype, 'type', Object.getOwnPropertyDescriptor(StyledDOMBuilder.prototype, 'type'));
  StyledDOMBuilderImpl.prototype.create = StyledDOMBuilder.prototype.create;
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
  Kotlin.defineModule('kotlin-styled-next', _);
  return _;
}));
