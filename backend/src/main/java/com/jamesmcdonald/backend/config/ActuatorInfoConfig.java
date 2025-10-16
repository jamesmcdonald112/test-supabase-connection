package com.jamesmcdonald.backend.config;

import org.springframework.boot.actuate.info.InfoContributor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ActuatorInfoConfig {

    @Bean
    public InfoContributor testInfoContributor() {
        return builder -> builder.withDetail("status", "working");
    }
}