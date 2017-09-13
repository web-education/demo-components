import { Pipe } from '@angular/core';
var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.stringFullCompare = function (str1, str2) {
        return str1.match(new RegExp(str2, 'i')) !== null;
    };
    FilterPipe.prototype._filterString = function (value, filter, arrayRef) {
        if (typeof value === "string" &&
            typeof filter === "string" &&
            filter.trim() &&
            this.stringFullCompare(value, filter)) {
            arrayRef.push(value);
            return true;
        }
        return false;
    };
    FilterPipe.prototype._filterObject = function (value, filter, objectRef, arrayRef) {
        if (typeof value == "object" && typeof filter === "object") {
            var check = true;
            for (var property in filter) {
                if (!check)
                    break;
                var filterValue = filter[property];
                var checkedValue = value[property];
                if (typeof filterValue === "string" && typeof checkedValue === "string") {
                    check = this.stringFullCompare(checkedValue, filterValue);
                }
                else if (filterValue instanceof Array && typeof checkedValue === "string") {
                    for (var i = 0; i < filterValue.length; i++) {
                        check = this.stringFullCompare(checkedValue, filterValue[i]);
                        if (check)
                            break;
                    }
                }
                else if (filterValue instanceof Function) {
                    check = filterValue(checkedValue);
                }
                else if (filterValue instanceof Object) {
                    return this._filterObject(checkedValue, filterValue, objectRef, arrayRef);
                }
            }
            if (check) {
                arrayRef.push(objectRef);
            }
            return true;
        }
        return false;
    };
    FilterPipe.prototype._filterFunction = function (value, filter, arrayRef) {
        if (typeof filter === "function") {
            if (filter(value)) {
                arrayRef.push(value);
            }
            return true;
        }
        return false;
    };
    FilterPipe.prototype.transform = function (array, by) {
        var _this = this;
        if (!array || !by) {
            return array;
        }
        var filteredArray = [];
        array.forEach(function (item) {
            _this._filterString(item, by, filteredArray) ||
                _this._filterObject(item, by, item, filteredArray) ||
                _this._filterFunction(item, by, filteredArray);
        });
        return filteredArray;
    };
    return FilterPipe;
}());
export { FilterPipe };
FilterPipe.decorators = [
    { type: Pipe, args: [{ name: 'filter', pure: false },] },
];
FilterPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=filter.js.map