(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'react-query', 'react-router-dom', 'react-router', 'react', 'kotlin-react-dom-legacy', 'model', 'kotlin-react-legacy', 'kotlin-extensions', 'axios', 'react-query/devtools'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('react-query'), require('react-router-dom'), require('react-router'), require('react'), require('kotlin-react-dom-legacy'), require('model'), require('kotlin-react-legacy'), require('kotlin-extensions'), require('axios'), require('react-query/devtools'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'client'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'client'.");
    }if (typeof this['react-query'] === 'undefined') {
      throw new Error("Error loading module 'client'. Its dependency 'react-query' was not found. Please, check whether 'react-query' is loaded prior to 'client'.");
    }if (typeof this['react-router-dom'] === 'undefined') {
      throw new Error("Error loading module 'client'. Its dependency 'react-router-dom' was not found. Please, check whether 'react-router-dom' is loaded prior to 'client'.");
    }if (typeof this['react-router'] === 'undefined') {
      throw new Error("Error loading module 'client'. Its dependency 'react-router' was not found. Please, check whether 'react-router' is loaded prior to 'client'.");
    }if (typeof react === 'undefined') {
      throw new Error("Error loading module 'client'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'client'.");
    }if (typeof this['kotlin-react-dom-legacy'] === 'undefined') {
      throw new Error("Error loading module 'client'. Its dependency 'kotlin-react-dom-legacy' was not found. Please, check whether 'kotlin-react-dom-legacy' is loaded prior to 'client'.");
    }if (typeof model === 'undefined') {
      throw new Error("Error loading module 'client'. Its dependency 'model' was not found. Please, check whether 'model' is loaded prior to 'client'.");
    }if (typeof this['kotlin-react-legacy'] === 'undefined') {
      throw new Error("Error loading module 'client'. Its dependency 'kotlin-react-legacy' was not found. Please, check whether 'kotlin-react-legacy' is loaded prior to 'client'.");
    }if (typeof this['kotlin-extensions'] === 'undefined') {
      throw new Error("Error loading module 'client'. Its dependency 'kotlin-extensions' was not found. Please, check whether 'kotlin-extensions' is loaded prior to 'client'.");
    }if (typeof axios === 'undefined') {
      throw new Error("Error loading module 'client'. Its dependency 'axios' was not found. Please, check whether 'axios' is loaded prior to 'client'.");
    }if (typeof ReactQueryDevtools === 'undefined') {
      throw new Error("Error loading module 'client'. Its dependency 'react-query/devtools' was not found. Please, check whether 'react-query/devtools' is loaded prior to 'client'.");
    }root.client = factory(typeof client === 'undefined' ? {} : client, kotlin, this['react-query'], this['react-router-dom'], this['react-router'], react, this['kotlin-react-dom-legacy'], model, this['kotlin-react-legacy'], this['kotlin-extensions'], axios, ReactQueryDevtools);
  }
}(this, function (_, Kotlin, $module$react_query, $module$react_router_dom, $module$react_router, $module$react, $module$kotlin_react_dom_legacy, $module$model, $module$kotlin_react_legacy, $module$kotlin_extensions, $module$axios, $module$react_query_devtools) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var QueryClient = $module$react_query.QueryClient;
  var ensureNotNull = Kotlin.ensureNotNull;
  var createElement = $module$react.createElement;
  var Unit = Kotlin.kotlin.Unit;
  var render = $module$kotlin_react_dom_legacy.react.dom.render_9jwdg9$;
  var Group = $module$model.ru.altmanea.edu.server.model.Group;
  var fc = $module$kotlin_react_legacy.react.fc_gcrbg4$;
  var Config = $module$model.ru.altmanea.edu.server.model.Config;
  var useQuery = $module$react_query.useQuery;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var attributesMapOf = $module$kotlin_react_dom_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var LI_init = $module$kotlin_react_dom_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.LI;
  var RDOMBuilder = $module$kotlin_react_dom_legacy.react.dom.RDOMBuilder;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  var H3_init = $module$kotlin_react_dom_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H3;
  var OL_init = $module$kotlin_react_dom_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OL;
  var DIV_init = $module$kotlin_react_dom_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var Teacher = $module$model.ru.altmanea.edu.server.model.Teacher;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var queryClient;
  function main$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.attrs.path = '/teachers';
    $receiver.attrs.element = createElement(fcContainerTeacherList());
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.attrs.path = '/teachers/:id';
    $receiver.attrs.element = createElement(fcContainerTeacherList());
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.attrs.path = '/groups';
    $receiver.attrs.element = createElement(fcContainerGroupList());
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.attrs.path = '/groups/:group';
    $receiver.attrs.element = createElement(fcContainerGroupList());
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda($receiver) {
    $receiver.invoke_qk0v40$($module$react_router.Route, main$lambda$lambda$lambda$lambda$lambda);
    $receiver.invoke_qk0v40$($module$react_router.Route, main$lambda$lambda$lambda$lambda$lambda_0);
    $receiver.invoke_qk0v40$($module$react_router.Route, main$lambda$lambda$lambda$lambda$lambda_1);
    $receiver.invoke_qk0v40$($module$react_router.Route, main$lambda$lambda$lambda$lambda$lambda_2);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_0($receiver) {
    return Unit;
  }
  function main$lambda$lambda$lambda($receiver) {
    $receiver.attrs.client = queryClient;
    $receiver.invoke_qk0v40$($module$react_router.Routes, main$lambda$lambda$lambda$lambda);
    $receiver.child_1mw94g$(cReactQueryDevtools(), void 0, main$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function main$lambda$lambda($receiver) {
    $receiver.invoke_qk0v40$($module$react_query.QueryClientProvider, main$lambda$lambda$lambda);
    return Unit;
  }
  function main$lambda($receiver) {
    $receiver.invoke_qk0v40$($module$react_router_dom.HashRouter, main$lambda$lambda);
    return Unit;
  }
  function main() {
    render(ensureNotNull(document.getElementById('root')), void 0, main$lambda);
  }
  function li$lambda(closure$classes) {
    return function (it) {
      return new LI_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function h3$lambda(closure$classes) {
    return function (it) {
      return new H3_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function ol$lambda(closure$classes) {
    return function (it) {
      return new OL_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function fcGroupList$lambda$lambda$lambda$lambda$lambda(closure$groupItem, closure$group) {
    return function ($receiver) {
      $receiver.attrs.to = '/groups/' + closure$groupItem.uuid;
      $receiver.unaryPlus_pdl1vz$(closure$group.description + ' ' + '\t');
      return Unit;
    };
  }
  function fcGroupList$lambda($receiver, props) {
    var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(h3$lambda(null));
    $receiver_0.unaryPlus_pdl1vz$('Groups');
    $receiver.child_30b5ua$($receiver_0.create());
    var $receiver_0_0 = RDOMBuilder.Companion.invoke_f6ihu2$(ol$lambda(null));
    var $receiver_1 = props.groups;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = $receiver_1.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_1 = destination.add_11rb$;
      checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
      var $receiver_0_1 = RDOMBuilder.Companion.invoke_f6ihu2$(li$lambda(null));
      var group = new Group(item.elem.name, item.elem.code, item.elem.formOfEducation);
      $receiver_0_1.invoke_qk0v40$($module$react_router_dom.Link, fcGroupList$lambda$lambda$lambda$lambda$lambda(item, group));
      $receiver_0_0.child_30b5ua$($receiver_0_1.create());
      tmp$_1.call(destination, Unit);
    }
    $receiver.child_30b5ua$($receiver_0_0.create());
    return Unit;
  }
  function fcGroupList() {
    return fc('GroupList', fcGroupList$lambda);
  }
  function fcContainerGroupList$lambda$lambda(it) {
    var $receiver = {};
    $receiver.url = Config.Companion.groupsURL;
    return $module$axios($receiver);
  }
  function fcContainerGroupList$lambda$lambda_0(closure$items) {
    return function ($receiver) {
      $receiver.attrs.groups = closure$items;
      return Unit;
    };
  }
  function fcContainerGroupList$lambda($receiver, f) {
    var tmp$, tmp$_0, tmp$_1;
    var queryClient = $module$react_query.useQueryClient();
    var query = useQuery('groupList', fcContainerGroupList$lambda$lambda);
    if (query.isLoading) {
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(div$lambda(null));
      $receiver_0.unaryPlus_pdl1vz$('Loading ..');
      $receiver.child_30b5ua$($receiver_0.create());
    } else if (query.isError) {
      var $receiver_0_0 = RDOMBuilder.Companion.invoke_f6ihu2$(div$lambda(null));
      $receiver_0_0.unaryPlus_pdl1vz$('Error!');
      $receiver.child_30b5ua$($receiver_0_0.create());
    } else {
      var items = (tmp$_1 = (tmp$_0 = (tmp$ = query.data) != null ? tmp$.data : null) != null ? toList(tmp$_0) : null) != null ? tmp$_1 : emptyList();
      $receiver.child_1mw94g$(fcGroupList(), void 0, fcContainerGroupList$lambda$lambda_0(items));
    }
    return Unit;
  }
  function fcContainerGroupList() {
    return fc('QueryGroupList', fcContainerGroupList$lambda);
  }
  function li$lambda_0(closure$classes) {
    return function (it) {
      return new LI_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function h3$lambda_0(closure$classes) {
    return function (it) {
      return new H3_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function ol$lambda_0(closure$classes) {
    return function (it) {
      return new OL_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda_0(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function fcTeacherList$lambda$lambda$lambda$lambda$lambda(closure$teacherItem, closure$teacher) {
    return function ($receiver) {
      $receiver.attrs.to = '/teachers/' + closure$teacherItem.uuid;
      $receiver.unaryPlus_pdl1vz$(closure$teacher.name + ' ' + '\t');
      return Unit;
    };
  }
  function fcTeacherList$lambda($receiver, props) {
    var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(h3$lambda_0(null));
    $receiver_0.unaryPlus_pdl1vz$('Teachers');
    $receiver.child_30b5ua$($receiver_0.create());
    var $receiver_0_0 = RDOMBuilder.Companion.invoke_f6ihu2$(ol$lambda_0(null));
    var $receiver_1 = props.teachers;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = $receiver_1.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_1 = destination.add_11rb$;
      checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
      var $receiver_0_1 = RDOMBuilder.Companion.invoke_f6ihu2$(li$lambda_0(null));
      var teacher = new Teacher(item.elem.name);
      $receiver_0_1.invoke_qk0v40$($module$react_router_dom.Link, fcTeacherList$lambda$lambda$lambda$lambda$lambda(item, teacher));
      $receiver_0_0.child_30b5ua$($receiver_0_1.create());
      tmp$_1.call(destination, Unit);
    }
    $receiver.child_30b5ua$($receiver_0_0.create());
    return Unit;
  }
  function fcTeacherList() {
    return fc('TeacherList', fcTeacherList$lambda);
  }
  function fcContainerTeacherList$lambda$lambda(it) {
    var $receiver = {};
    $receiver.url = Config.Companion.teachersURL;
    return $module$axios($receiver);
  }
  function fcContainerTeacherList$lambda$lambda_0(closure$items) {
    return function ($receiver) {
      $receiver.attrs.teachers = closure$items;
      return Unit;
    };
  }
  function fcContainerTeacherList$lambda($receiver, f) {
    var tmp$, tmp$_0, tmp$_1;
    var queryClient = $module$react_query.useQueryClient();
    var query = useQuery('teacherList', fcContainerTeacherList$lambda$lambda);
    if (query.isLoading) {
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(div$lambda_0(null));
      $receiver_0.unaryPlus_pdl1vz$('Loading ..');
      $receiver.child_30b5ua$($receiver_0.create());
    } else if (query.isError) {
      var $receiver_0_0 = RDOMBuilder.Companion.invoke_f6ihu2$(div$lambda_0(null));
      $receiver_0_0.unaryPlus_pdl1vz$('Error!');
      $receiver.child_30b5ua$($receiver_0_0.create());
    } else {
      var items = (tmp$_1 = (tmp$_0 = (tmp$ = query.data) != null ? tmp$.data : null) != null ? toList(tmp$_0) : null) != null ? tmp$_1 : emptyList();
      $receiver.child_1mw94g$(fcTeacherList(), void 0, fcContainerTeacherList$lambda$lambda_0(items));
    }
    return Unit;
  }
  function fcContainerTeacherList() {
    return fc('QueryTeacherList', fcContainerTeacherList$lambda);
  }
  function ReactQueryDevToolsOption(initialIsOpen) {
    if (initialIsOpen === void 0)
      initialIsOpen = true;
    this.initialIsOpen = initialIsOpen;
  }
  ReactQueryDevToolsOption.$metadata$ = {kind: Kind_CLASS, simpleName: 'ReactQueryDevToolsOption', interfaces: []};
  var reactQueryDevtools;
  function cReactQueryDevtools$lambda(closure$options) {
    return function ($receiver, f) {
      $receiver.child_30b5ua$(reactQueryDevtools(closure$options));
      return Unit;
    };
  }
  function cReactQueryDevtools(options) {
    if (options === void 0)
      options = new ReactQueryDevToolsOption();
    return fc('ReactQueryDevtools', cReactQueryDevtools$lambda(options));
  }
  _.main = main;
  $$importsForInline$$['kotlin-react-dom-legacy'] = $module$kotlin_react_dom_legacy;
  var package$component = _.component || (_.component = {});
  package$component.fcGroupList = fcGroupList;
  package$component.fcContainerGroupList = fcContainerGroupList;
  package$component.fcTeacherList = fcTeacherList;
  package$component.fcContainerTeacherList = fcContainerTeacherList;
  var package$wrappers = _.wrappers || (_.wrappers = {});
  package$wrappers.ReactQueryDevToolsOption = ReactQueryDevToolsOption;
  package$wrappers.cReactQueryDevtools_aoqtym$ = cReactQueryDevtools;
  queryClient = new QueryClient();
  reactQueryDevtools = $module$react_query_devtools.ReactQueryDevtools;
  main();
  return _;
}));

//# sourceMappingURL=client.js.map
