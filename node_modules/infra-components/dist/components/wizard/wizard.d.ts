import { Renderer, AfterContentInit, QueryList, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import { LabelsService } from '../../services';
export declare class Step {
    name: string;
    isActived: boolean;
    hasError: boolean;
    isFinished: boolean;
}
export declare class Wizard implements AfterContentInit, OnDestroy {
    private labelsService;
    private renderer;
    private ref;
    constructor(labelsService: LabelsService, renderer: Renderer, ref: ElementRef);
    cancel: EventEmitter<{}>;
    finish: EventEmitter<{}>;
    previousStep: EventEmitter<Number>;
    nextStep: EventEmitter<Number>;
    doCancel(): void;
    doFinish(): void;
    onPreviousStep(): void;
    doPreviousStep(): void;
    onNextStep(): void;
    doNextStep(): void;
    steps: QueryList<Step>;
    private activeStep;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    private labels(label);
    private canDoNext();
    private canDoFinish();
}
