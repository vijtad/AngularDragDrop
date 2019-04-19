import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
/**
 * @title Drag&Drop
 */
@Component({
  selector: 'KeyTechExpression',
  templateUrl: 'KeyTechExpression.html',
  styleUrls: ['KeyTechExpression.css'],
})
export class KeyTechExpression {
  functions = [
    { operator : 'add', func: "add( <input size=35> , <input size=35> )", icon:"add" },
    { operator : 'subtract', func: "subtract( <input> , <input> )", icon : "remove" },
    { operator : 'foo', func: "foo( <input>,  <input> , <input> )" , icon : "3d_rotation" },
    { operator : 'doSomethingComplicated', func: "doSomethingComplicated( <input>)" , icon : "add_circle_outline" }
  ];

  expression = ["Drag and Drop expression here"];

  drop(event: CdkDragDrop<string[]>) {
    if(event.container.id == 'list-one')
    {
      this.expression[0] = this.functions[event.previousIndex].func;
    }
  }
}

