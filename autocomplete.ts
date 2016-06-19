import {Directive, Input, ElementRef, AfterContentInit, ChangeDetectionStrategy} from '@angular/core';

@Directive({
	selector:					'[autocomplete]',
	changeDetection:	ChangeDetectionStrategy.Detached
})

export class Autocomplete implements AfterContentInit {
	@Input() autocomplete;
	private elem: any;
	
	constructor(elem: ElementRef) {
		this.elem = elem;
	}
	
	ngAfterContentInit() {
		$(this.elem.nativeElement).autocomplete(this.autocomplete);
	}
}