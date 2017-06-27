import React from 'react'

class CoordinatesButton extends React.Component {
  handleClick = (event) => {
    let coords = [event.clientX, event.clientY]
    console.log(coords)
    this.props.onReceiveCoordinates(coords)
  }
  
  render () {
    return (
      <button onClick={this.handleClick}>Coordinates</button>
    )
  }
}

export default CoordinatesButton
