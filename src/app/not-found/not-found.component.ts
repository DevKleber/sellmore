import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { NotificationService } from "../shared/messages/notification.service";

@Component({
	selector: "mt-not-found",
	templateUrl: "./not-found.component.html",
	styleUrls: ["./not-found.component.css"],
	changeDetection: ChangeDetectionStrategy.Eager,
	standalone: false
})
export class NotFoundComponent implements OnInit {
	constructor(private notificationService: NotificationService) {}

	ngOnInit() {}
}
