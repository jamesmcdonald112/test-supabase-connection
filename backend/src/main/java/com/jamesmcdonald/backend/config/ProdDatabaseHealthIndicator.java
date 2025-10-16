package com.jamesmcdonald.backend.config;

import org.springframework.boot.actuate.health.Health;
import org.springframework.boot.actuate.health.HealthIndicator;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Component
@Profile("prod")
public class ProdDatabaseHealthIndicator implements HealthIndicator {

    @Override
    public Health health() {
        return Health.up()
                .withDetail("database", "PostgreSQL (Docker)")
                .withDetail("url", "jdbc:postgresql://db:5432/appdb")
                .build();
    }
}