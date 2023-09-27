import {Component} from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'Iroman';
  public age: number = 45;

  get capitalizedName(): string {
    return 'hola mundo'
  }

  getHeroDescription(): string {

    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Batman';

  }

  changeAge(): void {
    this.age = 25;
  }

  resetChange():void{
    this.name  ="Iroman";
    this.age = 45;
  }

}
