import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  options = [
    {
      title: 'Developpeur',
      content: 'Bienvenu cher developpeur! Lorem Ipsum dolor sit amet...'
    }
  ]
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Frigo',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];
  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  onAllumer() {
    this.options = [
      {
        title: 'Developpeur',
        content: 'Bienvenu cher developpeur! Lorem Ipsum dolor sit amet...'
      }
    ]
    this.appareils = [
      {
        name: 'Machine à laver',
        status: 'allumé'
      },
      {
        name: 'Frigo',
        status: 'allumé'
      },
      {
        name: 'Ordinateur',
        status: 'allumé'
      }
      ];
  }
  onEteint() {
    this.options = [
      {
        title: 'Client',
        content: 'Bienvenu cher client! Lorem Ipsum dolor sit amet...'
      }
    ]
      this.appareils = [
        {
          name: 'Machine à laver',
          status: 'éteint'
        },
        {
          name: 'Frigo',
          status: 'éteint'
        },
        {
          name: 'Ordinateur',
          status: 'éteint'
        }
      ];
    }
}


