import { Component, Input, Renderer, ElementRef } from '@angular/core';
var Tooltip = (function () {
    function Tooltip(ref, renderer) {
        var _this = this;
        this.ref = ref;
        this.renderer = renderer;
        this.position = "bottom";
        this.offset = 5;
        this.onTransitionEnd = function () {
            if (_this.tooltipElt && !_this.tooltipElt.classList.contains('shown')) {
                _this.tooltipElt.parentNode.removeChild(_this.tooltipElt);
                _this.tooltipElt = null;
            }
        };
    }
    Tooltip.prototype.onMouseEnter = function () {
        var r = this.renderer;
        if (!this.tooltipElt) {
            var body = document.getElementsByTagName('body')[0];
            this.tooltipElt = r.createElement(body, 'div');
            r.setElementClass(this.tooltipElt, "tooltip", true);
            this.tooltipElt.innerHTML = this.tooltipContents;
        }
        var tip = this.tooltipElt;
        var pos = this.getPosition(this.ref.nativeElement, tip, this.position);
        for (var prop in pos) {
            r.setElementStyle(tip, prop, pos[prop] + 'px');
        }
        r.setElementClass(tip, 'shown', true);
    };
    Tooltip.prototype.onMouseLeave = function () {
        var wait = this.tooltipElt &&
            parseFloat(window.getComputedStyle(this.tooltipElt)['transition-duration']);
        this.renderer.setElementClass(this.tooltipElt, 'shown', false);
        setTimeout(this.onTransitionEnd, wait * 1000);
    };
    Tooltip.prototype.getPosition = function (elt, tip, pos) {
        var rect = {
            top: elt.getBoundingClientRect().top + window.scrollY,
            left: elt.getBoundingClientRect().left + window.scrollX
        };
        var left, top;
        switch (pos) {
            case "top":
                top = rect.top - tip.offsetHeight - this.offset;
                left = rect.left + elt.offsetWidth / 2 - tip.offsetWidth / 2;
                break;
            case "left":
                top = rect.top + elt.offsetHeight / 2 - tip.offsetHeight / 2;
                left = rect.left - tip.offsetWidth - this.offset;
                break;
            case "right":
                top = rect.top + elt.offsetHeight / 2 - tip.offsetHeight / 2;
                left = rect.left + elt.offsetWidth + this.offset;
                break;
            case "bottom":
            default:
                top = rect.top + elt.offsetHeight + this.offset;
                left = rect.left + elt.offsetWidth / 2 - tip.offsetWidth / 2;
        }
        if (left < 0) {
            left = rect.left + elt.offsetWidth + this.offset;
        }
        if (top < 0) {
            top = rect.top + elt.offsetHeight + this.offset;
        }
        if (left + tip.offsetWidth >= window.pageXOffset + window.innerWidth) {
            left = rect.left - tip.offsetWidth - this.offset;
        }
        if (top - tip.offsetHeight >= window.pageYOffset + window.innerHeight) {
            top = rect.top - tip.offsetHeight - this.offset;
        }
        return {
            top: top < 5 ? 5 : top,
            left: left < 5 ? 5 : left
        };
    };
    Tooltip.prototype.ngOnDestroy = function () {
        if (this.tooltipElt) {
            this.tooltipElt.parentNode.removeChild(this.tooltipElt);
            this.tooltipElt = null;
        }
    };
    return Tooltip;
}());
export { Tooltip };
Tooltip.decorators = [
    { type: Component, args: [{
                selector: '[tooltip]',
                template: "<ng-content></ng-content>",
                styles: ["\n        >>> body > div.tooltip {\n            position: absolute;\n            z-index: 100;\n        }\n        >>> body > div.tooltip.shown {\n        }\n    "],
                host: {
                    '(mouseenter)': 'onMouseEnter()',
                    '(mouseleave)': 'onMouseLeave()'
                }
            },] },
];
Tooltip.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer, },
]; };
Tooltip.propDecorators = {
    'tooltipContents': [{ type: Input, args: ["tooltip",] },],
    'position': [{ type: Input },],
    'offset': [{ type: Input },],
};
//# sourceMappingURL=tooltip.js.map