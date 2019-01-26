import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loopingCustom'
})
export class LoopingCustomPipe implements PipeTransform {

  response='';
  transform(value: string, index:number): string {
    if(index%2==0){
      this.response=value +' Good';
    }
    else{
      this.response=value +' Ok';
    }
    return this.response;
  }

}
