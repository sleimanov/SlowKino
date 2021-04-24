import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { MovieService } from '../movie.service';
import { IAuthResponse } from '../models';


@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  username: string ='';
  password: string ='';
  logged: boolean = false;
  is_staff: boolean = false;


  constructor(private movieService: MovieService) { }

  ngOnInit() : void{
  }

  login(){

  }

  auth() : void {
    if (this.username !== '' && this.password !== '') {
      console.log("asd")
        this.movieService.auth1(this.username,this.password).then(res => {
        localStorage.setItem('token', res.token);
        console.log(res.is_staff);
        this.logged = true;
         this.is_staff = res.is_staff
      });
    }
  }

  /*logout(){
    this.provider.logout().then(res=>{
      localStorage.clear();
      this.logged = false;
      this.is_staff=false;
    })
  }*/

  /*signup(){
    this.signed=true;
      this.provider.signup(this.slogin,this.spassword,this.semail).then(res=>{
        this.provider.auth(this.slogin,this.spassword).then(r => {
          localStorage.setItem('token', r.token);
          this.logged = true;
      });
    });
  }*/

}
