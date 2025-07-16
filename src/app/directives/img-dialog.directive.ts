import { Dialog } from '@angular/cdk/dialog';
import { Directive, ElementRef, HostListener, inject } from '@angular/core';
import { ImgDialogComponent } from '../components/img-dialog/img-dialog.component';

@Directive({
  selector: '[imgDialog]'
})
export class ImgDialogDirective {

  #dialog = inject(Dialog);

  constructor(
    private el: ElementRef<HTMLImageElement>,
  ) {
    const classes = ['cursor-pointer', 'hover:outline', 'hover:outline-1', 'hover:outline-green-500'];
    this.el.nativeElement.classList.add(...classes);
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    this.#dialog.open(ImgDialogComponent, {
      maxWidth: '90vw',
      maxHeight: '90vh',
      autoFocus: true,
      hasBackdrop: true,
      panelClass: 'img-dialog-panel', // global style.css
      data: {
        src: this.el.nativeElement.src,
        alt: this.el.nativeElement.alt,
      },
    });
  }

}
