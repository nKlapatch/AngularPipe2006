import { Component, OnInit } from '@angular/core';
import { PokeService } from '../services/poke.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private pokes: PokeService, private router: Router) { }

  swapView() {
    this.router.navigate(['/superheroes']);
  }

  pokemonButton1(): void {
    console.log('welcome clicked');
    this.pokes.retrievePokemon().subscribe(
      response => {
        console.log(response);
        console.log(response['name']);
      }
    );
  }

  pokemonButton2(): void {
    this.pokes.retrievePokemon2().subscribe(
      response => {
        console.log(response);
        console.log(response.name);
        console.log(response.id);
        console.log(response.base_experience);
      }
    );
  }

  ngOnInit(): void {
  }

}
