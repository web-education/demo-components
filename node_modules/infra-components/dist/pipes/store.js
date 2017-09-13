import { Pipe } from '@angular/core';
var StorePipe = (function () {
    function StorePipe() {
    }
    StorePipe.prototype.transform = function (value, context, prop) {
        if (prop === void 0) { prop = "_storedRef"; }
        context[prop] = value;
        return value;
    };
    return StorePipe;
}());
export { StorePipe };
StorePipe.decorators = [
    { type: Pipe, args: [{
                name: "store"
            },] },
];
StorePipe.ctorParameters = function () { return []; };
//# sourceMappingURL=store.js.map