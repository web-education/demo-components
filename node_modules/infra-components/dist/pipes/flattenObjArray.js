import { Pipe } from '@angular/core';
var FlattenObjectArrayPipe = (function () {
    function FlattenObjectArrayPipe() {
    }
    FlattenObjectArrayPipe.prototype.transform = function (array, onlyProps) {
        if (!array) {
            return [];
        }
        if (onlyProps.length < 1) {
            return array;
        }
        var flattenedArray = Array.from(array);
        var flatten = function (array) {
            array.forEach(function (item) {
                for (var prop in item) {
                    var val = item[prop];
                    if (val instanceof Array &&
                        !onlyProps ||
                        onlyProps.indexOf(prop) > -1) {
                        flattenedArray = flattenedArray.concat(val);
                        flatten(val);
                    }
                }
            });
        };
        flatten(array);
        return Array.from(new Set(flattenedArray));
    };
    return FlattenObjectArrayPipe;
}());
export { FlattenObjectArrayPipe };
FlattenObjectArrayPipe.decorators = [
    { type: Pipe, args: [{ name: "flattenObjArray" },] },
];
FlattenObjectArrayPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=flattenObjArray.js.map