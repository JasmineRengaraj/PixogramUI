import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private router: Router,private httpObj: HttpClient) { }


username: string='';
password: string='';

  ngOnInit(): void {
  }


 login() : void {
     let httpHeaders = new HttpHeaders({'Content-Type' : 'application/json','Cache-Control': 'no-cache'});
       let options = {headers: httpHeaders};
         this.httpObj.post("http://localhost:8086/authenticate",
         {
           "username" : this.username,
           "password" : this.password
         },options).subscribe({
                           next: data => {
                              console.log(data)
                              this.router.navigate(["mymedia"]);
                           },
                           error: error => {
                              console.error('There was an error!', error);
                              alert("Invalid Credentials!")
                           }
                       });




}
 register() : void {
      this.router.navigate(["register"]);
   }
}
