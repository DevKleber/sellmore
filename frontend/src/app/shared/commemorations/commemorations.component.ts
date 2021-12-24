import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
	selector: 'app-commemorations',
	templateUrl: './commemorations.component.html',
	styleUrls: ['./commemorations.component.css'],
})
export class CommemorationsComponent implements OnInit {
	showCommemorations: boolean = false;

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

	constructor() {}

	ngOnInit(): void {
		if (!this.getLocalStorageCommemorations()) {
			const showCommemorations = this.dateIsBetween(
				new Date(),
				new Date('2021-12-20'),
				new Date('2021-12-25')
			);
			if (showCommemorations) {
				this.commemorations();
				this.setLocalStorageCommemorations();
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

	getLocalStorageCommemorations() {
		return localStorage.getItem('commemorations') || false;
	}
	setLocalStorageCommemorations() {
		localStorage.setItem('commemorations', 'true');
	}
}
