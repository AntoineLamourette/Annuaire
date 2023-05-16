import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-detail-client',
  templateUrl: './liste-detail-client.component.html',
  styleUrls: ['./liste-detail-client.component.css']
})
export class ListeDetailClientComponent {

  
  

  id!: number;
  nom!:string;
  prenom!: String;
  adresse!: string;
  telephone!: string;
  photo!: string;
  client!: boolean
  

}
