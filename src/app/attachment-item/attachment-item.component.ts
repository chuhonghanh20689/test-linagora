import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-attachment-item]',
  templateUrl: './attachment-item.component.html',
  styleUrls: ['./attachment-item.component.css']
})
export class AttachmentItemComponent implements OnInit {
  @Input() attachment; 
  @Input() index;
  
  constructor() { }
  getExtension () {
    const src: string = this.attachment.src;
    const indexOfDot = src.indexOf('.');
    return src.substring(indexOfDot  + 1);
  }

  ngOnInit() {
    
  }

}
