import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(private headerService : HeaderService)
  {
  }

    name : string =  "fake name";
    titulo : string = "fake titulo";
    objetivo : string = "fake obj";
    foto : string =  "fake foto";
    email : string = "fake email";
    celular   : string = "fake num";
    ubicacion: string = "fake city";
    redsocial: string = "fake social";

    ngOnInit() : void {
      this.headerService.getHeader()
      .subscribe((data: any ) =>  {
        console.log(data);
        // alert(data);
        this.name = data.name;
        this.titulo = data.titulo;
        this.objetivo = data.Objetivo;
        this.foto = data.foto;
        this.email = data.email;
        this.celular = data.celular;
        this.ubicacion = data.ubicacion;
        this.redsocial = data.redsocial
      });
    }
}