import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deed',
  templateUrl: './deed.component.html',
  styleUrls: ['./deed.component.css']
})
export class DeedComponent implements OnInit {

  toggle = true;
  constructor() { }

  ngOnInit(): void {
  }
submit(){
  this.toggle = !this.toggle;

}
}
