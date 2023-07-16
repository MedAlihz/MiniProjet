
import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Produit } from '../Models/Produit';
import { ProduitService } from '../produit.service';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
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

  ) {}
  AjouterProduit() {
    let resp = this.service.AjouterProduit(this.produit);
    resp.subscribe((data) => {
      this.message = data;
      window.location.reload(); // Reload the page after adding the product

    });
  }
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
        window.location.reload(); // Reload the page after adding the product

      },
      (error) => {
        console.log('Error', error);
      }
    );
  }
  public MAJ(produit: Produit) {
    this.produit = produit;
  }
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
