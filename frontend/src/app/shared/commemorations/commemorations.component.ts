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
	nameEvent = 'happyNewYear';

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
	newYear: AnimationOptions = {
		path: '/assets/animations/json/90477-happy-new-year-lottie-animation.json',
		autoplay: true,
		loop: true,
	};

	constructor(private loginService: LoginService) {}

	ngOnInit(): void {
		const pessoa = this.loginService.getUser();
		if (!pessoa) {
			return;
		}
		if (!this.getLocalStorageCommemorations(this.nameEvent)) {
			const showCommemorations = this.dateIsBetween(
				new Date(),
				new Date('2021-12-26'),
				new Date('2021-12-31')
			);
			if (showCommemorations) {
				this.commemorations();
				this.setLocalStorageCommemorations({
					event: this.nameEvent,
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
