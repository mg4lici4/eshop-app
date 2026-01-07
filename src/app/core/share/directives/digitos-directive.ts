import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDigitosDirective]',
})
export class DigitosDirective {
  @Input() pattern = /[^0-9]/g;

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const cleaned = input.value.replace(this.pattern, '');
    if (input.value !== cleaned) {
      input.value = cleaned;
      input.dispatchEvent(new Event('input'));
    }
  }
}