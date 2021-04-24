import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  imageLogoProfile:string = "assets/images/avatar.png"

  constructor() { }

  ngOnInit(): void {
  }

}
