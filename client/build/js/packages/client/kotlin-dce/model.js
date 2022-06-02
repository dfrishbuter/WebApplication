(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-serialization-kotlinx-serialization-core-js-legacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-serialization-kotlinx-serialization-core-js-legacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'model'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'model'.");
    }if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'model'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-legacy' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-legacy' is loaded prior to 'model'.");
    }root.model = factory(typeof model === 'undefined' ? {} : model, kotlin, this['kotlinx-serialization-kotlinx-serialization-core-js-legacy']);
  }
}(this, function (_, Kotlin, $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy) {
  'use strict';
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var PluginGeneratedSerialDescriptor = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal.PluginGeneratedSerialDescriptor;
  var internal = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal;
  var GeneratedSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal.GeneratedSerializer;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var getKClass = Kotlin.getKClass;
  var ReferenceArraySerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal.ReferenceArraySerializer;
  function Config() {
    Config$Companion_getInstance();
  }
  function Config$Companion() {
    Config$Companion_instance = this;
    this.serverDomain = 'localhost';
    this.serverPort = 8080;
    this.serverApi = '1';
    this.serverUrl = 'http://localhost:8080/';
    this.pathPrefix = 'api1/';
    this.teachersPath = 'api1/teachers/';
    this.teachersURL = 'http://localhost:8080/api1/teachers/';
    this.groupsPath = 'api1/groups/';
    this.groupsURL = 'http://localhost:8080/api1/groups/';
    this.subjectsPath = 'api1/subjects/';
    this.subjectsURL = 'http://localhost:8080/api1/subjects/';
    this.workPlansByTeacherCommonPath = 'work_plans/by_teacher';
    this.workPlansByTeacherPath = 'api1/work_plans/by_teacher';
    this.workPlansByTeacherURL = 'http://localhost:8080/api1/work_plans/by_teacher';
    this.workPlansByGroupCommonPath = 'work_plans/by_group';
    this.workPlansByGroupPath = 'api1/work_plans/by_group';
    this.workPlansByGroupURL = 'http://localhost:8080/api1/work_plans/by_group';
    this.workPlansBySubjectCommonPath = 'work_plans/by_subject';
    this.workPlansBySubjectPath = 'api1/work_plans/by_subject';
    this.workPlansBySubjectURL = 'http://localhost:8080/api1/work_plans/by_subject';
    this.workPlansBaseURL = 'http://localhost:8080/api1//work_plans';
    this.importPath = '{api1/}source_file';
    this.importURL = 'http://localhost:8080/{api1/}source_file';
  }
  Config$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Config$Companion_instance = null;
  function Config$Companion_getInstance() {
    if (Config$Companion_instance === null) {
      new Config$Companion();
    }return Config$Companion_instance;
  }
  var Group$Companion_instance = null;
  function Group$$serializer() {
    this.descriptor_9wvztq$_0 = new PluginGeneratedSerialDescriptor('ru.altmanea.edu.server.model.Group', this, 3);
    this.descriptor.addElement_ivxn3r$('name', false);
    this.descriptor.addElement_ivxn3r$('code', false);
    this.descriptor.addElement_ivxn3r$('formOfEducation', false);
    Group$$serializer_instance = this;
  }
  var Group$$serializer_instance = null;
  var Teacher$Companion_instance = null;
  function Teacher$$serializer() {
    this.descriptor_zaedhh$_0 = new PluginGeneratedSerialDescriptor('ru.altmanea.edu.server.model.Teacher', this, 3);
    this.descriptor.addElement_ivxn3r$('firstName', false);
    this.descriptor.addElement_ivxn3r$('lastName', false);
    this.descriptor.addElement_ivxn3r$('patronymic', false);
    Teacher$$serializer_instance = this;
  }
  var Teacher$$serializer_instance = null;
  var WorkPlan$Companion_instance = null;
  function WorkPlan$$serializer() {
    this.descriptor_z7koqn$_0 = new PluginGeneratedSerialDescriptor('ru.altmanea.edu.server.model.WorkPlan', this, 11);
    this.descriptor.addElement_ivxn3r$('id', false);
    this.descriptor.addElement_ivxn3r$('faculty', false);
    this.descriptor.addElement_ivxn3r$('block', false);
    this.descriptor.addElement_ivxn3r$('subject', false);
    this.descriptor.addElement_ivxn3r$('semester', false);
    this.descriptor.addElement_ivxn3r$('teacher', false);
    this.descriptor.addElement_ivxn3r$('groups', false);
    this.descriptor.addElement_ivxn3r$('numberOfStudents', false);
    this.descriptor.addElement_ivxn3r$('typeOfLoad', false);
    this.descriptor.addElement_ivxn3r$('hours', false);
    this.descriptor.addElement_ivxn3r$('typeOfEmployment', false);
    WorkPlan$$serializer_instance = this;
  }
  var WorkPlan$$serializer_instance = null;
  Object.defineProperty(Config, 'Companion', {get: Config$Companion_getInstance});
  var package$ru = _.ru || (_.ru = {});
  var package$altmanea = package$ru.altmanea || (package$ru.altmanea = {});
  var package$edu = package$altmanea.edu || (package$altmanea.edu = {});
  var package$server = package$edu.server || (package$edu.server = {});
  var package$model = package$server.model || (package$server.model = {});
  package$model.Config = Config;
  Group$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  Teacher$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  WorkPlan$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  return _;
}));

//# sourceMappingURL=model.js.map
