import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  images=[
     {imageSrc:"/assets/9781668016138_p0_v3_s600x595.jpg" },
     {imageSrc:"/assets/9780593802564_p0_v4_s600x595.jpg"},
     {imageSrc:"/assets/9780385544276_p0_v3_s600x595.jpg"}
     ]
}
