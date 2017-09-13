import { Injectable } from '@angular/core';
var LabelsService = (function () {
    function LabelsService() {
        this.labels = {
            "select.all": "Select all",
            "deselect.all": "Deselect all",
            "search": "Search"
        };
    }
    LabelsService.prototype.getLabel = function (label) {
        return this.labels[label] || label;
    };
    LabelsService.prototype.mixin = function (labels) {
        for (var property in labels) {
            this.labels[property] = labels[property];
        }
    };
    LabelsService.withLabels = function (labels) {
        var newService = new LabelsService();
        for (var prop in labels) {
            newService.labels[prop] = labels[prop];
        }
        return newService;
    };
    return LabelsService;
}());
export { LabelsService };
LabelsService.decorators = [
    { type: Injectable },
];
LabelsService.ctorParameters = function () { return []; };
//# sourceMappingURL=labelsService.js.map