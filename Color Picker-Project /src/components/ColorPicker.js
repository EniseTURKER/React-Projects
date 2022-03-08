import React from 'react';
import { Button } from './Button';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      color: [245, 180, 146]
    }
  }


  componentDidMount() {

    console.log()


  }

  componentDidUpdate(prevProps, prevState) {
    console.log()

  }

  isLight(colorArr) {
    return colorArr.reduce((a, b) => a + b) < 384 // it should return true or false according to the given array;
  }

  formatColor(colorArr) {
    return 'rgb(' + colorArr.join(', ') + ')';
  }
  applyColor = () => {

    const color = this.formatColor(this.state.color)
    document.body.style.backgroundColor = color
    this.chooseColor()
  }

  chooseColor() {
    const color = []
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 257));

    }
    this.setState({ color: color })

  }





  render() {
    console.log(this.isLight(this.state.color))
    return (
      <div>
        <h1 className={this.isLight(this.state.color) ? "black" : "white"}>
          Your color is ........!
          {this.formatColor(this.state.color)}
        </h1>
        <Button isLight={this.isLight(this.state.color)} applyColor={this.applyColor}/>


       

      </div>
    );
  }
}

export default ColorPicker;
