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
  var KeyframesBuilder = $module$kotlin_css.kotlinx.css.properties.KeyframesBuilder_61zpoe$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var Map = Kotlin.kotlin.collections.Map;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
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
  GlobalCssAccess$SheetType.$metadata$ = {kind: Kind_CLASS, simpleName: 'SheetType', interfaces: [Enum]};
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
  GlobalCssAccess.$metadata$ = {kind: Kind_OBJECT, simpleName: 'GlobalCssAccess', interfaces: []};
  var GlobalCssAccess_instance = null;
  function GlobalCssAccess_getInstance() {
    if (GlobalCssAccess_instance === null) {
      new GlobalCssAccess();
    }return GlobalCssAccess_instance;
  }
  function UsedCssInfo(className, usedBy, groupId) {
    this.className = className;
    this.usedBy = usedBy;
    this.groupId = groupId;
  }
  UsedCssInfo.$metadata$ = {kind: Kind_CLASS, simpleName: 'UsedCssInfo', interfaces: []};
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
  CssInfo.$metadata$ = {kind: Kind_CLASS, simpleName: 'CssInfo', interfaces: []};
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
  Object.defineProperty(GlobalStyles.prototype, 'incrementedClassName_0', {configurable: true, get: function () {
    var tmp$;
    return tmp$ = this.incrementedClassName_vq605l$_0, this.incrementedClassName_vq605l$_0 = tmp$ + 1 | 0, tmp$;
  }, set: function (incrementedClassName) {
    this.incrementedClassName_vq605l$_0 = incrementedClassName;
  }});
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
  GlobalStyles.$metadata$ = {kind: Kind_OBJECT, simpleName: 'GlobalStyles', interfaces: []};
  var GlobalStyles_instance = null;
  function GlobalStyles_getInstance() {
    if (GlobalStyles_instance === null) {
      new GlobalStyles();
    }return GlobalStyles_instance;
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
  MemoizedResult.$metadata$ = {kind: Kind_CLASS, simpleName: 'MemoizedResult', interfaces: []};
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
  function StyledBuilder() {
  }
  StyledBuilder.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'StyledBuilder', interfaces: []};
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
  Object.defineProperty(StyledDOMBuilder.prototype, 'type', {configurable: true, get: function () {
    return this.attrs.tagName;
  }});
  StyledDOMBuilder.prototype.create = function () {
    return Styled_getInstance().createElement_ji6hf8$(this.type, this.css, this.domProps, this.childList);
  };
  function StyledDOMBuilder$Companion() {
    StyledDOMBuilder$Companion_instance = this;
  }
  StyledDOMBuilder$Companion.prototype.invoke_f6ihu2$ = function (factory) {
    return new StyledDOMBuilderImpl(factory);
  };
  StyledDOMBuilder$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var StyledDOMBuilder$Companion_instance = null;
  function StyledDOMBuilder$Companion_getInstance() {
    if (StyledDOMBuilder$Companion_instance === null) {
      new StyledDOMBuilder$Companion();
    }return StyledDOMBuilder$Companion_instance;
  }
  StyledDOMBuilder.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'StyledDOMBuilder', interfaces: [StyledBuilder, RDOMBuilder]};
  function StyledDOMBuilderImpl(factory) {
    RDOMBuilderImpl.call(this, factory);
    this.css_sotjku$_0 = CssBuilder();
  }
  Object.defineProperty(StyledDOMBuilderImpl.prototype, 'css', {configurable: true, get: function () {
    return this.css_sotjku$_0;
  }});
  StyledDOMBuilderImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'StyledDOMBuilderImpl', interfaces: [RDOMBuilderImpl, StyledDOMBuilder]};
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
      var isFresh = {v: tmp$_0.component1()}, className = tmp$_0.component2();
      useCustomInsertionEffect([isFresh.v, className], customStyled$lambda$lambda_0(isFresh, css));
      useCustomInsertionEffect([classes], customStyled$lambda$lambda_1);
      var newProps = clone(props);
      if (classes.length > 0) {
        className = className + ' ' + classes;
      }if (!equals(props.className, undefined)) {
        className = toString(props.className) + ' ' + className;
      }newProps.className = className;
      newProps.ref = rRef;
      delete newProps.css;
      delete newProps.classes;
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
  Styled.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Styled', interfaces: []};
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
    var rules = tmp$_0.component1(), handleRules = tmp$_0.component2();
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
      var selector = element_0.component1(), css = element_0.component4();
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
      var selector = element.component1(), css = element.component4();
      var delimiter = isPseudoClass(selector) ? '' : ' ';
      var list = getCssRules(css, joinToString_0(split(selector, [',']), void 0, void 0, void 0, void 0, void 0, buildRules$lambda$lambda(outerSelector, delimiter)));
      addAll(destination, list);
    }
    return destination;
  }
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
  CSSOMPersistentSheet.$metadata$ = {kind: Kind_CLASS, simpleName: 'CSSOMPersistentSheet', interfaces: [AbstractSheet]};
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
  RemoveMode.$metadata$ = {kind: Kind_CLASS, simpleName: 'RemoveMode', interfaces: [Enum]};
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
  Object.defineProperty(CSSOMSheet.prototype, 'groupId_0', {configurable: true, get: function () {
    var $receiver = this.groupId_hb5imp$_0;
    this.groupId_hb5imp$_0 = this.groupId_hb5imp$_0 + 1 | 0;
    return $receiver;
  }, set: function (groupId) {
    this.groupId_hb5imp$_0 = groupId;
  }});
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
  CSSOMSheet$compressSheets$RulesGroupUpdate.$metadata$ = {kind: Kind_CLASS, simpleName: 'RulesGroupUpdate', interfaces: []};
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
  CSSOMSheet$RulesGroup.$metadata$ = {kind: Kind_CLASS, simpleName: 'RulesGroup', interfaces: []};
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
  CSSOMSheet.$metadata$ = {kind: Kind_CLASS, simpleName: 'CSSOMSheet', interfaces: [AbstractSheet]};
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
  DevSheet.$metadata$ = {kind: Kind_CLASS, simpleName: 'DevSheet', interfaces: [AbstractSheet]};
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
  RuleType.$metadata$ = {kind: Kind_CLASS, simpleName: 'RuleType', interfaces: [Enum]};
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
  Sheet.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Sheet', interfaces: []};
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
  Object.defineProperty(AbstractSheet.prototype, 'id_0', {configurable: true, get: function () {
    switch (this.ruleType_0.name) {
      case 'REGULAR':
        return styleId;
      case 'IMPORT':
        return importStyleId;
      default:return Kotlin.noWhenBranchMatched();
    }
  }});
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
  AbstractSheet.$metadata$ = {kind: Kind_CLASS, simpleName: 'AbstractSheet', interfaces: [Sheet]};
  function styleElementsSelector(id) {
    return "[id^='" + id + "_'],[id='" + id + "']";
  }
  $$importsForInline$$['kotlin-extensions'] = $module$kotlin_extensions;
  var package$styled = _.styled || (_.styled = {});
  Object.defineProperty(package$styled, 'GlobalCssAccess', {get: GlobalCssAccess_getInstance});
  package$styled.UsedCssInfo = UsedCssInfo;
  package$styled.CssInfo = CssInfo;
  Object.defineProperty(package$styled, 'GlobalStyles', {get: GlobalStyles_getInstance});
  package$styled.buildPrefixedString_7wku0c$ = buildPrefixedString;
  package$styled.useStructMemo_8intxr$ = useStructMemo;
  package$styled.useCustomInsertionEffect_f47d3f$ = useCustomInsertionEffect;
  $$importsForInline$$['kotlin-css'] = $module$kotlin_css;
  package$styled.StyledBuilder = StyledBuilder;
  package$styled.StyledElementBuilder = StyledElementBuilder;
  package$styled.StyledElementBuilderImpl = StyledElementBuilderImpl;
  Object.defineProperty(StyledDOMBuilder, 'Companion', {get: StyledDOMBuilder$Companion_getInstance});
  package$styled.StyledDOMBuilder = StyledDOMBuilder;
  package$styled.StyledDOMBuilderImpl = StyledDOMBuilderImpl;
  $$importsForInline$$['kotlin-react-core'] = $module$kotlin_react_core;
  package$styled.customStyled_kcmwxo$ = customStyled;
  package$styled.checkGeneratedCss_mdegqc$ = checkGeneratedCss;
  package$styled.toClassName_n005mh$ = toClassName;
  Object.defineProperty(package$styled, 'Styled', {get: Styled_getInstance});
  package$styled.getCssRules_lbpiid$ = getCssRules;
  $$importsForInline$$['kotlinx-html-js'] = $module$kotlinx_html_js;
  var package$sheets = package$styled.sheets || (package$styled.sheets = {});
  package$sheets.CSSOMPersistentSheet = CSSOMPersistentSheet;
  Object.defineProperty(RemoveMode, 'OnBrowserIdle', {get: RemoveMode$OnBrowserIdle_getInstance});
  Object.defineProperty(RemoveMode, 'Instantly', {get: RemoveMode$Instantly_getInstance});
  package$sheets.RemoveMode = RemoveMode;
  package$sheets.CSSOMSheet = CSSOMSheet;
  package$sheets.DevSheet = DevSheet;
  Object.defineProperty(RuleType, 'REGULAR', {get: RuleType$REGULAR_getInstance});
  Object.defineProperty(RuleType, 'IMPORT', {get: RuleType$IMPORT_getInstance});
  package$sheets.RuleType = RuleType;
  package$sheets.Sheet = Sheet;
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
  return _;
}));

//# sourceMappingURL=kotlin-styled-next.js.map
