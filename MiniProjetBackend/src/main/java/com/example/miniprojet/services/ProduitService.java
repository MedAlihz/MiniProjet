package com.example.miniprojet.services;

import com.example.miniprojet.entities.Produit;
import com.example.miniprojet.interfaces.IProduitService;
import com.example.miniprojet.repositories.ProduitRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@AllArgsConstructor
@Service
@Slf4j
public class ProduitService implements IProduitService {
    @Autowired
    ProduitRepository produitRepository;
    @Override
    public Produit addProduit(Produit f) {
        return produitRepository.save(f);
    }

    @Override
    public Produit updateProduit(Produit f) {
        return produitRepository.save(f);
    }

    @Override
    public void removeProduit(Integer IdProduit) {
        produitRepository.deleteById(IdProduit);

    }

    @Override
    public List<Produit> findProduit() {
        return produitRepository.findAll();
    }

    @Override
    public List<Produit> findProduitByNom(String nom) {
        List<Produit> produits = produitRepository.findAll();
        List<Produit> matchingProduits = new ArrayList<>();

        for (Produit produit : produits) {
            if (produit.getNom().equals(nom)) {
                matchingProduits.add(produit);
            }
        }

        return matchingProduits;
    }
}
