import React from 'react'

class LoadComponent extends React.Component {
  state = {
    component: null,
    error: null
  }
  componentWillMount() {
    System.import(`./components/${this.props.component}`)
      .then(Component => {
        this.setState({component:Component.default})
      })
      .catch(error => {
        this.setState({error})
      })
  }
  render() {
    const {component, error} = this.state
    return this.props.render(component, error)
  }
}

export default LoadComponent