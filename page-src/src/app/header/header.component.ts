import { Component, OnInit } from '@angular/core';

import { CookieService } from 'ng2-cookies';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	public isDark: boolean;
	public menuStatus: boolean = false;

	constructor(private cookieService: CookieService) { }

	/* 
	* Checks if the 'theme' cookie is present on the client browser:
	* - If the cookie is found -> sets the preferred user theme saved (and updates the cookie for another 30 days).
	* - Otherwise -> sets the style based on the time of the day (no cookie is set).
	*/
	ngOnInit() {
		if(this.cookieService.check('theme')){
			let cookie = this.cookieService.get('theme');

			if(cookie == 'dark')
				this.changeStyle(true);
			else
				this.changeStyle(false);

		} else {
			let now = new Date();
			let hourNow = now.getHours();

			if(hourNow >= 6 && hourNow < 18)
				this.toggleDarkClass(false);
			else
				this.toggleDarkClass(true);
		}
	}

	public openMenu():void {
		this.menuStatus = true;
	}

	public closeMenu(): void{
		this.menuStatus = false;
	}
	

	public changeStyle(toAdd: boolean): void {
		this.toggleDarkClass(toAdd);

		if(toAdd)
			this.cookieService.set('theme','dark',30);
		else
			this.cookieService.set('theme','light',30);
	}

	private toggleDarkClass(toAdd: boolean): void {
		if(toAdd) {
			document.body.classList.add('dark');
			this.isDark=true;
		} else {
			document.body.classList.remove('dark');
			this.isDark=false;
		}
	}
}
