// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}
  onIncrement = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevstate => ({count: prevstate.count + 10}))
    }
  }
  onDecrement = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevstate => ({count: prevstate.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="speed-measure">Speed is {count}mph</h1>
        <p className="paragraph">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="accelerate-button" onClick={this.onIncrement}>
            Accelerate
          </button>
          <button className="break-button" onClick={this.onDecrement}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
