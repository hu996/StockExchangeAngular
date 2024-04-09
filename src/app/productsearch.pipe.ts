import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productsearch'
})
export class ProductsearchPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
