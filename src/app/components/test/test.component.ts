import { Component } from '@angular/core';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less']
})
export class TestComponent {

data = [
  {id:1, name:"Angular"},
  {id:2, name:"React"},
  {id:3, name:"Vue"},
  {id:4, name:"Bootstrap"},
  {id:5, name:"Foundation"},
]


searchText = '';

  timer!: any;
  searchControl!: any;

  getData() {
    this.searchControl.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(console.log)
  }

  sendData(val: any) {
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      console.log(val.target.value);
    }, 2000)
  }


}
