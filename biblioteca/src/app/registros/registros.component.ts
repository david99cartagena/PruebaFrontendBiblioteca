import { Component } from '@angular/core';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent {
  
  public userid!: number;
  public id!: number;
  public title: string = '';
  public body: string = '';

}
