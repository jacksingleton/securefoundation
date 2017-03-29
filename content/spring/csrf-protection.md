---
title: CSRF Protection
contexts:
- spring
threats: csrf
types: practice
---

## Bad Practice

Spring doesn't come with any built in
[CSRF](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF))
protection.

## Good Practice

But if we include [Spring Security](https://projects.spring.io/spring-security/), it will be enabled by default:

```gradle
compile 'org.springframework.security:spring-security-web:4'
```

Tokens will be added to any `<form:form>` tags:

```xml
<form:form action="/launchTheMissiles" method="post">
  <input type="submit" value="Panic!" />
</form:form>
```

## Gotcha

```xml
<form action="/launchTheMissiles" method="post">
  <input type="submit" value="Panic!" />
</form>
```

But tokens won’t be added to any plain HTML forms!

If we bypass `<form:form>` we need to include the csrf token manually:

```xml
<form action="/launchTheMissiles" method="post">
  <input type="submit" value="Panic!" />
  <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
</form>
```

## Gotcha

If you disable it, make sure you know what you are doing.

```xml
<http>
	<csrf disabled="true"/>
</http>
```



