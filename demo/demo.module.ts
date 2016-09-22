import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { InfraComponentsModule, DynamicModuleImports, LabelsService } from 'infra-components/dist'
import { DemoComponent } from './demo-app/demo-app'

@NgModule({
    imports: [
        BrowserModule,
        InfraComponentsModule.forRoot([
            {
                provide: DynamicModuleImports,
                useValue: {
                    imports: [DemoModule]
                }
            },
            {
                provide: LabelsService,
                useValue: LabelsService.withLabels({
                    "select.all": "Select all elements",
                    "deselect.all": "Deselect all elements"
                })
            }
        ]),
        FormsModule],
    declarations: [DemoComponent],
    providers: [],
    bootstrap: [DemoComponent],
    exports: [DemoComponent]
})
export class DemoModule { }
