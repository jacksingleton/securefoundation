---
title: Object Injection
contexts: react
threats: injection
types: practice
---

## Bad Practice

What happens if userName is not a string?

```jsx:6
class WelcomeHeading extends React.Component {
  render() {
    var userData = JSON.parse(this.props.untrustedData);
    return (
      <div className="welcomeHeading">
        Welcome, {userData['userName']}
      </div>
    )
  }
});
```

It could be almost anything!

Including an object, that under some conditions could bypass react’s encoding and lead to an XSS vulnerability!

http://danlec.com/blog/xss-via-a-spoofed-react-element

React has since been updated with some mitigations for this, but they are not complete.

These attacks could also be made against other libraries, or even other services called by the application.

## Good Practice

Validate the type of variables that come from untrusted input

```jsx:4
class WelcomeHeading extends React.Component {
  render() {
    var userData = JSON.parse(this.props.untrustedData);
    if (!validate(userData)) return handleValidationError();
    return (
      <div className="welcomeHeading">
        Welcome, {userData['userName']}
      </div>
    )
  }
});
```

Validate types that come from untrusted json input or query parameters.

Where does `validate()` come from? For JSON, consider using a json schema library like [AJV](https://github.com/epoberezkin/ajv)
