import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BanerComponent } from "../../../+components/baner/baner.component";
import { HeaderComponent } from "../../../+components/header/header.component";
import { FooterComponent } from "../../../+components/footer/footer.component";
@Component({
  selector: 'app-public-navigation',
  imports: [RouterOutlet, BanerComponent, HeaderComponent, FooterComponent],
  templateUrl: './public-navigation.component.html',
  styleUrls: ['./public-navigation.component.scss']
})
export class PublicNavigationComponent {

}
