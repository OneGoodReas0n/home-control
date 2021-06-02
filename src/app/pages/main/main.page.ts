import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onItemLongPress(e){
    const value = e.value;
    console.log(value);
    console.log('Clicked');
  }

}
