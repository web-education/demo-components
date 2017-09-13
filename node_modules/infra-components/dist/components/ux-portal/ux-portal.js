import { Component } from '@angular/core';
var UxPortal = (function () {
    function UxPortal() {
    }
    return UxPortal;
}());
export { UxPortal };
UxPortal.decorators = [
    { type: Component, args: [{
                selector: 'ux-portal',
                template: "\n        <header>\n            <ng-content select=\"[header-left]\"></ng-content>\n            <ng-content select=\"[header-middle]\"></ng-content>\n            <ng-content select=\"[header-right]\"></ng-content>\n        </header>\n        <section>\n            <ng-content select=\"[section]\"></ng-content>\n        </section>\n        <footer>\n            <ng-content select=\"[footer]\"></ng-content>\n        </footer>\n    ",
                styles: ["\n        header{\n            position:relative;\n            display: flex;\n            align-items: center;\n            top: 0px;\n            width: 100%;\n        }\n\n        header >>> > div {\n            flex-grow: 1;\n            flex-basis: 33.3%;\n        }\n        header >>> > div {\n            display: flex;\n            align-items: center;\n        }\n        header >>> > div[header-middle] {\n            justify-content: center;\n        }\n        header >>> > div[header-right] {\n            flex-direction: row-reverse;\n        }\n        header >>> > div > *{\n            display: inline-block;\n            vertical-align: middle;\n        }\n    "]
            },] },
];
UxPortal.ctorParameters = function () { return []; };
//# sourceMappingURL=ux-portal.js.map