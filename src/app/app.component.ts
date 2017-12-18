import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isFavorite:boolean = true;


  changed(isFavorite){
    console.log("favorite changed to ",isFavorite);
  }
}
