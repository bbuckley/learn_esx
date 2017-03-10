'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
  function Person(dob, doe) {
    _classCallCheck(this, Person);

    this._dob = new Date(dob);
    this._doe = new Date(doe);
  }

  _createClass(Person, [{
    key: 'dob',
    value: function dob() {
      return this._dob;
    }
  }, {
    key: 'doe',
    value: function doe() {
      return new Date(this._doe);
    }
  }, {
    key: 'crd',
    value: function crd() {
      return this.c;
    }
  }, {
    key: 'age_hire',
    value: function age_hire() {
      var d1 = this.dob().getFullYear();
      var d2 = this.doe().getFullYear();
      return d2 - d1;
    }
  }]);

  return Person;
}();

var p = new Person('12/1/1958', '6/30/1992');
console.log(p, p.age_hire());