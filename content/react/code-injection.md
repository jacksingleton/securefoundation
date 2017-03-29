---
title: Code Injection
contexts:
- react
types: "practice"
threats: "injection"
---

## Bad Practice

<s>Eval</s> Evil

```jsx:3
class WelcomeHeading extends React.Component {
  render() {
    var userData = eval(this.props.untrustedData);
    var userName = userData['userName'];
    return (
      <div className="welcomeHeading">
        Welcome, {userName}
      </div>
    )
  }
});
```

Eval can technically be used to deserialize json… but don’t do it!

## Good Practice

JSON.parse should be used to deserialize JSON data

```jsx:3
class WelcomeHeading extends React.Component {
  render() {
    var userData = JSON.parse(this.props.untrustedData);
    var userName = userData['userName'];
    return (
      <div className="welcomeHeading">
        Welcome, {userName}
      </div>
    )
  }
});
```

