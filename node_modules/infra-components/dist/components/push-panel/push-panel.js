import { Component, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
var PushPanel = (function () {
    function PushPanel(_eref) {
        this._eref = _eref;
        this.onClose = new EventEmitter();
    }
    Object.defineProperty(PushPanel.prototype, "toggle", {
        set: function (toggle) {
            this._opened = toggle;
        },
        enumerable: true,
        configurable: true
    });
    PushPanel.prototype.onClick = function (event) {
        var checkOpener = this.opener &&
            (this.opener.contains && this.opener.contains(event.target)) ||
            (this.opener.nativeElement && this.opener.nativeElement.contains(event.target));
        if (this._opened &&
            !this.inside.nativeElement.contains(event.target) &&
            !checkOpener) {
            this._opened = false;
            this.onClose.emit();
        }
        return true;
    };
    return PushPanel;
}());
export { PushPanel };
PushPanel.decorators = [
    { type: Component, args: [{
                selector: 'push-panel',
                template: "\n    <div [ngClass]=\"{ opened: _opened }\" #inside>\n        <ng-content select=\"[inside]\"></ng-content>\n    </div>\n    <div>\n        <ng-content select=\"[companion]\"></ng-content>\n    </div>\n    ",
                styles: ["\n        :host > div:nth-child(1) {\n            position: fixed;\n            z-index: 10;\n            overflow-x: hidden;\n            overflow-y: scroll;\n            height: 100%;\n            top: 0px;\n            left: -30%;\n            width: 30%;\n            transition: transform 0.25s;\n        }\n        :host > div:nth-child(1).opened {\n            transform: translateX(100%);\n        }\n        :host > div:nth-child(2) {\n            position: relative;\n            left: 0%;\n            opacity: 1;\n            transition: transform 0.25s, opacity 0.25s;\n        }\n        :host > div:nth-child(1).opened + div {\n            opacity: 0.7;\n            transform: translateX(30%);\n            overflow-x: hidden;\n        }\n    "],
                host: {
                    '(document:click)': 'onClick($event)',
                }
            },] },
];
PushPanel.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
PushPanel.propDecorators = {
    'toggle': [{ type: Input },],
    'opener': [{ type: Input },],
    'onClose': [{ type: Output },],
    'inside': [{ type: ViewChild, args: ["inside",] },],
};
//# sourceMappingURL=push-panel.js.map