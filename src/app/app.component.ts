import { collectExternalReferences } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title: string = 'ciao';
  title2: string = 'blabla';
  nome: string = ' ';
  // eta: number = 18;
  // condizione: boolean = true;
  // oggetto: {nome: string, eta: number};
  // array = [];
  // arrayOgg: [
  //   {nome: string, eta: number}
  // ];
  //qualsiasi: any; NON USARLO CHE CREA SOLO CASINI
  stampa: string = '';
  testo2: string = '';
  constructor()
  {
    setTimeout(() =>
    {
      this.nome = 'Max'
    }, 2000);
  }
  //fai attenzione alle parentesi!
    getClick(pippo: any)
    {
      //console.log('ciao');
      console.log (pippo);
    }

    getText(event: any)
    {
      console.log (event.target.value);
      // qua invece faccio il data binding dal component al template tramite l'interpolazione di stampa sul template
      this.stampa=event.target.value;
    }

    getData(input: any)
    {
      console.log(input.value);
    }
  }
