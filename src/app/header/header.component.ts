import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	public menuStatus: boolean = false;

	constructor() { }

	ngOnInit() {
	}

	public openMenu():void {
		this.menuStatus = true;
	}

	public closeMenu(): void{
		this.menuStatus = false;
	}

}
