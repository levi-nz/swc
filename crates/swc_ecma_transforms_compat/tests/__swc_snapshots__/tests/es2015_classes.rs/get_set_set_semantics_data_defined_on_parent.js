let Base = function Base() {
    "use strict";
    _class_call_check(this, Base);
};
Object.defineProperty(Base.prototype, 'test', {
    value: 1,
    writable: true,
    configurable: true
});
let Obj = /*#__PURE__*/ function(Base) {
    "use strict";
    _inherits(Obj, Base);
    function Obj() {
        _class_call_check(this, Obj);
        return _call_super(this, Obj, arguments);
    }
    _create_class(Obj, [
        {
            key: "set",
            value: function set() {
                return _set(_get_prototype_of(Obj.prototype), "test", 3, this, true);
            }
        }
    ]);
    return Obj;
}(Base);
Object.defineProperty(Obj.prototype, 'test', {
    value: 2,
    writable: true,
    configurable: true
});
const obj = new Obj();
expect(obj.set()).toBe(3);
expect(Base.prototype.test).toBe(1);
expect(Obj.prototype.test).toBe(2);
expect(obj.test).toBe(3);
