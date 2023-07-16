package com.example.miniprojet.controllers;

import com.example.miniprojet.entities.Produit;
import com.example.miniprojet.interfaces.IProduitService;
import com.example.miniprojet.services.ProduitService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@CrossOrigin(origins = "*")
@RequestMapping("/Produit")
public class ProduitController {
    @Autowired
    IProduitService produitService ;
    @PostMapping("/AjouterProduit")
    public Produit addProduit(@RequestBody Produit P) {
        Produit produit = produitService.addProduit(P);
        return produit;
    }


    @PutMapping("/ModifierProduit")
    public Produit updateProduit(@RequestBody Produit P) {
        Produit p = produitService.updateProduit(P);
        return p;
    }

    @DeleteMapping("/SupprimerProduit/{idProduit}")
    public void removeProduit(@PathVariable("idProduit") Integer idProduit) {

        produitService.removeProduit(idProduit);
    }



    @GetMapping("/AffichageProduit")
    public List<Produit> AfficherProduits() {

        List<Produit> listProduits = produitService.findProduit();
        log.info(listProduits.toString());
        return listProduits;
    }

    @GetMapping("/RechercheProduit")

    public List<Produit> RechercheProduit(@RequestParam String Nom) {
        List<Produit> list = produitService.findProduitByNom(Nom);
        log.info(list.toString());

        return list;
    }
}

