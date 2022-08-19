import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
})
export class HighlightPipe implements PipeTransform {
  transform(name: string, searchText: string): string {
    if (searchText.length === 0) {
      console.log('name: ', name);
      return name;
    }

    const regExp = new RegExp(searchText, 'ig');
    console.log('regExp: ', regExp);
    return name.replace(regExp, (match) => {
      console.log('match: ', match);
      return `<span class="highlight-text">${match}</span>`;
    });
  }
}
/*const search = new RegExp(filter, 'ig');
    console.log('search: ', search);
    return value.replace(search, (match) => {
      console.log('match: ', match);
      return `<span class="highlight-text">${match}</span>`;
    });
*/
