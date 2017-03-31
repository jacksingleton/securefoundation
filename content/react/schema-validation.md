---
title: Schema Validation
contexts:
- react
threat: injection
type: practice
---

## Good Practice

Schema validation tools make it easy to validate types as well as business rules.

{{< goodcode js >}}
var ajv = new Ajv;
var schema = {
  "properties": {
    "foo": { "type": "number" },
    "bar": { "type": "string" }
  }
};
var validate = ajv.compile(schema);

console.log(validate({ "foo": 0, "bar": "1" })); // true
console.log(validate({ "foo": { "surprise": 1 } })); // false
{{< /goodcode >}}

https://github.com/epoberezkin/ajv
