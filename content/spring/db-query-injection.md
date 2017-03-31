---
title: DB Query Injection
contexts:
- spring
- hibernate
type: practice
threat: injecion
---

## Bad Practice

Hibernate somewhat abstracts us from the database layer...

But HQL is still vulnerable to injection attacks

{{< badcode java >}}
session.createQuery("from Foo f where f.name = " + name);
{{< /badcode >}}

## Good Practice

Use named parameters to safely combine user input with a query

{{< goodcode java >}}
Query query = session.createQuery("from Foo f where f.name = :name");

query.setParameter("name", name)
{{< /goodcode >}}

Or, even better, we can use the Criteria API

{{< goodcode java 4 >}}
CriteriaQuery<Foo> criteria = builder.createQuery(Foo.class);
Root<Foo> root = criteria.from(Foo.class);
criteria.select(root);
criteria.where(builder.equal(root.get(Foo_.name), "Bar" ));
{{< /goodcode >}}
