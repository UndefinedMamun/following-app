import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  names=[
    {id:1, name:"Sakkhor"},
    {id:2, name:"Mamun"},
    {id:3, name:"Bithy"},
    {id:4, name:"Sobuj"},
    {id:5, name:"Sagor"}
  ]

}
