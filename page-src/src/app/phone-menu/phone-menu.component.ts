import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-phone-menu',
  templateUrl: './phone-menu.component.html',
  styleUrls: ['./phone-menu.component.css']
})
export class PhoneMenuComponent {

	@Input() public isOpen: boolean;
	@Output() public onClose = new EventEmitter();

	constructor() { }

	public onClick():void {
		this.onClose.emit();
	}

}
