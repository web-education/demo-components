"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var dist_1 = require("infra-components/dist");
var demo_app_1 = require("./demo-app/demo-app");
var DemoModule = DemoModule_1 = (function () {
    function DemoModule() {
    }
    return DemoModule;
}());
DemoModule = DemoModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            dist_1.InfraComponentsModule.forRoot([
                {
                    provide: dist_1.DynamicModuleImports,
                    useValue: {
                        imports: [DemoModule_1]
                    }
                },
                {
                    provide: dist_1.LabelsService,
                    useValue: dist_1.LabelsService.withLabels({
                        "select.all": "Select all elements",
                        "deselect.all": "Deselect all elements"
                    })
                }
            ]),
            forms_1.FormsModule
        ],
        declarations: [demo_app_1.DemoComponent],
        providers: [],
        bootstrap: [demo_app_1.DemoComponent],
        exports: [demo_app_1.DemoComponent]
    })
], DemoModule);
exports.DemoModule = DemoModule;
var DemoModule_1;
//# sourceMappingURL=demo.module.js.map