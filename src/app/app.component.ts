import { Component } from '@angular/core';
import { ChatbotService } from './servicios/chatbot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ver:boolean= true;
  mensaje:string="";
  mensajes:any=["Hola como puedo ayudarte"];


  constructor(private servicioChatbot:ChatbotService) {
  }

  enviar():void{
    this.mensajes.push(this.mensaje)
    this.servicioChatbot.chat(this.mensaje).subscribe(
      (data)=>{
        this.mensajes.push(data.respuesta)
        this.mensaje="";
      },
      (err)=>{
        this.mensaje="";
      }
    );

  }


}
