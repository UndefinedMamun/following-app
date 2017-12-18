import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-optional-interpolation',
  templateUrl: './optional-interpolation.component.html',
  styleUrls: ['./optional-interpolation.component.css']
})
export class OptionalInterpolationComponent implements OnInit {
  
  accounts = {
    id:2,
    name: "Mamun",
    //make options optional to check
    options: {
      withdraw: true,
      card: false
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
