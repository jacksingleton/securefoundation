---
title: String Template Injection
contexts:
- react
threat: injection
type: practice
---

## Bad Practice

‘${}’ in string templates are not safe like ‘{}’ in JSX!

```jsx:5
app.get('/', function(req, res) {
  var template = `
    <html>
      <body>
        <header>Hi, ${req.query.user}</header>
      </body>
    </html>
  `;
  res.send(template);
});
```

No escaping is done when using string templates 

This is especially relevent when using server side rendering with express

## Good Practice

JSX will protect us against XSS attacks, even on the server

```jsx:5
app.get('/', function(req, res) {
  var template = (
    <html>
      <body>
        <header>Hi, {req.query.user}</header>
      </body>
    </html>
  );
  res.send(ReactDOMServer.renderToString(template));
});
```

