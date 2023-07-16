import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Produit } from '../Models/Produit';
import { ProduitService } from '../produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent  implements OnInit {
  produit = new Produit(0,"",0,0);
  listproduits: Produit[] = [];
  message: any;
  searchQuery: string = '';
  ngOnInit(): void {
    this.AfficherProduits();

  }
  constructor(
    private service: ProduitService,
    private location: Location,
    private renderer: Renderer2,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  AfficherProduits(): void {
    this.service.AfficherProduits().subscribe((data) => {
      this.listproduits = data as Produit[];
    });
  }
  SupprimerProduit(idProduit: number) {
    this.service.SupprimerProduit(idProduit).subscribe(
      (response) => {
        console.log('Produit Supprimé.');
        // Update the feedbackList after successful deletion
        this.AfficherProduits();
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }
  /*ModifierProduit() {
    this.service.ModifierProduit(this.produit).subscribe(
      (data) => {
        this.message = data;
        console.log('Product modified successfully:', data);
      },
      (error) => {
        console.error('Error modifying product:', error);
      }
    );
  }
  onUpdate(Produit: Produit) {
    // Navigate to the TransportComponent and pass the transport as a parameter
    this.router.navigate(['Produit/AjouterProduit'], { state: { Produit } });
  }*/
  RechercherProduit(): void {
    if (this.searchQuery.trim() !== '') {
      this.service.RechercheProduit(this.searchQuery).subscribe((data) => {
        this.listproduits = data as Produit[];
      });
    } else {
      this.AfficherProduits();
    }
  
}
}