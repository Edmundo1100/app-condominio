// import { Directive, Input, ElementRef, OnInit } from '@angular/core';
// import { NgControl } from '@angular/forms';

// @Directive({
//   selector: '[ngInvalidDirty]'
// })
// export class InvalidDirtyDirective implements OnInit {
//   @Input('ngInvalidDirty') className: string = 'ng-invalid ng-dirty';

//   constructor(private el: ElementRef, private control: NgControl) { }

//   ngOnInit() {
//     this.control.statusChanges?.subscribe(() => {
//       const isValid = this.control.valid;
//       const isDirty = this.control.dirty;
//       const classList = this.el.nativeElement.classList;

//       if (isValid && isDirty) {
//         classList.add(this.className);
//       } else {
//         classList.remove(this.className);
//       }
//     });
//   }
// }
