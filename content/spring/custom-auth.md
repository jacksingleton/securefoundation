---
title: Custom Auth Logic
contexts: "spring"
types: "practice"
threats: "broken-auth"
---

## Bad Practice

Auth logic is surprisingly easy to mess up

We should not be writing it ourselves!

```java:3
public class SessionInterceptor extends ... {
    public boolean preHandle(...) {
        return someCustomAuthCode(...);
    }
}
```

## Good Practice

Spring Security is a widely used (and tested) auth framework

Define your auth logic declaratively 

Require auth by default

```gradle
compile 'org.springframework.security:spring-security-web:4'
```

```java
protected void configure(HttpSecurity http) throws Exception {
	http.authorizeRequests()
		.antMatchers("/resources/**", "/signup").permitAll()
		.antMatchers("/admin/**").hasRole("ADMIN");
}
```

