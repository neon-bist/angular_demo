import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent {
  modalOpen = false;

  items = [
    {
      title: 'What is this for?',
      content: 'Accordion is used for showing collapsible info in the group.',
    },
    {
      title: 'Where to use this?',
      content: 'Use it in the proper place where you wnat to save space.',
    },
    {
      title: ' What kinds of dogs are there?',
      content:
        'There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.',
    },
  ];

  onClick = () => {
    this.modalOpen = !this.modalOpen;
  };
}
