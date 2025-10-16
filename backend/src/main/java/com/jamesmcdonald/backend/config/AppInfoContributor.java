package com.jamesmcdonald.backend.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.actuate.info.Info;
import org.springframework.boot.actuate.info.InfoContributor;
import org.springframework.stereotype.Component;

@Component
public class AppInfoContributor implements InfoContributor {

    @Value("${spring.profiles.active:default}")
    private String activeProfile;

    @Value("${spring.datasource.url:unknown}")
    private String datasourceUrl;

    @Override
    public void contribute(Info.Builder builder) {
        builder.withDetail("profile", activeProfile)
                .withDetail("datasource", datasourceUrl);
    }
}