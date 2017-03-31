---
title: Custom Auth Logic
contexts:
- spring
type: practice
threat: broken-auth
---

## Bad Practice

Auth logic is surprisingly easy to mess up

We should not be writing it ourselves!

{{< badcode java 3 >}}
public class SessionInterceptor extends ... {
    public boolean preHandle(...) {
        return someCustomAuthCode(...);
    }
}
{{< /badcode >}}

## Good Practice

Spring Security is a widely used (and tested) auth framework

Define your auth logic declaratively 

Require auth by default

{{< goodcode text >}}
compile 'org.springframework.security:spring-security-web:4'
{{< /goodcode >}}

{{< goodcode java >}}
protected void configure(HttpSecurity http) throws Exception {
	http.authorizeRequests()
		.antMatchers("/resources/**", "/signup").permitAll()
		.antMatchers("/admin/**").hasRole("ADMIN");
}
{{< /goodcode >}}

