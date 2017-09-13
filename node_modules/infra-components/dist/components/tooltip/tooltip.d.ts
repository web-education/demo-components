import { Renderer, ElementRef } from '@angular/core';
export declare class Tooltip {
    private ref;
    private renderer;
    constructor(ref: ElementRef, renderer: Renderer);
    tooltipContents: string;
    position: "top" | "left" | "right" | "bottom";
    offset: number;
    private tooltipElt;
    onMouseEnter(): void;
    onMouseLeave(): void;
    onTransitionEnd: () => void;
    private getPosition(elt, tip, pos);
    ngOnDestroy(): void;
}
