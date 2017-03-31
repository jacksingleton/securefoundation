---
title: Code Injection
contexts:
- react
type: "practice"
threat: "injection"
---

## Bad Practice

<s>Eval</s> Evil

{{< badcode jsx 3 >}}
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
}
{{< /badcode >}}

Eval can technically be used to deserialize json… but don’t do it!

## Good Practice

JSON.parse should be used to deserialize JSON data

{{< goodcode jsx 3 >}}
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
}
{{< /badcode >}}

