var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 实现多重继承
export var aggregation = function (base) {
    var mixins = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        mixins[_i - 1] = arguments[_i];
    }
    /*  create aggregation class  */
    var aggregate = /** @class */ (function (_super) {
        __extends(__Aggregate, _super);
        function __Aggregate() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            /*  call mixin's initializer  */
            mixins.forEach(function (mixin) {
                if (typeof mixin.prototype.initializer === "function")
                    mixin.prototype.initializer.apply(_this, args);
            });
            return _this;
        }
        return __Aggregate;
    }(base));
    /*  copy properties  */
    var copyProps = function (target, source) {
        Object.getOwnPropertyNames(source)
            .concat(Object.getOwnPropertySymbols(source).map(function (i) { return String(i); }))
            .forEach(function (prop) {
            if (prop.match(/^(?:initializer|constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/))
                return;
            Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop));
        });
    };
    /*  copy all properties of all mixins into aggregation class  */
    mixins.forEach(function (mixin) {
        copyProps(aggregate.prototype, mixin.prototype);
        copyProps(aggregate, mixin);
    });
    return aggregate;
};
//# sourceMappingURL=aggregation.js.map