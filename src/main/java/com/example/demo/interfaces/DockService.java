package com.example.demo.interfaces;

import java.util.List;

import com.example.demo.Dto.DockumentDto;

public interface DockService {
    List<DockumentDto> findAll();
    DockumentDto findById(Long id);
    DockumentDto save(DockumentDto dockumentDto);
    void deleteById(Long id);
}
