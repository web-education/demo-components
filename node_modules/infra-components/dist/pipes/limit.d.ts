import { PipeTransform } from '@angular/core';
export declare class LimitPipe implements PipeTransform {
    transform(array: Array<any>, limit: number, offset?: number): any[];
}
