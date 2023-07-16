package com.example.miniprojet.repositories;

import com.example.miniprojet.entities.Produit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProduitRepository   extends JpaRepository<Produit, Integer> {
}
