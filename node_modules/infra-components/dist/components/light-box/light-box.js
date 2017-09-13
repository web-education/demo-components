import { ChangeDetectorRef } from '@angular/core';
import { Component, ViewChild, ElementRef, EventEmitter, Renderer, Input, Output } from '@angular/core';
var LightBox = (function () {
    function LightBox(cdRef, renderer, host) {
        this.cdRef = cdRef;
        this.renderer = renderer;
        this.host = host;
        this._show = false;
        this.onClose = new EventEmitter();
    }
    Object.defineProperty(LightBox.prototype, "show", {
        get: function () { return this._show; },
        set: function (s) {
            var _this = this;
            if (this.timer)
                clearTimeout(this.timer);
            if (s) {
                this._show = true;
                this.timer = window.setTimeout(function () {
                    _this.renderer.setElementClass(_this.host.nativeElement, 'shown', true);
                    _this.timer = null;
                    _this.cdRef.markForCheck();
                }, 100);
            }
            else {
                var wait = parseFloat(this.section &&
                    window.getComputedStyle(this.section.nativeElement)['transition-duration']);
                this.renderer.setElementClass(this.host.nativeElement, 'shown', false);
                this.timer = window.setTimeout(function () {
                    _this._show = false;
                    _this.timer = null;
                    _this.cdRef.markForCheck();
                }, wait * 1000);
            }
        },
        enumerable: true,
        configurable: true
    });
    LightBox.prototype.onClick = function (event) {
        if (this.overlay.nativeElement.contains(event.target)) {
            this.show = false;
            this.onClose.emit();
        }
    };
    return LightBox;
}());
export { LightBox };
LightBox.decorators = [
    { type: Component, args: [{
                selector: 'light-box',
                template: "\n        <section *ngIf=\"_show\" #section>\n            <div overlay #overlay></div>\n            <div content>\n                <ng-content></ng-content>\n            </div>\n        </section>\n    ",
                styles: ["\n        section {\n            position: fixed;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            height: 100%;\n            width: 100%;\n            z-index: 100;\n            top: 0;\n            left: 0;\n            opacity: 0;\n            transition: opacity 0.35s;\n        }\n        section[hidden] {\n            display: none !important;\n        }\n        :host.shown > section {\n            opacity: 1;\n        }\n        div[overlay] {\n            position: absolute;\n            top: 0;\n            left: 0;\n            opacity: 0.7;\n            width: 100%;\n            height: 100%;\n            background-color: black;\n        }\n        div[content] {\n            flex: 0 0 auto;\n            min-width: 25%;\n            max-width: 75%;\n            max-height: 75%;\n            overflow: scroll;\n            background-color: white;\n            z-index: 2;\n        }\n    "],
                host: {
                    '(click)': 'onClick($event)'
                }
            },] },
];
LightBox.ctorParameters = function () { return [
    { type: ChangeDetectorRef, },
    { type: Renderer, },
    { type: ElementRef, },
]; };
LightBox.propDecorators = {
    'show': [{ type: Input },],
    'onClose': [{ type: Output },],
    'section': [{ type: ViewChild, args: ["section",] },],
    'overlay': [{ type: ViewChild, args: ["overlay",] },],
};
//# sourceMappingURL=light-box.js.map