import { Component } from '@angular/core';
import { PersonaRegistroComponent } from "../persona-registro-component/persona-registro-component";

@Component({
  selector: 'app-persona-component',
  imports: [PersonaRegistroComponent],
  templateUrl: './persona-component.html',
  styleUrl: './persona-component.css',
})
export class PersonaComponent {

}
