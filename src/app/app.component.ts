import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fruit = '';
  fruitArray = ['https://cdn0.iconfinder.com/data/icons/fruits/128/Banana.png','https://cdn0.iconfinder.com/data/icons/fruits/128/Apple.png', 'https://cdn0.iconfinder.com/data/icons/fruits/128/Mango.png'];


  addFruitPic(newFruit: string) {
    console.log('new fruit: ', this.fruit)
    console.log('fruitArray: ', this.fruitArray)
    this.fruit = 'https://cdn0.iconfinder.com/data/icons/fruits/128/'+newFruit+'.png';
    this.fruitArray.unshift(this.fruit);
  }
  str = 'Mississippi River';
  replaceLetter(newLetter: string) {
    const re = new RegExp(newLetter, 'gi');
    let stringy = '';
    stringy = this.str.replace(re, '');
    this.str = stringy;
  }
}
