import { _ as _call_super } from "@swc/helpers/_/_call_super";
import { _ as _class_call_check } from "@swc/helpers/_/_class_call_check";
import { _ as _inherits } from "@swc/helpers/_/_inherits";
var MyClass = function MyClass() {
    "use strict";
    _class_call_check(this, MyClass);
};
export var fn = function() {
    return /*#__PURE__*/ function(MyClass) {
        "use strict";
        _inherits(_class, MyClass);
        function _class() {
            _class_call_check(this, _class);
            return _call_super(this, _class, arguments);
        }
        return _class;
    }(MyClass);
};
