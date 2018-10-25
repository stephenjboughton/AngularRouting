import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-list',
  template: `
    <h2>Departments</h2>
    <ul *ngFor="let department of departments">
      <li>{{department.id}}. {{department.name}}</li>
      </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  public departments = [
    {"id": 1, "name": "Development"},
    {"id": 2, "name": "Project Management"},
    {"id": 3, "name": "QA"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
