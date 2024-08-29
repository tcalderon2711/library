import { Component, OnInit, Input } from '@angular/core';
import {slideshow} from '../models/ISlideshow';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

    @Input() images: slideshow[]=[];
    @Input() indicators=true;
    public currentIndex=0;
    
    ngOnInit(): void {
        
    }

    selectedImage(index:number): void{
      this.currentIndex=index;
    }


}