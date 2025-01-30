import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carregar-mais',
  templateUrl: './carregar-mais.component.html',
  styleUrls: ['./carregar-mais.component.css']
})
export class CarregarMaisComponent implements OnInit {

  @Input() HaMaisArquivos:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
