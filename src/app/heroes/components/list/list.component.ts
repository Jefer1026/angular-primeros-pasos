import {Component} from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public deleteHero?:string;
  heroNames: string[] = ['Spiderman', 'Iroman', 'Hulk', 'She Hulk', 'Thorn'];

  removeLastHero(): void {
    this.deleteHero = this.heroNames.pop();
  }
}
