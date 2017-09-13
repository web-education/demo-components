import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var SidePanel = (function () {
    function SidePanel(_eref) {
        this._eref = _eref;
        this.onClose = new EventEmitter();
    }
    Object.defineProperty(SidePanel.prototype, "toggle", {
        set: function (toggle) {
            this.opened = toggle;
        },
        enumerable: true,
        configurable: true
    });
    SidePanel.prototype.onClick = function (event) {
        var checkOpener = this.opener &&
            (this.opener.contains && this.opener.contains(event.target)) ||
            (this.opener.nativeElement && this.opener.nativeElement.contains(event.target));
        if (this.opened &&
            !this._eref.nativeElement.contains(event.target) &&
            !checkOpener) {
            this.opened = false;
            this.onClose.emit();
        }
        return true;
    };
    return SidePanel;
}());
export { SidePanel };
SidePanel.decorators = [
    { type: Component, args: [{
                selector: 'side-panel',
                template: "<div [ngClass]=\"{ opened: opened }\"><ng-content></ng-content></div>",
                styles: ["\n        div {\n            position: fixed;\n            z-index: 10;\n            overflow-x: hidden;\n            overflow-y: scroll;\n            height: 100%;\n            top: 0px;\n            left: -30%;\n            width: 30%;\n            transition: transform 0.25s;\n        }\n        div.opened {\n            transform: translateX(100%);\n        }\n    "],
                host: {
                    '(document:click)': 'onClick($event)',
                }
            },] },
];
SidePanel.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
SidePanel.propDecorators = {
    'toggle': [{ type: Input },],
    'opener': [{ type: Input },],
    'onClose': [{ type: Output },],
};
//# sourceMappingURL=side-panel.js.map