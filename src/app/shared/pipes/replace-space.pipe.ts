import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceSpace'
})
export class ReplaceSpacePipe implements PipeTransform {

  transform(value:string, args: string): string {
    console.log(value);
    value=value.split(' ').join(args).toLocaleLowerCase();
    return value;
  }

}
