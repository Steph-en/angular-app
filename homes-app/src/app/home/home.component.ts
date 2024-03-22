import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { HousingLocation } from "../housing-location";
import { HousingService } from "../housing.service";
@Component({
  selector: "app-home",
  standalone: true,
  template: `
    <section>
      <form action="">
        <input type="text" placeholder="Filter by City" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of housingLocationList"
        [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>
  `,
  styleUrls: ["./home.component.css"],
  imports: [CommonModule, HousingLocationComponent],
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  HousingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.HousingService.getAllHousingLocations();
  }
}
