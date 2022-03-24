import { Component, OnInit } from '@angular/core';

interface componentes {
 icon: string;
 name: string; 
 redirectTo: string;
}


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes: componentes[] = [

    {

      icon: 'ellipsis-horizontal-outline',
      name: 'presentacion personal',
      redirectTo:'/presentacionpersonal'
       },
  
       {
  
        icon: 'ellipsis-horizontal-outline',
        name: 'lugar de origen',
        redirectTo:'/lugardeorigen'
         },
  
         {
  
          icon: 'ellipsis-horizontal-outline',
          name: 'Mis Metas personales',
          redirectTo:'/mismetaspersonales'
           }



  ];

  constructor() { }

  ngOnInit() {
  }

}
