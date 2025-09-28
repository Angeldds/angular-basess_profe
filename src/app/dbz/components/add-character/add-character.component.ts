import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.inferface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent {

  @Output()
  ///nombre visual por fuera onNewCaracter
  public onNewCaracter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: 'default',
    power: 0,
  };

  emitCharacter(): void {



    if(this.character.name.length ===0) return;
    this.onNewCaracter.emit(this.character);


    console.log(this.character);
    this.character = {name:'', power:0};
  }
}
