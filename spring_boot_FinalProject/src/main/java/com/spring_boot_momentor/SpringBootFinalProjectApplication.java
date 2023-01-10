package com.spring_boot_momentor;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.spring_boot_momentor"})
@MapperScan(basePackages = {"com.spring_boot_momentor"})
public class SpringBootFinalProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootFinalProjectApplication.class, args);
	}

}
