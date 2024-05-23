package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.Dto.DockumentDto;
import com.example.demo.interfaces.DockMapper;
import com.example.demo.interfaces.DockRepositories;
import com.example.demo.interfaces.DockService;
import com.example.demo.model.DocumentModel;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class DockServiceImpl implements DockService {
    private final DockRepositories dockRepositories;
    private final DockMapper dockMapper;

    @Override
    @Transactional
    public void deleteById(Long id) {
        var dock = getById(id);
        dockRepositories.delete(dock);
    }

    @Override
    public List<DockumentDto> findAll() {
        return dockMapper.toListDto(dockRepositories.findAll());
    }
    
    @Override
    public DockumentDto findById(Long id) {
        return Optional.of(getById(id)).map(dockMapper::modelToDto).get();
    }

    @Override
    @Transactional
    public DockumentDto save(DockumentDto dockumentDto) {
        return dockMapper.modelToDto(dockRepositories.save(
            dockMapper.dtoToModel(dockumentDto)
        ));
    }

    private DocumentModel getById(Long id) {
        return dockRepositories.findById(id)
            .orElseThrow(() -> new RuntimeException(
                "Dockument with id: " + id + " not found"
            ));
    }

    
}
