import { Component, Input, Output, EventEmitter, ViewChild, ChangeDetectorRef } from '@angular/core';
var ItemTree = (function () {
    function ItemTree(_changeRef) {
        this._changeRef = _changeRef;
        this.items = [];
        this.childrenProperty = "children";
        this.displayProperty = "label";
        this.filter = "";
        this.order = [];
        this.reverse = false;
        this._flattenProps = [];
        this.disableOpener = false;
        this.onSelect = new EventEmitter();
        this._depth = 0;
        this.unfolded = [];
    }
    Object.defineProperty(ItemTree.prototype, "flatten", {
        get: function () {
            return this._flattenProps;
        },
        set: function (flattenProps) {
            if (!this.isFlattened() && flattenProps.length > 0) {
                this._selectedItem = this._lastSelectedItem;
            }
            else if (this.isFlattened && flattenProps.length < 1) {
                this.flagIfParent();
            }
            this._flattenProps = flattenProps;
        },
        enumerable: true,
        configurable: true
    });
    ItemTree.prototype.ngOnInit = function () {
        this.flagIfParent();
    };
    ItemTree.prototype.selectItem = function (item) {
        this._selectedItem = item;
        if (this.childItemTree)
            delete this.childItemTree._selectedItem;
        var idx = this.unfolded.indexOf(item);
        if (!this.disableOpener && idx < 0) {
            this.unfolded.push(item);
        }
        this.bubbleSelect(item);
    };
    ItemTree.prototype.bubbleSelect = function (item) {
        this._lastSelectedItem = item;
        this.onSelect.emit(item);
    };
    ItemTree.prototype.isSelected = function (item) {
        return (this.disableOpener ? this._selectedItem : this._lastSelectedItem) === item;
    };
    ItemTree.prototype.toggleFold = function (event, item) {
        event.stopPropagation();
        var idx = this.unfolded.indexOf(item);
        if (idx < 0) {
            this.unfolded.push(item);
        }
        else {
            this.unfolded.splice(idx, 1);
        }
    };
    ItemTree.prototype.isFolded = function (item) {
        return this.disableOpener ? !this.isSelected(item) : this.unfolded.indexOf(item) < 0;
    };
    ItemTree.prototype.display = function (item) {
        return item[this.displayProperty];
    };
    ItemTree.prototype.getChildren = function (item) {
        return item[this.childrenProperty] || [];
    };
    ItemTree.prototype.hasChildren = function (item) {
        return this.getChildren(item).length > 0;
    };
    ItemTree.prototype.isFlattened = function () {
        return this._flattenProps.length;
    };
    ItemTree.prototype.flagIfParent = function () {
        var _this = this;
        if (!this._lastSelectedItem) {
            return;
        }
        var findSubItem = function (item, target) {
            if (item === target)
                return true;
            if (_this.hasChildren(item)) {
                return _this.getChildren(item).find(function (subItem) {
                    return findSubItem(subItem, target);
                });
            }
            return false;
        };
        for (var i in this.items) {
            var item = this.items[i];
            if (item === this._lastSelectedItem ||
                findSubItem(item, this._lastSelectedItem)) {
                this._selectedItem = item;
                this.unfolded = [item];
                break;
            }
        }
        this._changeRef.markForCheck();
    };
    return ItemTree;
}());
export { ItemTree };
ItemTree.decorators = [
    { type: Component, args: [{
                selector: 'item-tree',
                template: "\n    <ul [ngClass]=\"{ flattened: isFlattened() }\">\n        <li *ngFor=\"let item of (items | flattenObjArray: flatten | filter: filter | orderBy: order:reverse)\"\n            [ngClass]=\"{ selected: isSelected(item), unfolded: !isFolded(item), parent: hasChildren(item), root: _depth === 0 }\">\n            <a href=\"javascript:void(0)\" (click)=\"selectItem(item)\">\n                <i class=\"opener\" (click)=\"toggleFold($event, item)\"\n                    *ngIf=\"!isFlattened() && hasChildren(item) && !disableOpener\"></i>\n                {{ display(item) }}\n            </a>\n            <item-tree\n                [items]=\"getChildren(item)\"\n                [children]=\"childrenProperty\"\n                [display]=\"displayProperty\"\n                [filter]=\"filter\"\n                [order]=\"order\"\n                [reverse]=\"reverse\"\n                [lastSelected]=\"_lastSelectedItem\"\n                [depth]=\"depth + 1\"\n                [disableOpener]=\"disableOpener\"\n                (onSelect)=\"bubbleSelect($event)\"\n                *ngIf=\"!isFlattened() && hasChildren(item) && !isFolded(item)\">\n            </item-tree>\n        </li>\n    </ul>\n    ",
                styles: []
            },] },
];
ItemTree.ctorParameters = function () { return [
    { type: ChangeDetectorRef, },
]; };
ItemTree.propDecorators = {
    'items': [{ type: Input },],
    'childrenProperty': [{ type: Input, args: ["children",] },],
    'displayProperty': [{ type: Input, args: ["display",] },],
    'filter': [{ type: Input },],
    'order': [{ type: Input },],
    'reverse': [{ type: Input },],
    'flatten': [{ type: Input },],
    'disableOpener': [{ type: Input },],
    'onSelect': [{ type: Output },],
    'childItemTree': [{ type: ViewChild, args: [ItemTree,] },],
    '_lastSelectedItem': [{ type: Input, args: ["lastSelected",] },],
    '_depth': [{ type: Input, args: ["depth",] },],
};
//# sourceMappingURL=item-tree.js.map