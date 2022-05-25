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
  var UnknownFieldException = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.UnknownFieldException;
  var internal = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal;
  var GeneratedSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal.GeneratedSerializer;
  var MissingFieldException_init = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.MissingFieldException_init_61zpoe$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var ArrayListSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal.ArrayListSerializer;
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
    this.workPlansPath = 'api1/work_plans/';
    this.workPlansURL = 'http://localhost:8080/api1/work_plans/';
  }
  Config$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Config$Companion_instance = null;
  function Config$Companion_getInstance() {
    if (Config$Companion_instance === null) {
      new Config$Companion();
    }return Config$Companion_instance;
  }
  Config.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Config',
    interfaces: []
  };
  function Group(name, code, formOfEducation) {
    Group$Companion_getInstance();
    this.name = name;
    this.code = code;
    this.formOfEducation = formOfEducation;
  }
  Group.prototype.toString = function () {
    return this.code + ' ' + this.name + ', ' + this.formOfEducation;
  };
  function Group$Companion() {
    Group$Companion_instance = this;
  }
  Group$Companion.prototype.serializer = function () {
    return Group$$serializer_getInstance();
  };
  Group$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Group$Companion_instance = null;
  function Group$Companion_getInstance() {
    if (Group$Companion_instance === null) {
      new Group$Companion();
    }return Group$Companion_instance;
  }
  function Group$$serializer() {
    this.descriptor_9wvztq$_0 = new PluginGeneratedSerialDescriptor('ru.altmanea.edu.server.model.Group', this, 3);
    this.descriptor.addElement_ivxn3r$('name', false);
    this.descriptor.addElement_ivxn3r$('code', false);
    this.descriptor.addElement_ivxn3r$('formOfEducation', false);
    Group$$serializer_instance = this;
  }
  Object.defineProperty(Group$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_9wvztq$_0;
    }
  });
  Group$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.name);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.code);
    output.encodeStringElement_iij8qq$(this.descriptor, 2, value.formOfEducation);
    output.endStructure_24f42q$(this.descriptor);
  };
  Group$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeStringElement_szpzho$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return Group_init(bitMask0, local0, local1, local2, null);
  };
  Group$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.StringSerializer, internal.StringSerializer];
  };
  Group$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Group$$serializer_instance = null;
  function Group$$serializer_getInstance() {
    if (Group$$serializer_instance === null) {
      new Group$$serializer();
    }return Group$$serializer_instance;
  }
  function Group_init(seen1, name, code, formOfEducation, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Group.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('name');
    else
      $this.name = name;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('code');
    else
      $this.code = code;
    if ((seen1 & 4) === 0)
      throw MissingFieldException_init('formOfEducation');
    else
      $this.formOfEducation = formOfEducation;
    return $this;
  }
  Group.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Group',
    interfaces: []
  };
  function Item() {
  }
  Item.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Item',
    interfaces: []
  };
  function Teacher(firstName, lastName, patronymic) {
    Teacher$Companion_getInstance();
    this.firstName = firstName;
    this.lastName = lastName;
    this.patronymic = patronymic;
  }
  function Teacher$Companion() {
    Teacher$Companion_instance = this;
  }
  Teacher$Companion.prototype.serializer = function () {
    return Teacher$$serializer_getInstance();
  };
  Teacher$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Teacher$Companion_instance = null;
  function Teacher$Companion_getInstance() {
    if (Teacher$Companion_instance === null) {
      new Teacher$Companion();
    }return Teacher$Companion_instance;
  }
  function Teacher$$serializer() {
    this.descriptor_zaedhh$_0 = new PluginGeneratedSerialDescriptor('ru.altmanea.edu.server.model.Teacher', this, 3);
    this.descriptor.addElement_ivxn3r$('firstName', false);
    this.descriptor.addElement_ivxn3r$('lastName', false);
    this.descriptor.addElement_ivxn3r$('patronymic', false);
    Teacher$$serializer_instance = this;
  }
  Object.defineProperty(Teacher$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_zaedhh$_0;
    }
  });
  Teacher$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.firstName);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.lastName);
    output.encodeStringElement_iij8qq$(this.descriptor, 2, value.patronymic);
    output.endStructure_24f42q$(this.descriptor);
  };
  Teacher$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeStringElement_szpzho$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return Teacher_init(bitMask0, local0, local1, local2, null);
  };
  Teacher$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.StringSerializer, internal.StringSerializer];
  };
  Teacher$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Teacher$$serializer_instance = null;
  function Teacher$$serializer_getInstance() {
    if (Teacher$$serializer_instance === null) {
      new Teacher$$serializer();
    }return Teacher$$serializer_instance;
  }
  function Teacher_init(seen1, firstName, lastName, patronymic, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Teacher.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('firstName');
    else
      $this.firstName = firstName;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('lastName');
    else
      $this.lastName = lastName;
    if ((seen1 & 4) === 0)
      throw MissingFieldException_init('patronymic');
    else
      $this.patronymic = patronymic;
    return $this;
  }
  Teacher.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Teacher',
    interfaces: []
  };
  function WorkPlan(id, faculty, block, subject, semester, teacher, groups, numberOfStudents, typeOfLoad, hours, typeOfEmployment) {
    WorkPlan$Companion_getInstance();
    this.id = id;
    this.faculty = faculty;
    this.block = block;
    this.subject = subject;
    this.semester = semester;
    this.teacher = teacher;
    this.groups = groups;
    this.numberOfStudents = numberOfStudents;
    this.typeOfLoad = typeOfLoad;
    this.hours = hours;
    this.typeOfEmployment = typeOfEmployment;
  }
  function WorkPlan$Companion() {
    WorkPlan$Companion_instance = this;
  }
  WorkPlan$Companion.prototype.serializer = function () {
    return WorkPlan$$serializer_getInstance();
  };
  WorkPlan$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var WorkPlan$Companion_instance = null;
  function WorkPlan$Companion_getInstance() {
    if (WorkPlan$Companion_instance === null) {
      new WorkPlan$Companion();
    }return WorkPlan$Companion_instance;
  }
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
  Object.defineProperty(WorkPlan$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_z7koqn$_0;
    }
  });
  WorkPlan$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.id);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.faculty);
    output.encodeStringElement_iij8qq$(this.descriptor, 2, value.block);
    output.encodeStringElement_iij8qq$(this.descriptor, 3, value.subject);
    output.encodeIntElement_ptg7oe$(this.descriptor, 4, value.semester);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 5, Teacher$$serializer_getInstance(), value.teacher);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 6, new ArrayListSerializer(Group$$serializer_getInstance()), value.groups);
    output.encodeIntElement_ptg7oe$(this.descriptor, 7, value.numberOfStudents);
    output.encodeStringElement_iij8qq$(this.descriptor, 8, value.typeOfLoad);
    output.encodeFloatElement_lf6hpt$(this.descriptor, 9, value.hours);
    output.encodeStringElement_iij8qq$(this.descriptor, 10, value.typeOfEmployment);
    output.endStructure_24f42q$(this.descriptor);
  };
  WorkPlan$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4
    , local5
    , local6
    , local7
    , local8
    , local9
    , local10;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeStringElement_szpzho$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = input.decodeStringElement_szpzho$(this.descriptor, 3);
          bitMask0 |= 8;
          break;
        case 4:
          local4 = input.decodeIntElement_szpzho$(this.descriptor, 4);
          bitMask0 |= 16;
          break;
        case 5:
          local5 = input.decodeSerializableElement_12e8id$(this.descriptor, 5, Teacher$$serializer_getInstance(), local5);
          bitMask0 |= 32;
          break;
        case 6:
          local6 = input.decodeSerializableElement_12e8id$(this.descriptor, 6, new ArrayListSerializer(Group$$serializer_getInstance()), local6);
          bitMask0 |= 64;
          break;
        case 7:
          local7 = input.decodeIntElement_szpzho$(this.descriptor, 7);
          bitMask0 |= 128;
          break;
        case 8:
          local8 = input.decodeStringElement_szpzho$(this.descriptor, 8);
          bitMask0 |= 256;
          break;
        case 9:
          local9 = input.decodeFloatElement_szpzho$(this.descriptor, 9);
          bitMask0 |= 512;
          break;
        case 10:
          local10 = input.decodeStringElement_szpzho$(this.descriptor, 10);
          bitMask0 |= 1024;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return WorkPlan_init(bitMask0, local0, local1, local2, local3, local4, local5, local6, local7, local8, local9, local10, null);
  };
  WorkPlan$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.IntSerializer, Teacher$$serializer_getInstance(), new ArrayListSerializer(Group$$serializer_getInstance()), internal.IntSerializer, internal.StringSerializer, internal.FloatSerializer, internal.StringSerializer];
  };
  WorkPlan$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var WorkPlan$$serializer_instance = null;
  function WorkPlan$$serializer_getInstance() {
    if (WorkPlan$$serializer_instance === null) {
      new WorkPlan$$serializer();
    }return WorkPlan$$serializer_instance;
  }
  function WorkPlan_init(seen1, id, faculty, block, subject, semester, teacher, groups, numberOfStudents, typeOfLoad, hours, typeOfEmployment, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(WorkPlan.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('id');
    else
      $this.id = id;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('faculty');
    else
      $this.faculty = faculty;
    if ((seen1 & 4) === 0)
      throw MissingFieldException_init('block');
    else
      $this.block = block;
    if ((seen1 & 8) === 0)
      throw MissingFieldException_init('subject');
    else
      $this.subject = subject;
    if ((seen1 & 16) === 0)
      throw MissingFieldException_init('semester');
    else
      $this.semester = semester;
    if ((seen1 & 32) === 0)
      throw MissingFieldException_init('teacher');
    else
      $this.teacher = teacher;
    if ((seen1 & 64) === 0)
      throw MissingFieldException_init('groups');
    else
      $this.groups = groups;
    if ((seen1 & 128) === 0)
      throw MissingFieldException_init('numberOfStudents');
    else
      $this.numberOfStudents = numberOfStudents;
    if ((seen1 & 256) === 0)
      throw MissingFieldException_init('typeOfLoad');
    else
      $this.typeOfLoad = typeOfLoad;
    if ((seen1 & 512) === 0)
      throw MissingFieldException_init('hours');
    else
      $this.hours = hours;
    if ((seen1 & 1024) === 0)
      throw MissingFieldException_init('typeOfEmployment');
    else
      $this.typeOfEmployment = typeOfEmployment;
    return $this;
  }
  WorkPlan.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WorkPlan',
    interfaces: []
  };
  Object.defineProperty(Config, 'Companion', {
    get: Config$Companion_getInstance
  });
  var package$ru = _.ru || (_.ru = {});
  var package$altmanea = package$ru.altmanea || (package$ru.altmanea = {});
  var package$edu = package$altmanea.edu || (package$altmanea.edu = {});
  var package$server = package$edu.server || (package$edu.server = {});
  var package$model = package$server.model || (package$server.model = {});
  package$model.Config = Config;
  Object.defineProperty(Group, 'Companion', {
    get: Group$Companion_getInstance
  });
  Object.defineProperty(Group, '$serializer', {
    get: Group$$serializer_getInstance
  });
  package$model.Group_init_9zxaf4$ = Group_init;
  package$model.Group = Group;
  package$model.Item = Item;
  Object.defineProperty(Teacher, 'Companion', {
    get: Teacher$Companion_getInstance
  });
  Object.defineProperty(Teacher, '$serializer', {
    get: Teacher$$serializer_getInstance
  });
  package$model.Teacher_init_9zxaf4$ = Teacher_init;
  package$model.Teacher = Teacher;
  Object.defineProperty(WorkPlan, 'Companion', {
    get: WorkPlan$Companion_getInstance
  });
  Object.defineProperty(WorkPlan, '$serializer', {
    get: WorkPlan$$serializer_getInstance
  });
  package$model.WorkPlan_init_2j7o5y$ = WorkPlan_init;
  package$model.WorkPlan = WorkPlan;
  Group$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  Teacher$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  WorkPlan$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  Kotlin.defineModule('model', _);
  return _;
}));

//# sourceMappingURL=model.js.map
