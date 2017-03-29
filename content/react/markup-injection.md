---
title: Markup Injection
contexts:
- react
types: practice
threats: xss
---

## Bad Practice

dangerouslySetInnerHTML is called dangerous for a reason!

```jsx:5
class WelcomeHeading extends React.Component {
  render() {
    return (
      <div className="welcomeHeading"
        dangerouslySetInnerHTML={{__html: 'Welcome, ' + this.props.userName}}>
      </div>
    )
  }
});
```

## Good Practice

What happens in a React component?

```jsx:5
class WelcomeHeading extends React.Component {
  render() {
    return (
      <div className="welcomeHeading">
        Welcome, {this.props.userName}
      </div>
    )
  }
});
```

The content is encoded automatically!
