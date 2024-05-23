package com.example.demo.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DockumentDto {
    private Long id;
    private String view;
    private String date;
    private String description;
    private String patient;
    private String state;
}
