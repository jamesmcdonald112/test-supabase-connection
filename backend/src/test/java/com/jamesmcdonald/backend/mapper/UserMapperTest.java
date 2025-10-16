package com.jamesmcdonald.backend.mapper;

import com.jamesmcdonald.backend.dto.UserDTO;
import com.jamesmcdonald.backend.model.User;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

class UserMapperTest {

    @Test
    void shouldMapEntityToDTO() {
        // given
        User user = User.builder()
                .id(1L)
                .name("Alice")
                .email("alice@example.com")
                .build();

        // when
        UserDTO dto = UserMapper.toDTO(user);

        // then
        assertThat(dto.id()).isEqualTo(user.getId());
        assertThat(dto.name()).isEqualTo(user.getName());
        assertThat(dto.email()).isEqualTo(user.getEmail());
    }

    @Test
    void shouldMapDTOToEntity() {
        // given
        UserDTO dto = new UserDTO(2L, "Bob", "bob@example.com");

        // when
        User user = UserMapper.toEntity(dto);

        // then
        assertThat(user.getId()).isEqualTo(dto.id());
        assertThat(user.getName()).isEqualTo(dto.name());
        assertThat(user.getEmail()).isEqualTo(dto.email());
    }
}