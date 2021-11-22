import { NgModule, Directive, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Directive({
    selector: '[typedTemplate]',
    host: {
    }
})
export class TypedTemplate {
    
    @Input() type: string;
    
    @Input('typedTemplate') name: string;
    
    constructor(public template: TemplateRef<any>) {}
    
    getType(): string {
        return this.name;
    }
}

@NgModule({
    imports: [CommonModule],
    exports: [TypedTemplate],
    declarations: [TypedTemplate]
})
export class TypedTemplateModule { }
