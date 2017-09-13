import { ElementRef, ViewContainerRef, Compiler } from '@angular/core';
import { DynamicModuleImports } from '../services/dynamicModuleImports';
export declare class DynamicTemplate {
    private elementRef;
    private viewContainer;
    private compiler;
    private dynamicModuleImports;
    constructor(elementRef: ElementRef, viewContainer: ViewContainerRef, compiler: Compiler, dynamicModuleImports: DynamicModuleImports);
    private _html;
    private _selector;
    private _createDynamicComponent();
    private _createDynamicModule(componentType);
    private context;
    templateContents: string;
}
