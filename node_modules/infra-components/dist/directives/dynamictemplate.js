import { NgModule, Component, Directive, Input, ElementRef, ViewContainerRef, ReflectiveInjector, Compiler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfraComponentsModule } from '../infracomponents.module';
import { DynamicModuleImports } from '../services/dynamicModuleImports';
var DynamicTemplate = (function () {
    function DynamicTemplate(elementRef, viewContainer, compiler, dynamicModuleImports) {
        this.elementRef = elementRef;
        this.viewContainer = viewContainer;
        this.compiler = compiler;
        this.dynamicModuleImports = dynamicModuleImports;
        this._html = "";
        this._selector = "dynamic-view";
    }
    DynamicTemplate.prototype._createDynamicComponent = function () {
        var metadata = {
            selector: this._selector,
            template: this._html,
            inputs: ['template']
        };
        var _cmp_ = (function () {
            function _cmp_() {
            }
            return _cmp_;
        }());
        _cmp_.prototype = this.context;
        return Component(metadata)(_cmp_);
    };
    DynamicTemplate.prototype._createDynamicModule = function (componentType) {
        var _mod_ = (function () {
            function _mod_() {
            }
            return _mod_;
        }());
        return NgModule({
            imports: [
                CommonModule,
                InfraComponentsModule
            ].concat(this.dynamicModuleImports.imports),
            declarations: [componentType],
            providers: []
        })(_mod_);
    };
    Object.defineProperty(DynamicTemplate.prototype, "templateContents", {
        set: function (html) {
            var _this = this;
            if (html) {
                this._html = html;
                var cmpType = this._createDynamicComponent();
                var moduleType = this._createDynamicModule(cmpType);
                var injector_1 = ReflectiveInjector.fromResolvedProviders([], this.viewContainer.parentInjector);
                this.compiler.compileModuleAndAllComponentsAsync(moduleType)
                    .then(function (factory) {
                    var cmpFactory;
                    for (var i = factory.componentFactories.length - 1; i >= 0; i--) {
                        if (factory.componentFactories[i].selector === _this._selector) {
                            cmpFactory = factory.componentFactories[i];
                            break;
                        }
                    }
                    return cmpFactory;
                })
                    .then(function (cmpFactory) {
                    if (cmpFactory) {
                        _this.viewContainer.clear();
                        _this.viewContainer.createComponent(cmpFactory, 0, injector_1);
                    }
                });
            }
            else {
                this._html = "";
                this.viewContainer.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    return DynamicTemplate;
}());
export { DynamicTemplate };
DynamicTemplate.decorators = [
    { type: Directive, args: [{
                selector: 'dynamic-template'
            },] },
];
DynamicTemplate.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: ViewContainerRef, },
    { type: Compiler, },
    { type: DynamicModuleImports, },
]; };
DynamicTemplate.propDecorators = {
    'context': [{ type: Input },],
    'templateContents': [{ type: Input, args: ["template",] },],
};
//# sourceMappingURL=dynamictemplate.js.map