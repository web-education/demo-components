import { Pipe } from '@angular/core';
var OrderPipe = (function () {
    function OrderPipe() {
    }
    OrderPipe.prototype.transform = function (array, sortPredicate, reverseOrder, compareFn) {
        if (array == null || !sortPredicate)
            return array;
        var isString = function (value) {
            return typeof value === "string";
        };
        var isFunction = function (value) {
            return typeof value === "function";
        };
        var isArray = function (value) {
            return value && value instanceof Array;
        };
        var isObject = function (value) {
            return typeof value === "object";
        };
        var isPrimitive = function (value) {
            switch (typeof value) {
                case 'number':
                case 'boolean':
                case 'string':
                    return true;
                default:
                    return false;
            }
        };
        var hasCustomToString = function (value) {
            return value &&
                typeof value.toString === "function" &&
                value.toString !== Object.prototype.toString;
        };
        var getComparisonObject = function (value, index) {
            return {
                value: value,
                tieBreaker: { value: index, type: 'number', index: index },
                predicateValues: predicates.map(function (predicate) {
                    return getPredicateValue(predicate.get(value), index);
                })
            };
        };
        var doComparison = function (v1, v2) {
            for (var i = 0, ii = predicates.length; i < ii; i++) {
                var result = compare(v1.predicateValues[i], v2.predicateValues[i]);
                if (result) {
                    return result * predicates[i].descending * descending;
                }
            }
            return compare(v1.tieBreaker, v2.tieBreaker) * descending;
        };
        var processPredicates = function (sortPredicates) {
            return sortPredicates.map(function (predicate) {
                var descending = 1, get = function (value) { return value; };
                if (isFunction(predicate)) {
                    get = predicate;
                }
                else if (isString(predicate)) {
                    if ((predicate.charAt(0) === '+' || predicate.charAt(0) === '-')) {
                        descending = predicate.charAt(0) === '-' ? -1 : 1;
                        predicate = predicate.substring(1);
                    }
                    if (predicate !== '') {
                        get = function (value) { return value[predicate]; };
                    }
                }
                return { get: get, descending: descending };
            });
        };
        var objectValue = function (value) {
            if (isFunction(value.valueOf)) {
                value = value.valueOf();
                if (isPrimitive(value))
                    return value;
            }
            if (hasCustomToString(value)) {
                value = value.toString();
                if (isPrimitive(value))
                    return value;
            }
            return value;
        };
        var getPredicateValue = function (value, index) {
            var type = typeof value;
            if (value === null) {
                type = 'string';
                value = 'null';
            }
            else if (type === 'object') {
                value = objectValue(value);
            }
            return { value: value, type: type, index: index };
        };
        var defaultCompare = function (v1, v2) {
            var result = 0;
            var type1 = v1.type;
            var type2 = v2.type;
            if (type1 === type2) {
                var value1 = v1.value;
                var value2 = v2.value;
                if (type1 === 'string') {
                    value1 = value1.toLowerCase();
                    value2 = value2.toLowerCase();
                }
                else if (type1 === 'object') {
                    if (isObject(value1))
                        value1 = v1.index;
                    if (isObject(value2))
                        value2 = v2.index;
                }
                if (value1 !== value2) {
                    result = value1 < value2 ? -1 : 1;
                }
            }
            else {
                result = type1 < type2 ? -1 : 1;
            }
            return result;
        };
        if (!isArray(sortPredicate)) {
            sortPredicate = [sortPredicate];
        }
        if (sortPredicate.length === 0) {
            sortPredicate = ['+'];
        }
        var predicates = processPredicates(sortPredicate);
        var descending = reverseOrder ? -1 : 1;
        var compare = isFunction(compareFn) ? compareFn : defaultCompare;
        var compareValues = Array.prototype.map.call(array, getComparisonObject);
        compareValues.sort(doComparison);
        array = compareValues.map(function (item) { return item.value; });
        return array;
    };
    return OrderPipe;
}());
export { OrderPipe };
OrderPipe.decorators = [
    { type: Pipe, args: [{ name: 'orderBy' },] },
];
OrderPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=orderBy.js.map