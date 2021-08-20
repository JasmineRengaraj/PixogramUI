import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType,HttpHeaders } from  '@angular/common/http';
import { GlobalsService } from '../globals.service';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-mymedia',
  templateUrl: './mymedia.component.html',
  styleUrls: ['./mymedia.component.css']
})


export class MymediaComponent implements OnInit {
slides = [
      {'image': 'https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg'},
      {'image': 'https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg'},
      {'image': 'https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg'},
      {'image': 'https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg'},
      {'image': 'https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg'}
    ];
// API url
  SERVER_URL = "http://localhost:8086/media/user/1"
  public jwttoken: string = 'Bearer '+ this.globals.jwttoken;
   media: any = [];
  constructor(private httpClient: HttpClient,private globals: GlobalsService) { }


  ngOnInit(): void {
  console.log(this.jwttoken);
  const httpHeaders= new HttpHeaders()
    .set('Access-Control-Allow-Origin', '*');
    //.set('Authorization',this.jwttoken);
     let options = {headers: httpHeaders};

    this.httpClient.get(this.SERVER_URL,
             options).subscribe({
                               next: data => {
                                  console.log(data)
                                  this.media=data

                                },
                               error: error => {
                                  console.error('There was an error!', error);
                                  alert("Invalid Read")
                               }
                           });
  }

}
