"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tree_items_1 = require("../mock/tree-items");
var orderable_items_1 = require("../mock/orderable-items");
var DemoComponent = (function () {
    function DemoComponent() {
        this.treeItems = tree_items_1.treeItems;
        this.deepItemList = tree_items_1.deepItemList;
        this.treeConfig = {
            flatten: [],
            filter: ""
        };
        this.delay = 200;
        this.multiComboConfig = {
            maxSelected: 0,
            disabled: false
        };
        this.selectedMulti = [];
        this.tooltipPos = "bottom";
        this.tooltipText = "Tooltip contents";
        this.self = this;
        this.dynamicHtml = "<demo-app></demo-app>";
        this.highlight = function (elt) {
            hljs.highlightBlock(elt);
        };
        this.orderableItems = orderable_items_1.orderableItems;
        this.orderByClause = [];
        this.storedElements = [];
    }
    Object.defineProperty(DemoComponent.prototype, "treeFilter", {
        set: function (str) {
            this.treeConfig.filter = str ? { name: str } : "";
            this.treeConfig.flatten = str ? ["children"] : [];
        },
        enumerable: true,
        configurable: true
    });
    DemoComponent.prototype.deselectMultiCombo = function (item) {
        this.selectedMulti = this.selectedMulti.filter(function (elt) {
            return item !== elt;
        });
    };
    DemoComponent.prototype.orderBy = function (field) {
        if (this.orderByClause.length && this.orderByClause[0] === field) {
            this.orderByClause = ["-" + field];
        }
        else {
            this.orderByClause = [field];
        }
    };
    DemoComponent.prototype.allChildrenNames = function (item) {
        var accu = [];
        var recurse = function (item, itself) {
            if (itself === void 0) { itself = true; }
            if (itself)
                accu.push(item.name);
            var length = item.children ? item.children.length : 0;
            for (var i = 0; i < length; i++) {
                recurse(item.children[i]);
            }
        };
        recurse(item, false);
        return accu;
    };
    DemoComponent.prototype.logAction = function (s) {
        this.wizardAction = s;
    };
    return DemoComponent;
}());
__decorate([
    core_1.ViewChild("sidePanelOpener"),
    __metadata("design:type", core_1.ElementRef)
], DemoComponent.prototype, "sidePanelOpener", void 0);
__decorate([
    core_1.ViewChild("pushPanelOpener"),
    __metadata("design:type", core_1.ElementRef)
], DemoComponent.prototype, "pushPanelOpener", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], DemoComponent.prototype, "treeFilter", null);
DemoComponent = __decorate([
    core_1.Component({
        selector: 'demo-app',
        templateUrl: '/demo-components/demo/demo-app/demo-app.html',
    })
], DemoComponent);
exports.DemoComponent = DemoComponent;
//# sourceMappingURL=demo-app.js.map