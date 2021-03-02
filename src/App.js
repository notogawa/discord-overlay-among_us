import { React, Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './App.css';
import 'react-tabs/style/react-tabs.css';

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
]

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
      return this.state[player_color] === "" ? player_color : (player_color + " used")
    }

    return (
      <div className="App">
        <h1>Discord StreamKit Overlay Custom CSS Generator for Among Us Streamer</h1>
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
        <div className="tabs">
          <Tabs>
            <TabList>
              <Tab>CSS</Tab>
              <Tab>Demo</Tab>
            </TabList>
            <TabPanel>
              <div className="style">
                <CopyToClipboard text={this.genetate_css()}>
                  <SyntaxHighlighter language="css" style={docco}>
                    {this.genetate_css()}
                  </SyntaxHighlighter>
                </CopyToClipboard>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="demo">
                <iframe title="demo" width="873" height="491" src="https://www.youtube.com/embed/-4H-KxnMSKQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    )
  }
  
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }
  
  genetate_css = () => {
    return `/* Created by https://notogawa.github.io/discord-overlay-among_us/ */
body {
  background-color: rgba(0, 0, 0, 0);
  margin: 0;
  padding: 0;
  overflow: hidden;
  float: right;
}

.voice-states {
  margin: 0;
  padding: 0;
}

.avatar {
  border: 0 !important;
  height: 100px !important;
  width: 100px !important;
  border-radius: 0 !important;
}

.user .name {
  width: 100px !important;
  position: relative;
  overflow: visible;
  top: -26px;
  display: inline-block;
}

.avatar.speaking + .user .name {
  background: #41DAC6 !important;
}

.user .name::before {
  position: absolute;
  top: -80px;
  left: -50px;
  z-index: -1;
  content: "";
  display: block;
  width: 90px;
  height: 115px;
  background-image: url(https://notogawa.github.io/discord-overlay-among_us/players.png);
  background-size: 1080px auto;
  transform: scale(-0.75, 0.75) rotate(30deg);
}

.avatar + .user .name::before {
  transition: all 0.05s 0s ease-in-out;
/*  animation: mozomozo 2s ease 0.1s infinite alternate none running; */
}

.avatar.speaking + .user .name::before {
  z-index: 1;
  transform: translateX(-35px) scale(-1, 1);
  animation: pyonpyon 0.5s ease 0.1s infinite alternate none running;
}

li.voice-state {
  height: 100px !important;
  width: 100px !important;
  margin: 0 !important;
  padding: 0 !important;
  display: none;
  padding: 20px 0 0 90px;
  position: relative;
}

@keyframes pyonpyon {
  0% {
    transform: translateX(-35px) scale(-1, 1);
  }
  50% {
    transform: translateX(-35px) scale(-1.1, 0.85);
  }
  100% {
    transform: translateX(-35px) scale(-1, 1);
  }
}

@keyframes mozomozo {
  0% {
    transform: scale(-0.75, 0.75) rotate(30deg);
  }
  80% {
    transform: scale(-0.75, 0.75) rotate(15deg);
  }
  100% {
    transform: scale(-0.75, 0.75) rotate(30deg);
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
}

export default App;
