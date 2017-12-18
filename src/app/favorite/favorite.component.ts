import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  
  @Input('is-favorite') isFavorite = true;
  @Output() change = new EventEmitter();
  constructor() { }
  
  onClick(){
    this.isFavorite = !this.isFavorite;
    this.change.emit(this.isFavorite);

  }

  ngOnInit() {
  }

}
