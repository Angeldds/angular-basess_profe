import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.inferface';

import { v4 as uuidv4 } from 'uuid'; //esto es una función ejecuta codigos únicos

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    {
      id: uuidv4(),
      name: 'kril',
      power: 1000,
    },
    {
      id: uuidv4(),
      name: 'goku',
      power: 9500,
    },
    {
      id: uuidv4(),
      name: 'vegeta',
      power: 7500,
    },
  ];

  public addCharacter(character: Character): void {


  const newCharacter:Character = {id:uuidv4(),...character};

    this.characters.push(newCharacter);
    console.log('main page');
    console.log(character);
  }

  //recibimos algo de tipo algo (xxx:xxx)

  /*public onDeleteCharacter(index: number) {
    this.characters.splice(index, 1);
  }*/

    deleteCharacterById(id:String){
      this.characters = this.characters.filter(character => character.id !==id);
    }
}
