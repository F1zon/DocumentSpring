package com.example.demo.interfaces;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.DocumentModel;

public interface DockRepositories extends JpaRepository<DocumentModel, Long> {
    
}
