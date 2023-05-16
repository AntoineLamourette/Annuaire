import { Injectable } from '@angular/core';
import { ListeDetailClientComponent } from './liste-detail-client/liste-detail-client.component';

@Injectable({
  providedIn: 'root'
})
export class ServiceAnnuaireService {

  

  public tabClient: ListeDetailClientComponent[]= [
    { id:1, 
      nom:"alpha", 
      prenom:"gamma",
      adresse:"22 rue Obélix",
      telephone:"06 00 00 00 00",
      photo:"",
      client: true},

      { id:2, 
        nom:"beta", 
         
      prenom:"upsilon",
      adresse:"147 rue Astérix",
      telephone:"06 33 80 88 00",
      photo:"",
      client: true},

        
        ];

        listerClient(): ListeDetailClientComponent[]{
            
          
          return this.tabClient;
        }
  


}
