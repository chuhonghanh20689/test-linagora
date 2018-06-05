import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  attachments = [
    {
      name: 'Mp3_1',
      src: 'assets/mp3/mp3_1.mp3',
      size: 129203 // in bytes
    },
    {
      name: 'movie 1',
      src: 'assets/mp4/movie.mp4',
      size: 129203 // in bytes
    },
    {
      name: '_ChuHongHanh_CV_developer pdf',
      src: 'assets/pdf/_ChuHongHanh_CV_developer.pdf',
      size: 129203 // in bytes
    },
    {
      name: '_ChuHongHanh_CV_developer docx',
      src: 'assets/docx/_ChuHongHanh_CV_developer.docx',
      size: 129203 // in bytes
    },
    {
      name: 'salad10',
      src: 'assets/jpg/salad10.jpg',
      size: 129203 // in bytes
    },
    {
      name: 'nife&spoon',
      src: 'assets/png/nife&spoon.png',
      size: 129203 // in bytes
    }
      
  ];
  
  ngOnInit() {
    setTimeout(() => {
      $('.imgShow').imageview();
    }, 1000);
  }
}
