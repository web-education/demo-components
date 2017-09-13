import { Component, Input, Output, EventEmitter, Renderer, ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { Subject } from 'rxjs/Subject';
var SearchInput = (function () {
    function SearchInput(_elRef, _cdRef, _renderer) {
        this._elRef = _elRef;
        this._cdRef = _cdRef;
        this._renderer = _renderer;
        this._delay = 200;
        this.onChange = new EventEmitter();
        this.searchTerms = new Subject();
    }
    Object.defineProperty(SearchInput.prototype, "delay", {
        get: function () {
            return this._delay;
        },
        set: function (d) {
            var _this = this;
            this._delay = d;
            this.observable = this.searchTerms
                .debounceTime(this.delay)
                .distinctUntilChanged();
            if (this.observer)
                this.observer.unsubscribe();
            this.observer = this.observable.subscribe(function (val) {
                _this.onChange.emit(val);
            });
        },
        enumerable: true,
        configurable: true
    });
    SearchInput.prototype.evalAttributes = function () {
        var element = this._elRef.nativeElement;
        if (element && this.searchBox) {
            for (var i = 0; i < element.attributes.length; i++) {
                var attr = element.attributes[i];
                this._renderer.setElementAttribute(this.searchBox.nativeElement, attr.name, attr.value);
            }
        }
    };
    SearchInput.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.observable) {
            this.observable = this.searchTerms
                .debounceTime(this.delay)
                .distinctUntilChanged();
            this.observer = this.observable.subscribe(function (val) {
                _this.onChange.emit(val);
            });
        }
        setTimeout(function () { return _this.evalAttributes(); }, 20);
    };
    SearchInput.prototype.ngDoCheck = function () {
        this.evalAttributes();
    };
    SearchInput.prototype.ngOnDestroy = function () {
        this.observer.unsubscribe();
    };
    SearchInput.prototype.search = function (str) {
        this.searchTerms.next(str);
    };
    return SearchInput;
}());
export { SearchInput };
SearchInput.decorators = [
    { type: Component, args: [{
                selector: 'search-input',
                template: "\n        <input type=\"search\" #searchBox (input)=\"search(searchBox.value)\"/>\n    "
            },] },
];
SearchInput.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: ChangeDetectorRef, },
    { type: Renderer, },
]; };
SearchInput.propDecorators = {
    'delay': [{ type: Input },],
    'onChange': [{ type: Output },],
    'searchBox': [{ type: ViewChild, args: ["searchBox",] },],
};
//# sourceMappingURL=search-input.js.map