import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'Dynamic title';
  number = 42;;
  arr = [1,2,3,4];
  obj = {a:1, b:2};

  inputValue = '';

  img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png';

  constructor() {
    setTimeout(()=>{
      console.log(this.number++);
      this.img = 'https://justup.com.ua/wp-content/themes/justup/img/logos/12.png';
    }, 5000)
  }
  onInput(event?: any){
    console.log(event)
    this.inputValue  = event.target.value;
  }
  onClick(){
    this.inputValue = "Click"
  }
}
