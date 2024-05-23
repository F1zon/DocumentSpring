package com.example.demo.controllers;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Dto.DockumentDto;
import com.example.demo.interfaces.DockService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/v1")
@RequiredArgsConstructor
public class DockumentController {
    private final DockService dockService;

    @GetMapping("/docks")
    public List<DockumentDto> allDocks() {
        return dockService.findAll();
    }

    @GetMapping("/dock/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<DockumentDto> getDock(@PathVariable Long id) {
        return ResponseEntity.ok().body(dockService.findById(id));
    }

    @PostMapping("/dock")
    public ResponseEntity<DockumentDto> createDock(@RequestBody DockumentDto dockumentDto) throws URISyntaxException {
        DockumentDto result = dockService.save(dockumentDto);
        return ResponseEntity.created(new URI("/api/v1/docks/" + result.getId())).body(result);
    }

    @PutMapping("/dock/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<DockumentDto> updateDock(@PathVariable Long id, @RequestBody DockumentDto dockumentDto) {
        return ResponseEntity.ok().body(dockService.save(dockumentDto));
    }

    @DeleteMapping("/book/{id}")
    public ResponseEntity<?> deleteDock(@PathVariable Long id) {
        dockService.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
