package com.jamesmcdonald.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Value;
import java.util.Map;

@RestController
public class HealthController {

    @Value("${spring.datasource.url:unknown}")
    private String datasourceUrl;

    @Value("${spring.profiles.active:unknown}")
    private String activeProfile;

    @GetMapping("/health")
    public Map<String, String> health() {
        return Map.of(
            "status", "OK",
            "profile", activeProfile,
            "datasource", datasourceUrl
        );
    }
}