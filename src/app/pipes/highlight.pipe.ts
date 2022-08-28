import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
})
export class HighlightPipe implements PipeTransform {
  transform(name: string, searchText: string): string {
    if (searchText.length === 0) {
      return name;
    }

    const regExp = new RegExp(searchText, 'ig');
    return name.replace(regExp, (match) => {
      return `<span class="highlight-text">${match}</span>`;
    });
  }
}
