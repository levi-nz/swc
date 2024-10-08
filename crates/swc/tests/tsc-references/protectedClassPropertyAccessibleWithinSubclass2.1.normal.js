//// [protectedClassPropertyAccessibleWithinSubclass2.ts]
import { _ as _call_super } from "@swc/helpers/_/_call_super";
import { _ as _class_call_check } from "@swc/helpers/_/_class_call_check";
import { _ as _inherits } from "@swc/helpers/_/_inherits";
var Base = /*#__PURE__*/ function() {
    "use strict";
    function Base() {
        _class_call_check(this, Base);
    }
    var _proto = Base.prototype;
    _proto.method = function method() {
        var b;
        var d1;
        var d2;
        var d3;
        var d4;
        b.x; // OK, accessed within their declaring class
        d1.x; // OK, accessed within their declaring class
        d2.x; // OK, accessed within their declaring class
        d3.x; // Error, redefined in a subclass, can only be accessed in the declaring class or one of its subclasses
        d4.x; // OK, accessed within their declaring class
    };
    return Base;
}();
var Derived1 = /*#__PURE__*/ function(Base) {
    "use strict";
    _inherits(Derived1, Base);
    function Derived1() {
        _class_call_check(this, Derived1);
        return _call_super(this, Derived1, arguments);
    }
    var _proto = Derived1.prototype;
    _proto.method1 = function method1() {
        var b;
        var d1;
        var d2;
        var d3;
        var d4;
        b.x; // Error, isn't accessed through an instance of the enclosing class
        d1.x; // OK, accessed within a class derived from their declaring class, and through an instance of the enclosing class
        d2.x; // Error, isn't accessed through an instance of the enclosing class
        d3.x; // Error, redefined in a subclass, can only be accessed in the declaring class or one of its subclasses
        d4.x; // Error, isn't accessed through an instance of the enclosing class
    };
    return Derived1;
}(Base);
var Derived2 = /*#__PURE__*/ function(Base) {
    "use strict";
    _inherits(Derived2, Base);
    function Derived2() {
        _class_call_check(this, Derived2);
        return _call_super(this, Derived2, arguments);
    }
    var _proto = Derived2.prototype;
    _proto.method2 = function method2() {
        var b;
        var d1;
        var d2;
        var d3;
        var d4;
        b.x; // Error, isn't accessed through an instance of the enclosing class
        d1.x; // Error, isn't accessed through an instance of the enclosing class
        d2.x; // OK, accessed within a class derived from their declaring class, and through an instance of the enclosing class
        d3.x; // Error, redefined in a subclass, can only be accessed in the declaring class or one of its subclasses
        d4.x; // OK, accessed within a class derived from their declaring class, and through an instance of the enclosing class or one of its subclasses
    };
    return Derived2;
}(Base);
var Derived3 = /*#__PURE__*/ function(Derived1) {
    "use strict";
    _inherits(Derived3, Derived1);
    function Derived3() {
        _class_call_check(this, Derived3);
        return _call_super(this, Derived3, arguments);
    }
    var _proto = Derived3.prototype;
    _proto.method3 = function method3() {
        var b;
        var d1;
        var d2;
        var d3;
        var d4;
        b.x; // Error, isn't accessed through an instance of the enclosing class
        d1.x; // Error, isn't accessed through an instance of the enclosing class
        d2.x; // Error, isn't accessed through an instance of the enclosing class
        d3.x; // OK, accessed within their declaring class
        d4.x; // Error, isn't accessed through an instance of the enclosing class
    };
    return Derived3;
}(Derived1);
var Derived4 = /*#__PURE__*/ function(Derived2) {
    "use strict";
    _inherits(Derived4, Derived2);
    function Derived4() {
        _class_call_check(this, Derived4);
        return _call_super(this, Derived4, arguments);
    }
    var _proto = Derived4.prototype;
    _proto.method4 = function method4() {
        var b;
        var d1;
        var d2;
        var d3;
        var d4;
        b.x; // Error, isn't accessed through an instance of the enclosing class
        d1.x; // Error, isn't accessed through an instance of the enclosing class
        d2.x; // Error, isn't accessed through an instance of the enclosing class
        d3.x; // Error, redefined in a subclass, can only be accessed in the declaring class or one of its subclasses
        d4.x; // OK, accessed within a class derived from their declaring class, and through an instance of the enclosing class
    };
    return Derived4;
}(Derived2);
var b;
var d1;
var d2;
var d3;
var d4;
b.x; // Error, neither within their declaring class nor classes derived from their declaring class
d1.x; // Error, neither within their declaring class nor classes derived from their declaring class
d2.x; // Error, neither within their declaring class nor classes derived from their declaring class
d3.x; // Error, neither within their declaring class nor classes derived from their declaring class
d4.x; // Error, neither within their declaring class nor classes derived from their declaring class
