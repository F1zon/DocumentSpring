package com.example.demo.interfaces;

import java.util.List;
import org.mapstruct.Mapper;

import com.example.demo.Dto.DockumentDto;
import com.example.demo.model.DocumentModel;

@Mapper(componentModel = "spring")
public interface DockMapper {
    DocumentModel dtoToModel(DockumentDto dockumentDto);

    DockumentDto modelToDto(DocumentModel documentModel);

    List<DockumentDto> toListDto(List<DocumentModel> docks);
}
