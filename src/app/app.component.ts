import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ver:boolean= true;
  
  mostrar():void{
    if(this.ver)
      this.ver=false
    else
      this.ver=true
  }

}
