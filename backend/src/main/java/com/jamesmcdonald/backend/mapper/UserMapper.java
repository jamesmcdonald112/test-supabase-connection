package com.jamesmcdonald.backend.mapper;

import com.jamesmcdonald.backend.dto.UserDTO;
import com.jamesmcdonald.backend.model.User;

public class UserMapper {

    public static UserDTO toDTO(User user) {
        return new UserDTO(user.getId(), user.getName(), user.getEmail());
    }

    public static User toEntity(UserDTO dto) {
        return User.builder()
                .id(dto.id())
                .name(dto.name())
                .email(dto.email())
                .build();
    }
}