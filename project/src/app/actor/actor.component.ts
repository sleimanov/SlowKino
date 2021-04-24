import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {

  keanu:string = "assets/images/keanu.jpg"
  keanu1:string = "assets/images/keanu1.jpg"
  keanu2:string = "assets/images/keanu2.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
