package com.example.demo.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * AJAX请求跨域
 * @author Mr.W
 * @time 2018-08-13
 */
@Configuration
public class WebConfig implements WebMvcConfigurer {
    static final String ORIGINS[] = new String[]{"GET", "POST", "PUT", "DELETE"};

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**").allowedOrigins("*").allowCredentials(false).allowedMethods(ORIGINS).maxAge(3600);
    }
}