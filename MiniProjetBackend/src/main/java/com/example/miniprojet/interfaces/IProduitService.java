package com.example.miniprojet.interfaces;

import com.example.miniprojet.entities.Produit;

import java.util.List;

public interface IProduitService {
    public Produit addProduit(Produit f);
    public Produit updateProduit(Produit f);
    public void removeProduit(Integer IdProduit);

    public List<Produit> findProduit();
    public List<Produit> findProduitByNom(String nom) ;
}
