import { Component, Input, ViewChild, ElementRef } from '@angular/core'

import { treeItems } from '../mock/tree-items'
import { orderableItems } from '../mock/orderable-items'

@Component({
    selector: 'demo-app',
    templateUrl: '/demo/demo-app/demo-app.html',
})
export class DemoComponent {

    treeItems = treeItems

    /* Side & push panels */
    @ViewChild("sidePanelOpener")
    private sidePanelOpener: ElementRef
    @ViewChild("pushPanelOpener")
    private pushPanelOpener: ElementRef

    /* Item tree */
    private treeConfig: any = {
        flatten: [],
        filter: ""
    }

    @Input()
    set treeFilter(str: string){
        this.treeConfig.filter = str ? {name: str} : ""
        this.treeConfig.flatten = str ? ["children"] : []
    }

    /* Search input */
    delay = 200

    /* Multi-combo */
    multiComboConfig = {
        maxSelected: 0,
        disabled: false
    }
    selectedMulti = []
    deselectMultiCombo(item) {
        this.selectedMulti = this.selectedMulti.filter(elt => {
            return item !== elt
        })
    }

    /* Tooltips */
    tooltipPos: "left" | "right" | "top" | "bottom" = "bottom"
    tooltipText = "Tooltip contents"

    /* Dynamic html injection */
    self = this
    dynamicHtml = `<demo-app></demo-app>`
    highlight = (elt) => {
        hljs.highlightBlock(elt)
    }

    /* Order by */
    orderableItems = orderableItems
    orderByClause = []
    orderBy(field) {
        if(this.orderByClause.length && this.orderByClause[0] === field){
            this.orderByClause = ["-"+field]
        } else {
            this.orderByClause = [field]
        }
    }

    /* Store pipe */
    storedElements = []

    /* Flatten pipe */
    allChildrenNames(item) {
        let accu = []
        let recurse = (item, itself = true) => {
            if(itself)
                accu.push(item.name)
            let length = item.children ? item.children.length : 0
            for(let i = 0; i < length; i++) {
                recurse(item.children[i])
            }
        }
        recurse(item, false)
        return accu
    }

    /* Wizard */
    wizardAction:String;
    logAction(s) {
        this.wizardAction = s;
    }
}
