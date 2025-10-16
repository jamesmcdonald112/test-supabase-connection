package com.jamesmcdonald.backend.config;

import org.springframework.boot.actuate.health.Health;
import org.springframework.boot.actuate.health.HealthIndicator;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Component
@Profile("dev")
public class DevDatabaseHealthIndicator implements HealthIndicator {

    @Override
    public Health health() {
        // Custom info for local dev
        return Health.up()
                .withDetail("database", "H2 (file)")
                .withDetail("path", "./data/devdb")
                .build();
    }
}