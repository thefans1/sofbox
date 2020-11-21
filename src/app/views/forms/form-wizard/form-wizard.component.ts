import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-wizard',
  templateUrl: './form-wizard.component.html',
  styles: []
})
export class FormWizardComponent implements OnInit {

  public account = false;
  public personal = false;
  public image = false;
  public finish = false;
  public currentTab = 'a-form';
  constructor() { }

  ngOnInit() {
  }

}
