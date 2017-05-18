import React from 'react'
import ReactDOM from 'react-dom'
import LoadComponent from './LoadComponent'

class App extends React.Component {
  state = {
    showChart: false
  }

  showChart = () => {
    this.setState({
      showChart: !this.state.showChart
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.showChart}>load chart</button>
        {this.state.showChart ? (
          <LoadComponent component='Chart.js' render={(Chart, error)=> (
            error ? (
              <p>Reload or something...</p>
            ) : (
              Chart ? <Chart /> : <p>Loading...</p>
            )
          )}/>
        ) : null}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#outlet')
)