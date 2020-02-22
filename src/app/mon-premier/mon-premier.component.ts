import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mon-premier',
  templateUrl: './mon-premier.component.html',
  styleUrls: ['./mon-premier.component.scss']
})
export class MonPremierComponent implements OnInit {
  @Input() optionsContent: string;
  @Input() optionsTitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}
