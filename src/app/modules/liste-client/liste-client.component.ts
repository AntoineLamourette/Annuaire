import { Component, OnInit } from '@angular/core';
import { ListeDetailClientComponent } from '../liste-detail-client/liste-detail-client.component';
import { ServiceAnnuaireService } from '../service-annuaire.service';

@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrls: ['./liste-client.component.css']
})
export class ListeClientComponent implements OnInit  {

  constructor(private monService: ServiceAnnuaireService) {}

  public listeClient!: ListeDetailClientComponent[];

  

  ngOnInit(): void {

   this.listeClient = this.monService.listerClient();
        
  }
  

}


