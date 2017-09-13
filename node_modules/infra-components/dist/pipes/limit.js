import { Pipe } from '@angular/core';
var LimitPipe = (function () {
    function LimitPipe() {
    }
    LimitPipe.prototype.transform = function (array, limit, offset) {
        if (offset === void 0) { offset = 0; }
        return array.slice(offset, limit);
    };
    return LimitPipe;
}());
export { LimitPipe };
LimitPipe.decorators = [
    { type: Pipe, args: [{
                name: "limit",
                pure: false
            },] },
];
LimitPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=limit.js.map