import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LoaderService } from './loader.service'


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class LoaderComponent implements OnInit {
  loader:boolean = false;
  
  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.loaderService.loader.subscribe(
      loader => setTimeout(() => this.loader = loader, 0)
    );
  }
}