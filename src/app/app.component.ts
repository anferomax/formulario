import { Component, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Pipe({ name: 'textSummary' })

export class AppComponent implements PipeTransform 
{
  transform( value: any, args?: any): any{
    if(!value)
    return '';

    const limit = args || 10;

    return (value.length <= limit ) ? value : value.substr(0,limit) + '...';
  }
  title = 'form';
}
