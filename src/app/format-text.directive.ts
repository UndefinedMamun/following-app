import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[myFormatText]'
})
export class FormatTextDirective {
  @Input('myFormatText') action;
  constructor(private el:ElementRef) { }
  
  @HostListener('blur') onblur(){
    let value:string = this.el.nativeElement.value;
    
    if(this.action == 'lowercase')
      this.el.nativeElement.value = value.toLocaleLowerCase();
    else
      this.el.nativeElement.value = value.toUpperCase();
  }

}
