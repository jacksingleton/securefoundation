---
title: Markup Injection
contexts:
- react
type: practice
threat: xss
---

## Bad Practice

dangerouslySetInnerHTML is called dangerous for a reason!

{{< badcode jsx 5 >}}
class WelcomeHeading extends React.Component {
  render() {
    return (
      <div className="welcomeHeading"
        dangerouslySetInnerHTML={{__html: 'Welcome, ' + this.props.userName}}>
      </div>
    )
  }
}
{{< /badcode >}}

## Good Practice

What happens in a React component?

{{< goodcode jsx 5 >}}
class WelcomeHeading extends React.Component {
  render() {
    return (
      <div className="welcomeHeading">
        Welcome, {this.props.userName}
      </div>
    )
  }
}
{{< /goodcode >}}

The content is encoded automatically!
