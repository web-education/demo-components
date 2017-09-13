import { EventEmitter, ElementRef } from '@angular/core';
export declare class SidePanel {
    private _eref;
    opened: boolean;
    constructor(_eref: ElementRef);
    toggle: boolean;
    opener: any;
    onClose: EventEmitter<boolean>;
    onClick(event: any): boolean;
}
