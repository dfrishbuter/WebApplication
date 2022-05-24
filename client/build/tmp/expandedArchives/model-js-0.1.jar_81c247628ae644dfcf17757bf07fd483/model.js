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
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var toString = Kotlin.toString;
  var NullableSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal.NullableSerializer;
  var PluginGeneratedSerialDescriptor = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal.PluginGeneratedSerialDescriptor;
  var internal = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal;
  var UnknownFieldException = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.UnknownFieldException;
  var GeneratedSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal.GeneratedSerializer;
  var MissingFieldException_init = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.MissingFieldException_init_61zpoe$;
  function Config() {
    Config$Companion_getInstance();
  }
  function Config$Companion() {
    Config$Companion_instance = this;
    this.serverDomain = 'localhost';
    this.serverPort = 8000;
    this.serverApi = '1';
    this.serverUrl = 'http://localhost:8000/';
    this.pathPrefix = 'api1/';
    this.studentsPath = 'api1/students/';
    this.studentsURL = 'http://localhost:8000/api1/students/';
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
  function Item() {
  }
  Item.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Item',
    interfaces: []
  };
  function Student(firstname, surname, group) {
    Student$Companion_getInstance();
    this.firstname = firstname;
    this.surname = surname;
    this.group = group;
  }
  Object.defineProperty(Student.prototype, 'fullname', {
    configurable: true,
    get: function () {
      return this.firstname + ' ' + toString(this.surname);
    }
  });
  Object.defineProperty(Student.prototype, 'nameplusgroup', {
    configurable: true,
    get: function () {
      return this.firstname + ' ' + toString(this.surname) + ', ' + toString(this.group);
    }
  });
  function Student$Companion() {
    Student$Companion_instance = this;
  }
  Student$Companion.prototype.serializer = function () {
    return Student$$serializer_getInstance();
  };
  Student$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Student$Companion_instance = null;
  function Student$Companion_getInstance() {
    if (Student$Companion_instance === null) {
      new Student$Companion();
    }return Student$Companion_instance;
  }
  function Student$$serializer() {
    this.descriptor_3h153y$_0 = new PluginGeneratedSerialDescriptor('ru.altmanea.edu.server.model.Student', this, 3);
    this.descriptor.addElement_ivxn3r$('firstname', false);
    this.descriptor.addElement_ivxn3r$('surname', false);
    this.descriptor.addElement_ivxn3r$('group', false);
    Student$$serializer_instance = this;
  }
  Object.defineProperty(Student$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_3h153y$_0;
    }
  });
  Student$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.firstname);
    output.encodeNullableSerializableElement_qw92s8$(this.descriptor, 1, internal.StringSerializer, value.surname);
    output.encodeNullableSerializableElement_qw92s8$(this.descriptor, 2, internal.StringSerializer, value.group);
    output.endStructure_24f42q$(this.descriptor);
  };
  Student$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
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
          local1 = input.decodeNullableSerializableElement_8viuyw$(this.descriptor, 1, internal.StringSerializer, local1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeNullableSerializableElement_8viuyw$(this.descriptor, 2, internal.StringSerializer, local2);
          bitMask0 |= 4;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return Student_init(bitMask0, local0, local1, local2, null);
  };
  Student$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, new NullableSerializer(internal.StringSerializer), new NullableSerializer(internal.StringSerializer)];
  };
  Student$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Student$$serializer_instance = null;
  function Student$$serializer_getInstance() {
    if (Student$$serializer_instance === null) {
      new Student$$serializer();
    }return Student$$serializer_instance;
  }
  function Student_init(seen1, firstname, surname, group, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Student.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('firstname');
    else
      $this.firstname = firstname;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('surname');
    else
      $this.surname = surname;
    if ((seen1 & 4) === 0)
      throw MissingFieldException_init('group');
    else
      $this.group = group;
    return $this;
  }
  Student.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Student',
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
  package$model.Item = Item;
  Object.defineProperty(Student, 'Companion', {
    get: Student$Companion_getInstance
  });
  Object.defineProperty(Student, '$serializer', {
    get: Student$$serializer_getInstance
  });
  package$model.Student_init_9zxaf4$ = Student_init;
  package$model.Student = Student;
  Student$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  Kotlin.defineModule('model', _);
  return _;
}));

//# sourceMappingURL=model.js.map
