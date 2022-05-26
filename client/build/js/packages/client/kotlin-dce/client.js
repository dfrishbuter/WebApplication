(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'react-query', 'react-router-dom', 'kotlin-react-dom-legacy', 'react-router', 'react', 'model', 'kotlin-react-legacy', 'kotlin-extensions', 'axios', 'kotlin-css', 'kotlin-styled-next', 'react-query/devtools'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('react-query'), require('react-router-dom'), require('kotlin-react-dom-legacy'), require('react-router'), require('react'), require('model'), require('kotlin-react-legacy'), require('kotlin-extensions'), require('axios'), require('kotlin-css'), require('kotlin-styled-next'), require('react-query/devtools'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'client'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'client'.");
    }if (typeof this['react-query'] === 'undefined') {
      throw new Error("Error loading module 'client'. Its dependency 'react-query' was not found. Please, check whether 'react-query' is loaded prior to 'client'.");
    }if (typeof this['react-router-dom'] === 'undefined') {
      throw new Error("Error loading module 'client'. Its dependency 'react-router-dom' was not found. Please, check whether 'react-router-dom' is loaded prior to 'client'.");
    }if (typeof this['kotlin-react-dom-legacy'] === 'undefined') {
      throw new Error("Error loading module 'client'. Its dependency 'kotlin-react-dom-legacy' was not found. Please, check whether 'kotlin-react-dom-legacy' is loaded prior to 'client'.");
    }if (typeof this['react-router'] === 'undefined') {
      throw new Error("Error loading module 'client'. Its dependency 'react-router' was not found. Please, check whether 'react-router' is loaded prior to 'client'.");
    }if (typeof react === 'undefined') {
      throw new Error("Error loading module 'client'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'client'.");
    }if (typeof model === 'undefined') {
      throw new Error("Error loading module 'client'. Its dependency 'model' was not found. Please, check whether 'model' is loaded prior to 'client'.");
    }if (typeof this['kotlin-react-legacy'] === 'undefined') {
      throw new Error("Error loading module 'client'. Its dependency 'kotlin-react-legacy' was not found. Please, check whether 'kotlin-react-legacy' is loaded prior to 'client'.");
    }if (typeof this['kotlin-extensions'] === 'undefined') {
      throw new Error("Error loading module 'client'. Its dependency 'kotlin-extensions' was not found. Please, check whether 'kotlin-extensions' is loaded prior to 'client'.");
    }if (typeof axios === 'undefined') {
      throw new Error("Error loading module 'client'. Its dependency 'axios' was not found. Please, check whether 'axios' is loaded prior to 'client'.");
    }if (typeof this['kotlin-css'] === 'undefined') {
      throw new Error("Error loading module 'client'. Its dependency 'kotlin-css' was not found. Please, check whether 'kotlin-css' is loaded prior to 'client'.");
    }if (typeof this['kotlin-styled-next'] === 'undefined') {
      throw new Error("Error loading module 'client'. Its dependency 'kotlin-styled-next' was not found. Please, check whether 'kotlin-styled-next' is loaded prior to 'client'.");
    }if (typeof ReactQueryDevtools === 'undefined') {
      throw new Error("Error loading module 'client'. Its dependency 'react-query/devtools' was not found. Please, check whether 'react-query/devtools' is loaded prior to 'client'.");
    }root.client = factory(typeof client === 'undefined' ? {} : client, kotlin, this['react-query'], this['react-router-dom'], this['kotlin-react-dom-legacy'], this['react-router'], react, model, this['kotlin-react-legacy'], this['kotlin-extensions'], axios, this['kotlin-css'], this['kotlin-styled-next'], ReactQueryDevtools);
  }
}(this, function (_, Kotlin, $module$react_query, $module$react_router_dom, $module$kotlin_react_dom_legacy, $module$react_router, $module$react, $module$model, $module$kotlin_react_legacy, $module$kotlin_extensions, $module$axios, $module$kotlin_css, $module$kotlin_styled_next, $module$react_query_devtools) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var QueryClient = $module$react_query.QueryClient;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Unit = Kotlin.kotlin.Unit;
  var createElement = $module$react.createElement;
  var Config = $module$model.ru.altmanea.edu.server.model.Config;
  var render = $module$kotlin_react_dom_legacy.react.dom.render_9jwdg9$;
  var attributesMapOf = $module$kotlin_react_dom_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var DIV_init = $module$kotlin_react_dom_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var RDOMBuilder = $module$kotlin_react_dom_legacy.react.dom.RDOMBuilder;
  var fc = $module$kotlin_react_legacy.react.fc_gcrbg4$;
  var useQuery = $module$react_query.useQuery;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var LI_init = $module$kotlin_react_dom_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.LI;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var H3_init = $module$kotlin_react_dom_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H3;
  var OL_init = $module$kotlin_react_dom_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OL;
  var set_border = $module$kotlin_css.kotlinx.css.set_border_krvuuu$;
  var useParams = $module$react_router.useParams;
  var enumEncode = $module$kotlin_react_dom_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
  var attributesMapOf_0 = $module$kotlin_react_dom_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var TH_init = $module$kotlin_react_dom_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TH;
  var TD_init = $module$kotlin_react_dom_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TD;
  var TR_init = $module$kotlin_react_dom_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TR;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  var html = $module$kotlin_styled_next.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
  var TABLE_init = $module$kotlin_styled_next.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TABLE;
  var StyledDOMBuilder = $module$kotlin_styled_next.styled.StyledDOMBuilder;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  function div$lambda(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  var queryClient;
  function main$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.attrs.to = '/teachers';
    $receiver.unaryPlus_pdl1vz$('Teachers');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.attrs.to = '/groups';
    $receiver.unaryPlus_pdl1vz$('Groups');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.attrs.to = '/subjects';
    $receiver.unaryPlus_pdl1vz$('Subjects');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.attrs.path = '/teachers';
    $receiver.attrs.element = createElement(fcContainerTeacherList());
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.attrs.path = '/groups';
    $receiver.attrs.element = createElement(fcContainerGroupList());
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_4($receiver) {
    $receiver.attrs.path = '/subjects';
    $receiver.attrs.element = createElement(fcContainerSubjectList());
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_5($receiver) {
    $receiver.attrs.path = Config.Companion.workPlansByTeacherCommonPath;
    $receiver.attrs.element = createElement(fcContainerWorkPlanList('/by_teacher'));
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_6($receiver) {
    $receiver.attrs.path = Config.Companion.workPlansByGroupCommonPath;
    $receiver.attrs.element = createElement(fcContainerWorkPlanList('/by_group'));
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_7($receiver) {
    $receiver.attrs.path = Config.Companion.workPlansBySubjectCommonPath;
    $receiver.attrs.element = createElement(fcContainerWorkPlanList('/by_subject'));
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda($receiver) {
    $receiver.invoke_qk0v40$($module$react_router.Route, main$lambda$lambda$lambda$lambda$lambda_2);
    $receiver.invoke_qk0v40$($module$react_router.Route, main$lambda$lambda$lambda$lambda$lambda_3);
    $receiver.invoke_qk0v40$($module$react_router.Route, main$lambda$lambda$lambda$lambda$lambda_4);
    $receiver.invoke_qk0v40$($module$react_router.Route, main$lambda$lambda$lambda$lambda$lambda_5);
    $receiver.invoke_qk0v40$($module$react_router.Route, main$lambda$lambda$lambda$lambda$lambda_6);
    $receiver.invoke_qk0v40$($module$react_router.Route, main$lambda$lambda$lambda$lambda$lambda_7);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_0($receiver) {
    return Unit;
  }
  function main$lambda$lambda$lambda($receiver) {
    $receiver.attrs.client = queryClient;
    var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(div$lambda(null));
    $receiver_0.invoke_qk0v40$($module$react_router_dom.Link, main$lambda$lambda$lambda$lambda$lambda);
    $receiver.child_30b5ua$($receiver_0.create());
    var $receiver_0_0 = RDOMBuilder.Companion.invoke_f6ihu2$(div$lambda(null));
    $receiver_0_0.invoke_qk0v40$($module$react_router_dom.Link, main$lambda$lambda$lambda$lambda$lambda_0);
    $receiver.child_30b5ua$($receiver_0_0.create());
    var $receiver_0_1 = RDOMBuilder.Companion.invoke_f6ihu2$(div$lambda(null));
    $receiver_0_1.invoke_qk0v40$($module$react_router_dom.Link, main$lambda$lambda$lambda$lambda$lambda_1);
    $receiver.child_30b5ua$($receiver_0_1.create());
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
  function div$lambda_0(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function fcGroupList$lambda$lambda$lambda$lambda$lambda(closure$groupItem) {
    return function ($receiver) {
      $receiver.attrs.to = Config.Companion.workPlansByGroupCommonPath + '/' + closure$groupItem.uuid;
      $receiver.unaryPlus_pdl1vz$(closure$groupItem.elem.code + ' ' + closure$groupItem.elem.name + ', ' + closure$groupItem.elem.formOfEducation + ' ' + '\t');
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
    var tmp$;
    tmp$ = $receiver_1.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var $receiver_0_1 = RDOMBuilder.Companion.invoke_f6ihu2$(li$lambda(null));
      $receiver_0_1.invoke_qk0v40$($module$react_router_dom.Link, fcGroupList$lambda$lambda$lambda$lambda$lambda(item));
      $receiver_0_0.child_30b5ua$($receiver_0_1.create());
      tmp$_0.call(destination, Unit);
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
    var query = useQuery('groupList', fcContainerGroupList$lambda$lambda);
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
  function div$lambda_1(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function fcSubjectList$lambda$lambda$lambda$lambda$lambda(closure$subjectItem) {
    return function ($receiver) {
      $receiver.attrs.to = Config.Companion.workPlansBySubjectCommonPath + '/' + closure$subjectItem.uuid;
      $receiver.unaryPlus_pdl1vz$(closure$subjectItem.elem + ' ' + '\t');
      return Unit;
    };
  }
  function fcSubjectList$lambda($receiver, props) {
    var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(h3$lambda_0(null));
    $receiver_0.unaryPlus_pdl1vz$('Subjects');
    $receiver.child_30b5ua$($receiver_0.create());
    var $receiver_0_0 = RDOMBuilder.Companion.invoke_f6ihu2$(ol$lambda_0(null));
    var $receiver_1 = props.subjects;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
    var tmp$;
    tmp$ = $receiver_1.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var $receiver_0_1 = RDOMBuilder.Companion.invoke_f6ihu2$(li$lambda_0(null));
      $receiver_0_1.invoke_qk0v40$($module$react_router_dom.Link, fcSubjectList$lambda$lambda$lambda$lambda$lambda(item));
      $receiver_0_0.child_30b5ua$($receiver_0_1.create());
      tmp$_0.call(destination, Unit);
    }
    $receiver.child_30b5ua$($receiver_0_0.create());
    return Unit;
  }
  function fcSubjectList() {
    return fc('SubjectList', fcSubjectList$lambda);
  }
  function fcContainerSubjectList$lambda$lambda(it) {
    var $receiver = {};
    $receiver.url = Config.Companion.subjectsURL;
    return $module$axios($receiver);
  }
  function fcContainerSubjectList$lambda$lambda_0(closure$items) {
    return function ($receiver) {
      $receiver.attrs.subjects = closure$items;
      return Unit;
    };
  }
  function fcContainerSubjectList$lambda($receiver, f) {
    var tmp$, tmp$_0, tmp$_1;
    var query = useQuery('subjectList', fcContainerSubjectList$lambda$lambda);
    if (query.isLoading) {
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(div$lambda_1(null));
      $receiver_0.unaryPlus_pdl1vz$('Loading ..');
      $receiver.child_30b5ua$($receiver_0.create());
    } else if (query.isError) {
      var $receiver_0_0 = RDOMBuilder.Companion.invoke_f6ihu2$(div$lambda_1(null));
      $receiver_0_0.unaryPlus_pdl1vz$('Error!');
      $receiver.child_30b5ua$($receiver_0_0.create());
    } else {
      var items = (tmp$_1 = (tmp$_0 = (tmp$ = query.data) != null ? tmp$.data : null) != null ? toList(tmp$_0) : null) != null ? tmp$_1 : emptyList();
      $receiver.child_1mw94g$(fcSubjectList(), void 0, fcContainerSubjectList$lambda$lambda_0(items));
    }
    return Unit;
  }
  function fcContainerSubjectList() {
    return fc('QuerySubjectList', fcContainerSubjectList$lambda);
  }
  function li$lambda_1(closure$classes) {
    return function (it) {
      return new LI_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function h3$lambda_1(closure$classes) {
    return function (it) {
      return new H3_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function ol$lambda_1(closure$classes) {
    return function (it) {
      return new OL_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda_2(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function fcTeacherList$lambda$lambda$lambda$lambda$lambda(closure$teacherItem) {
    return function ($receiver) {
      $receiver.attrs.to = Config.Companion.workPlansByTeacherCommonPath + '/' + closure$teacherItem.uuid;
      $receiver.unaryPlus_pdl1vz$(closure$teacherItem.elem.firstName + ' ' + closure$teacherItem.elem.lastName + ' ' + closure$teacherItem.elem.patronymic + ' ' + '\t');
      return Unit;
    };
  }
  function fcTeacherList$lambda($receiver, props) {
    var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(h3$lambda_1(null));
    $receiver_0.unaryPlus_pdl1vz$('Teachers');
    $receiver.child_30b5ua$($receiver_0.create());
    var $receiver_0_0 = RDOMBuilder.Companion.invoke_f6ihu2$(ol$lambda_1(null));
    var $receiver_1 = props.teachers;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
    var tmp$;
    tmp$ = $receiver_1.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var $receiver_0_1 = RDOMBuilder.Companion.invoke_f6ihu2$(li$lambda_1(null));
      $receiver_0_1.invoke_qk0v40$($module$react_router_dom.Link, fcTeacherList$lambda$lambda$lambda$lambda$lambda(item));
      $receiver_0_0.child_30b5ua$($receiver_0_1.create());
      tmp$_0.call(destination, Unit);
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
    var query = useQuery('teacherList', fcContainerTeacherList$lambda$lambda);
    if (query.isLoading) {
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(div$lambda_2(null));
      $receiver_0.unaryPlus_pdl1vz$('Loading ..');
      $receiver.child_30b5ua$($receiver_0.create());
    } else if (query.isError) {
      var $receiver_0_0 = RDOMBuilder.Companion.invoke_f6ihu2$(div$lambda_2(null));
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
  function th$lambda(closure$scope, closure$classes) {
    return function (it) {
      return new TH_init(attributesMapOf_0(['scope', closure$scope != null ? enumEncode(closure$scope) : null, 'class', closure$classes]), it);
    };
  }
  function td$lambda(closure$classes) {
    return function (it) {
      return new TD_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function tr$lambda(closure$classes) {
    return function (it) {
      return new TR_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function h3$lambda_2(closure$classes) {
    return function (it) {
      return new H3_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function styledTable$lambda(it) {
    return new TABLE_init(html.emptyMap, it);
  }
  function div$lambda_3(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function fcWorkPlanList$lambda$lambda$lambda$lambda($receiver) {
    set_border($receiver, '1px solid black');
    return Unit;
  }
  function fcWorkPlanList$lambda($receiver, props) {
    var borderStyle = 'border: 2px solid #095484;';
    var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(h3$lambda_2(null));
    $receiver_0.unaryPlus_pdl1vz$('Work Plans');
    $receiver.child_30b5ua$($receiver_0.create());
    var $receiver_0_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTable$lambda);
    $receiver_0_0.css.descendants_xqeqkq$(['th', 'td'], fcWorkPlanList$lambda$lambda$lambda$lambda);
    ({collapse: 'collapse', separate: 'separate'}.collapse);
    var $receiver_0_1 = RDOMBuilder.Companion.invoke_f6ihu2$(tr$lambda(null));
    var $receiver_0_2 = RDOMBuilder.Companion.invoke_f6ihu2$(th$lambda(null, null));
    $receiver_0_2.unaryPlus_pdl1vz$('\u2116');
    $receiver_0_1.child_30b5ua$($receiver_0_2.create());
    var $receiver_0_3 = RDOMBuilder.Companion.invoke_f6ihu2$(th$lambda(null, null));
    $receiver_0_3.unaryPlus_pdl1vz$('\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u043F\u043B\u0430\u043D');
    $receiver_0_1.child_30b5ua$($receiver_0_3.create());
    var $receiver_0_4 = RDOMBuilder.Companion.invoke_f6ihu2$(th$lambda(null, null));
    $receiver_0_4.unaryPlus_pdl1vz$('\u0424\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442');
    $receiver_0_1.child_30b5ua$($receiver_0_4.create());
    var $receiver_0_5 = RDOMBuilder.Companion.invoke_f6ihu2$(th$lambda(null, null));
    $receiver_0_5.unaryPlus_pdl1vz$('\u0411\u043B\u043E\u043A');
    $receiver_0_1.child_30b5ua$($receiver_0_5.create());
    var $receiver_0_6 = RDOMBuilder.Companion.invoke_f6ihu2$(th$lambda(null, null));
    $receiver_0_6.unaryPlus_pdl1vz$('\u0414\u0438\u0441\u0446\u0438\u043F\u043B\u0438\u043D\u0430 (\u0432\u0438\u0434 \u0443\u0447\u0435\u0431\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B)');
    $receiver_0_1.child_30b5ua$($receiver_0_6.create());
    var $receiver_0_7 = RDOMBuilder.Companion.invoke_f6ihu2$(th$lambda(null, null));
    $receiver_0_7.unaryPlus_pdl1vz$('\u0421\u0435\u043C\u0435\u0441\u0442\u0440');
    $receiver_0_1.child_30b5ua$($receiver_0_7.create());
    var $receiver_0_8 = RDOMBuilder.Companion.invoke_f6ihu2$(th$lambda(null, null));
    $receiver_0_8.unaryPlus_pdl1vz$('\u041A\u043E\u043B-\u0432\u043E \u043E\u0431\u0443\u0447\u0430\u044E\u0449\u0438\u0445\u0441\u044F');
    $receiver_0_1.child_30b5ua$($receiver_0_8.create());
    var $receiver_0_9 = RDOMBuilder.Companion.invoke_f6ihu2$(th$lambda(null, null));
    $receiver_0_9.unaryPlus_pdl1vz$('\u0412\u0438\u0434 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438');
    $receiver_0_1.child_30b5ua$($receiver_0_9.create());
    var $receiver_0_10 = RDOMBuilder.Companion.invoke_f6ihu2$(th$lambda(null, null));
    $receiver_0_10.unaryPlus_pdl1vz$('\u041D\u0430\u0433\u0440\u0443\u0437\u043A\u0430, \u0447\u0430\u0441\u043E\u0432');
    $receiver_0_1.child_30b5ua$($receiver_0_10.create());
    var $receiver_0_11 = RDOMBuilder.Companion.invoke_f6ihu2$(th$lambda(null, null));
    $receiver_0_11.unaryPlus_pdl1vz$('\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C');
    $receiver_0_1.child_30b5ua$($receiver_0_11.create());
    var $receiver_0_12 = RDOMBuilder.Companion.invoke_f6ihu2$(th$lambda(null, null));
    $receiver_0_12.unaryPlus_pdl1vz$('\u0412\u0438\u0434 \u0437\u0430\u043D\u044F\u0442\u043E\u0441\u0442\u0438, \u0441\u0442\u0430\u0432\u043A\u0430');
    $receiver_0_1.child_30b5ua$($receiver_0_12.create());
    $receiver_0_0.child_30b5ua$($receiver_0_1.create());
    var $receiver_1 = props.workPlans;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = $receiver_1.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_1 = destination.add_11rb$;
      var index_0 = checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
      var $receiver_0_13 = RDOMBuilder.Companion.invoke_f6ihu2$(tr$lambda(null));
      var $receiver_0_14 = RDOMBuilder.Companion.invoke_f6ihu2$(td$lambda(null));
      $receiver_0_14.unaryPlus_pdl1vz$((index_0 + 1 | 0).toString());
      $receiver_0_13.child_30b5ua$($receiver_0_14.create());
      var $receiver_0_15 = RDOMBuilder.Companion.invoke_f6ihu2$(td$lambda(null));
      $receiver_0_15.unaryPlus_pdl1vz$(item.elem.id);
      $receiver_0_13.child_30b5ua$($receiver_0_15.create());
      var $receiver_0_16 = RDOMBuilder.Companion.invoke_f6ihu2$(td$lambda(null));
      $receiver_0_16.unaryPlus_pdl1vz$(item.elem.faculty);
      $receiver_0_13.child_30b5ua$($receiver_0_16.create());
      var $receiver_0_17 = RDOMBuilder.Companion.invoke_f6ihu2$(td$lambda(null));
      $receiver_0_17.unaryPlus_pdl1vz$(item.elem.block);
      $receiver_0_13.child_30b5ua$($receiver_0_17.create());
      var $receiver_0_18 = RDOMBuilder.Companion.invoke_f6ihu2$(td$lambda(null));
      $receiver_0_18.unaryPlus_pdl1vz$(item.elem.subject);
      $receiver_0_13.child_30b5ua$($receiver_0_18.create());
      var $receiver_0_19 = RDOMBuilder.Companion.invoke_f6ihu2$(td$lambda(null));
      $receiver_0_19.unaryPlus_pdl1vz$(item.elem.semester.toString());
      $receiver_0_13.child_30b5ua$($receiver_0_19.create());
      var $receiver_0_20 = RDOMBuilder.Companion.invoke_f6ihu2$(td$lambda(null));
      $receiver_0_20.unaryPlus_pdl1vz$(item.elem.numberOfStudents.toString());
      $receiver_0_13.child_30b5ua$($receiver_0_20.create());
      var $receiver_0_21 = RDOMBuilder.Companion.invoke_f6ihu2$(td$lambda(null));
      $receiver_0_21.unaryPlus_pdl1vz$(item.elem.typeOfLoad);
      $receiver_0_13.child_30b5ua$($receiver_0_21.create());
      var $receiver_0_22 = RDOMBuilder.Companion.invoke_f6ihu2$(td$lambda(null));
      $receiver_0_22.unaryPlus_pdl1vz$(item.elem.hours.toString());
      $receiver_0_13.child_30b5ua$($receiver_0_22.create());
      var $receiver_0_23 = RDOMBuilder.Companion.invoke_f6ihu2$(td$lambda(null));
      $receiver_0_23.unaryPlus_pdl1vz$(item.elem.teacher.firstName + ' ' + item.elem.teacher.lastName + ' ' + item.elem.teacher.patronymic);
      $receiver_0_13.child_30b5ua$($receiver_0_23.create());
      var $receiver_0_24 = RDOMBuilder.Companion.invoke_f6ihu2$(td$lambda(null));
      $receiver_0_24.unaryPlus_pdl1vz$(item.elem.typeOfEmployment);
      $receiver_0_13.child_30b5ua$($receiver_0_24.create());
      $receiver_0_0.child_30b5ua$($receiver_0_13.create());
      tmp$_1.call(destination, Unit);
    }
    $receiver.child_30b5ua$($receiver_0_0.create());
    return Unit;
  }
  function fcWorkPlanList() {
    return fc('WorkPlanList', fcWorkPlanList$lambda);
  }
  function fcContainerWorkPlanList$lambda$lambda(closure$lastPathComponent) {
    return function (it) {
      var $receiver = {};
      var closure$lastPathComponent_0 = closure$lastPathComponent;
      $receiver.url = Config.Companion.workPlansBaseURL + closure$lastPathComponent_0;
      return $module$axios($receiver);
    };
  }
  function fcContainerWorkPlanList$lambda$lambda_0(closure$items) {
    return function ($receiver) {
      $receiver.attrs.workPlans = closure$items;
      return Unit;
    };
  }
  function fcContainerWorkPlanList$lambda(closure$lastPathComponent) {
    return function ($receiver, f) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      var workPlanParams = useParams();
      var id = (tmp$ = workPlanParams['id']) != null ? tmp$ : 'Route param error';
      var query = useQuery(id, fcContainerWorkPlanList$lambda$lambda(closure$lastPathComponent));
      if (query.isLoading) {
        var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(div$lambda_3(null));
        $receiver_0.unaryPlus_pdl1vz$('Loading ..');
        $receiver.child_30b5ua$($receiver_0.create());
      } else if (query.isError) {
        var $receiver_0_0 = RDOMBuilder.Companion.invoke_f6ihu2$(div$lambda_3(null));
        $receiver_0_0.unaryPlus_pdl1vz$('Error!');
        $receiver.child_30b5ua$($receiver_0_0.create());
      } else {
        var items = (tmp$_2 = (tmp$_1 = (tmp$_0 = query.data) != null ? tmp$_0.data : null) != null ? toList(tmp$_1) : null) != null ? tmp$_2 : emptyList();
        $receiver.child_1mw94g$(fcWorkPlanList(), void 0, fcContainerWorkPlanList$lambda$lambda_0(items));
      }
      return Unit;
    };
  }
  function fcContainerWorkPlanList(lastPathComponent) {
    return fc('QueryWorkPlanList', fcContainerWorkPlanList$lambda(lastPathComponent));
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
  $$importsForInline$$['kotlin-react-dom-legacy'] = $module$kotlin_react_dom_legacy;
  _.main = main;
  var package$component = _.component || (_.component = {});
  package$component.fcGroupList = fcGroupList;
  $$importsForInline$$['kotlin-extensions'] = $module$kotlin_extensions;
  package$component.fcContainerGroupList = fcContainerGroupList;
  package$component.fcSubjectList = fcSubjectList;
  package$component.fcContainerSubjectList = fcContainerSubjectList;
  package$component.fcTeacherList = fcTeacherList;
  package$component.fcContainerTeacherList = fcContainerTeacherList;
  $$importsForInline$$['kotlin-styled-next'] = $module$kotlin_styled_next;
  package$component.fcWorkPlanList = fcWorkPlanList;
  package$component.fcContainerWorkPlanList_61zpoe$ = fcContainerWorkPlanList;
  var package$wrappers = _.wrappers || (_.wrappers = {});
  package$wrappers.ReactQueryDevToolsOption = ReactQueryDevToolsOption;
  package$wrappers.cReactQueryDevtools_aoqtym$ = cReactQueryDevtools;
  queryClient = new QueryClient();
  reactQueryDevtools = $module$react_query_devtools.ReactQueryDevtools;
  main();
  return _;
}));

//# sourceMappingURL=client.js.map
