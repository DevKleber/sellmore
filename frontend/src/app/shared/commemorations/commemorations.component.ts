import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { LoginService } from 'src/app/security/login/login.service';

@Component({
	selector: 'app-commemorations',
	templateUrl: './commemorations.component.html',
	styleUrls: ['./commemorations.component.css'],
})
export class CommemorationsComponent implements OnInit {
	showCommemorations: boolean = false;
	nameEventMerryChristmas = 'merryChristmas';

	optionsMerryChristmas: AnimationOptions = {
		path: '/assets/animations/json/merryChristmas.json',
		autoplay: true,
		loop: true,
	};
	optionschristmasTree: AnimationOptions = {
		path: '/assets/animations/json/90315-christmas-tree.json',
		autoplay: true,
		loop: false,
	};
	optionsChristmasWind: AnimationOptions = {
		path: '/assets/animations/json/87898-christmas-wind-chimes.json',
		autoplay: true,
		loop: true,
	};
	optionsWinter: AnimationOptions = {
		path: '/assets/animations/json/snow.json',
		autoplay: true,
		loop: true,
	};

	constructor(private loginService: LoginService) {}

	ngOnInit(): void {
		const pessoa = this.loginService.getUser();
		if (!pessoa) {
			return;
		}
		if (!this.getLocalStorageCommemorations(this.nameEventMerryChristmas)) {
			const showCommemorations = this.dateIsBetween(
				new Date(),
				new Date('2021-12-20'),
				new Date('2021-12-25')
			);
			if (showCommemorations) {
				this.commemorations();
				this.setLocalStorageCommemorations({
					event: this.nameEventMerryChristmas,
					year: 2021,
				});
			}
		}
	}

	dateIsBetween(date: Date, start: Date, end: Date) {
		return (
			date.getTime() >= start.getTime() && date.getTime() <= end.getTime()
		);
	}

	commemorations() {
		this.showCommemorations = true;
		setTimeout(
			function () {
				this.showCommemorations = false;
			}.bind(this),
			10000
		);
	}

	getLocalStorageCommemorations(eventName) {
		const commemorations = localStorage.getItem('commemorations') || false;
		if (commemorations) {
			const { event, year } = JSON.parse(commemorations);
			if (event === eventName && year === new Date().getFullYear()) {
				return true;
			}
		}
		return false;
	}
	setLocalStorageCommemorations(dataEvent) {
		localStorage.setItem('commemorations', JSON.stringify(dataEvent));
	}
}
