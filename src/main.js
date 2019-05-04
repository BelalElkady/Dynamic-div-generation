import React, { Component } from "react";
function rand() {
  return Math.round(Math.random() * 255 + 1);
}
var array = [];
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      r: rand(),
      g: rand(),
      b: rand(),
      count: -1,
      prevCount: -1,
      subtract: false
    };
    this.oneBox = this.oneBox.bind(this);
    this.Boxes = this.Boxes.bind(this);
  }
  componentDidMount() {
    this.tickInterval = setInterval(() => this.tick(), 20);
    this.Interval = setInterval(
      () => {
        this.FormTiles();
        this.Boxes();
      },

      50
    );
  }

  tick() {
    this.setState({
      r: rand(),
      g: rand(),
      b: rand()
    });
  }

  FormTiles() {
    if (this.state.count < 10 && this.state.subtract === false) {
      this.setState({
        count: this.state.count + 1,
        subtract: false
      });
    } else if (this.state.count > 0 && this.state.subtract === true) {
      this.setState({
        count: this.state.count - 1,
        subtract: true
      });
    } else if (this.state.count === 10) {
      this.setState({
        subtract: true
      });
    } else if (this.state.count === 0) {
      this.setState({
        subtract: false
      });
    }
  }

  oneBox() {
    return (
      <div
        className="box"
        style={{
          background:
            "rgb(" +
            this.state.r +
            "," +
            this.state.g +
            "," +
            this.state.b +
            ")"
        }}
      />
    );
  }

  Boxes() {
    if (this.state.subtract === false) {
      array[this.state.count] = (
        <div>
          {""}
          <this.oneBox />
        </div>
      );
    } else {
      array[this.state.count] = <div>{""}</div>;
    }

    return array;
  }
  render() {
    const box = this.Boxes().map(item => {
      return <li className="list-group-item"> {item} </li>;
    });
    return (
      <div>
        <ul className="list-group list-group-horizontal">
          {box}
          })()}
        </ul>
      </div>
    );
  }
}

export default Main;
