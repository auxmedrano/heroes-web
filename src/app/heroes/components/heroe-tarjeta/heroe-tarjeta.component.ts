import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [`
  mat-card {
    margin-top: 20px
  }
`]
})
export class HeroeTarjetaComponent implements OnInit{
  

  @Input() heroe!: Heroe;

  publishers = ['Marvel Comics', 'DC Comics'];

  publisher = "";

  ngOnInit(): void {
    this.publisher = this.getPublisher(this.heroe.publisherId);
  }

 getPublisher(id: number): string{
  return this.publishers[id-1];
}

}

