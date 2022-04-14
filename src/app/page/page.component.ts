import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { PoojaService } from '../pooja.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
img:any;
real:any
hello=[];
kal=[];
  constructor(private image:PoojaService) { }

  ngOnInit(): void {
   this.image.getProducts().subscribe((res)=>{
     this.img=res
      res[0].bedroom_banners_images.forEach(element=>{
        this.kal.push(element.image)
        
        
      });

           
    
console.log(res);

      res[0].bedroom_collection_images.forEach(element => {
        this.hello.push(element.image)
      });

    //  this.hello = res[0].bedroom_collection_images.image;
     console.log(this.hello);
     
  })
  }

}
