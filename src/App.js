import React, { Component } from 'react';
import './App.css';

const player_colors = [
  "red",
  "blue",
  "green",
  "pink",
  "orange",
  "yellow",
  "black",
  "white",
  "purple",
  "brown",
  "cyan",
  "lime",
];

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      red: "",
      blue: "",
      green: "",
      pink: "",
      orange: "",
      yellow: "",
      black: "",
      white: "",
      purple: "",
      brown: "",
      cyan: "",
      lime: "",
    }
  }
  
  render() {
    
    const color_used = (player_color) => {
      return this.state[player_color] === "" ? player_color : (player_color + " used");
    }

    console.log(this.state);

    return (
      <div className="App">
        <h1>Discord StreamKit Overlay ID Mapper for Among Us</h1>
        <div className="players">
          <ul>
            {player_colors.map((player_color,_index) => {
              return (
                <li className={color_used(player_color)} key={player_color}>
                  <div className="chara">
                    <img alt={`${player_color} player`} src={`${process.env.PUBLIC_URL}/players.png`}/>
                  </div>
                  <div className="form">
                    {player_color} <br/>
                    <input type="text" name={player_color} onChange={this.handleChange} value={this.state[player_color]}/>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="style">
          <textarea readOnly ref={(code) => this.code = code} value={this.genetate_css()} onClick={this.copyToClipboard}/>
        </div>
      </div>
    );
  }
  
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }
  
  genetate_css = () => {
    return `
body {
  background-color: rgba(0, 0, 0, 0);
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.avatar.speaking + .user .name {
  background: #41DAC6 !important;
}

.user .name {
  position: relative;
  overflow: visible;
  display: inline-block;
}

.user .name::before {
  position: absolute;
  top: -50px;
  left: -150px;
  content: "";
  display: block;
  width: 90px;
  height: 115px;
  background-image: url(https://user-images.githubusercontent.com/372530/109404163-caddd600-79a6-11eb-9e93-8cdf5d469d33.png);
  background-size: 1080px auto;
  transform: scale(0.75);
}

.avatar + .user .name::before {
  transition: all 0.05s 0s ease-in-out;
}

.avatar.speaking + .user .name::before {
  transform: translateX(-15px) scale(-1, 1);
  animation: rotation 0.75s ease 0.1s infinite alternate none running;
}

li.voice-state {
  display: none;
  padding: 20px 0 0 90px;
}

@keyframes rotation {
  0% {
    transform: translateX(-15px) scale(-1, 1);
  }
  50% {
    transform: translateX(-15px) scale(-1.1, 0.85);
  }
  100% {
    transform: translateX(-15px) scale(-1, 1);
  }
}
` + player_colors.map((player_color, index) => {
  return this.state[player_color] === "" ? `` : `
/* ${player_color} */
li.voice-state[data-reactid*="${this.state[player_color]}"] {
  display: block;
}
li.voice-state[data-reactid*="${this.state[player_color]}"] .user .name::before {
  background-position: -${90*index}px 0;
}
li.voice-state[data-reactid*="${this.state[player_color]}"] .avatar.speaking +  .user .name::before {
  background-position: -${90*index}px -115px !important;
}
`}).reduce((prev, curr) => prev + curr)
  }
  
  copyToClipboard = (e) => {
    this.code.select();
    document.execCommand('copy');
  };
}

export default App;
