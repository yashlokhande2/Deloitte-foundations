package com.deloitte.demomvc.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @Value("${user}")
    private String user;

    @GetMapping("/")
    public String helloWorld() {
        return "Hello " + user + ", Welome to Spring sessions.";
    }
}
