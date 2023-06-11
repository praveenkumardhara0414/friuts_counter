// Write your code here
import './index.css'

import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  increaseMangos = () => {
    this.setState(previous => ({mangoes: previous.mangoes + 1}))
  }

  increaseBananas = () => {
    this.setState(previous => ({bananas: previous.bananas + 1}))
  }

  render() {
    const {mangoes, bananas} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">
            Bob ate <span className="span">{mangoes}</span> mangoes
            <span className="span"> {bananas}</span> bananas
          </h1>
          <div className="sub-container">
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="mango"
              />
              <button
                type="button"
                className="button-1"
                onClick={this.increaseMangos}
              >
                Eat Mango
              </button>
            </div>
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="mango"
              />
              <button
                type="button"
                className="button-1"
                onClick={this.increaseBananas}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
