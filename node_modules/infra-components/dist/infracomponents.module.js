import './rxjs-extensions';
import { NgModule } from '@angular/core';
import * as deps from './module.dependencies';
import { DynamicModuleImports, LabelsService } from './services';
var InfraComponentsModule = (function () {
    function InfraComponentsModule() {
    }
    InfraComponentsModule.forRoot = function (labelsProvider) {
        return {
            ngModule: InfraComponentsModule,
            providers: [
                DynamicModuleImports,
                labelsProvider || LabelsService
            ]
        };
    };
    InfraComponentsModule.forChild = function () {
        return {
            ngModule: InfraComponentsModule,
            providers: []
        };
    };
    return InfraComponentsModule;
}());
export { InfraComponentsModule };
InfraComponentsModule.decorators = [
    { type: NgModule, args: [{
                imports: deps.imports,
                declarations: deps.declarations,
                providers: [],
                exports: deps.exportList
            },] },
];
InfraComponentsModule.ctorParameters = function () { return []; };
//# sourceMappingURL=infracomponents.module.js.map