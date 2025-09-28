import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.inferface';
 //esto es una función ejecuta codigos únicos

@Injectable({providedIn: 'root'})
export class DbzService{

  public characters:Character[]= [{

    name: 'kril',
    power: 1000
  },{

    name:'goku',
    power:9500
  },{

    name:'vegeta',
    power: 7500
  }];

  onNewCharacterr(character:Character):void {
    this.characters.push(character);
    console.log('main page');
    console.log(character);
  }

  //recibimos algo de tipo algo (xxx:xxx)
  public onDeleteCharacter(index:number){
    this.characters.splice(index,1);
  }


}
