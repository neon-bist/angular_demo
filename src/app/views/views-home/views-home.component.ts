import { Component } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent {
  stats = [
    {value: 100, label: 'Number of users'},
    {value: 92990, label: 'Revenue'},
    {value: 705, label: 'Satisfaction Score'},
  ]

  items = [
    {image: '/assets/images/logo1.png', title: 'Main Logo', description: 'This is main logo for the site.'},
    {image: '/assets/images/logo2.png', title: 'Secondary Logo', description: 'This logo should be used for marketing purposes.'},
  ]
}
