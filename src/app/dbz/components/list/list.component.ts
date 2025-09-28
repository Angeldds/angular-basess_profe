import { Component,  Input,Output,EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.inferface';


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  //personaje temporal
  //tarea
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10,
    },
  ];


  //tarea emitimos dato tipo number
  //nombre onDeleteCharacter visible al mundo exterior
  @Output()
  public onDelete:EventEmitter<number> = new EventEmitter();

//creo un método para mandar
  public onDeleteCharacter(index:number):void{
    this.onDelete.emit(index);
  }


//el emiterCharacter es visible dentro de carpeta list
  public emiterCharacter(indexs:number):void{
    console.log(indexs);
  }
}


