package com.jamesmcdonald.backend.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record UserDTO(
        Long id,
        @NotBlank(message = "Name is required") String name,
        @Email(message = "Email must be valid") String email
) {}