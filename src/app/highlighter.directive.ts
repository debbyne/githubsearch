
import { Directive ,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  constructor(private elem: ElementRef) { }
  private Highlighter(color: string) {
    this.elem.nativeElement.style.backgroundColor = color;
  }

  @HostListener("click") onClicks() {
    this.Highlighter("red")
  }

  @HostListener("dblclick") onDoubleClicks() {
    this.Highlighter("yellow")
  }
}
