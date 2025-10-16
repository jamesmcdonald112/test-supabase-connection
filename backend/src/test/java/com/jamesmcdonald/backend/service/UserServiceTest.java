package com.jamesmcdonald.backend.service;

import com.jamesmcdonald.backend.dto.UserDTO;
import com.jamesmcdonald.backend.mapper.UserMapper;
import com.jamesmcdonald.backend.model.User;
import com.jamesmcdonald.backend.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;

class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @BeforeEach
    void setup() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void createUser_ShouldSaveAndReturnDTO() {
        // Arrange
        UserDTO dto = new UserDTO(null, "Alice", "alice@example.com");
        User mockUser = UserMapper.toEntity(dto);
        mockUser.setId(1L);

        when(userRepository.save(any(User.class))).thenReturn(mockUser);

        // Act
        UserDTO saved = userService.createUser(dto);

        // Assert
        assertThat(saved.id()).isEqualTo(1L);
        assertThat(saved.name()).isEqualTo("Alice");
        assertThat(saved.email()).isEqualTo("alice@example.com");

        ArgumentCaptor<User> captor = ArgumentCaptor.forClass(User.class);
        verify(userRepository, times(1)).save(captor.capture());
        assertThat(captor.getValue().getName()).isEqualTo("Alice");
    }

    @Test
    void getAllUsers_ShouldReturnMappedDTOs() {
        User user1 = new User(1L, "Alice", "alice@example.com");
        User user2 = new User(2L, "Bob", "bob@example.com");

        when(userRepository.findAll()).thenReturn(List.of(user1, user2));

        List<UserDTO> result = userService.getAllUsers();

        assertThat(result).hasSize(2);
        assertThat(result.get(0).name()).isEqualTo("Alice");
        assertThat(result.get(1).email()).isEqualTo("bob@example.com");
    }
}