import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ThemeService } from './shared/theme/theme.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	changeDetection: ChangeDetectionStrategy.Eager,
	standalone: false
})
export class AppComponent implements OnInit {
	title = 'selelmore';
	systemOn: boolean = true;
	user: any = {};

	constructor(private themeService: ThemeService) {}

	ngOnInit(): void {
		this.themeService.setTheme();
	}
}
