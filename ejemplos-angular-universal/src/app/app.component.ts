import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  levels: Array<string> = [
    'rookie',
    'champion',
    'mega',
    'armor',
    'ultimate'
  ]
  nombreUsuario$!: Observable<string>

  constructor(private tokenService: TokenService, private title: Title, private meta: Meta) {
    this.title.setTitle('Lista Digimons')
    this.meta.addTag({name: 'keywords', content: 'digimons, digimon, api digimon'})
  }

  ngOnInit() {
    this.nombreUsuario$ = this.tokenService.payloadEvent$
  }
}
