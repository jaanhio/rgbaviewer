import React, { Component } from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Footer from './components/footer';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      red: 0,
      green: 0,
      blue: 0,
      opacity: 1,
    };
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleArrowKeysInput = this.handleArrowKeysInput.bind(this);
  }

  // for using up and down arrows to adjust the values
  handleArrowKeysInput = e => {
    const keyPressed = e.keyCode;
    let {id} = e.target;
    // console.log(typeof keyPressed);
    console.log(id);
    console.log(this.state[id]);
    // if opacity field is adjusted, limit value from 0 to 1
    if(id==='opacity'){
      // if up button is pressed
      if (keyPressed === 38) {
        // if value is already 255, stop increment
        if (this.state[id] >= 1) return;
        console.log(`opacity selected & up button is pressed`);
        this.setState({ [id]: (this.state[id]*10 + 1)/10 });
      }
      // if down button is pressed 
      else if (keyPressed === 40) {
        // if value is already 0, stop decrement
        if (this.state[id] <= 0) return;
        console.log(`opacity selected & down button is pressed`);
        this.setState({ [id]: (this.state[id]*10 - 1)/10 });
      }
    }
    // if up button is pressed
    else{
      if(keyPressed === 38){
        // if value is already 255, stop increment
        if(this.state[id] >= 255) return;
        console.log(`up button is pressed`);
        this.setState({[id]: this.state[id] + 1});
      }
      // if down button is pressed 
      else if(keyPressed === 40){
        // if value is already 0, stop decrement
        if(this.state[id] <= 0) return;
        console.log(`down button is pressed`);
        this.setState({[id]: this.state[id] - 1});
      }
    }
  }

  componentDidMount(){
    let textInputs = document.getElementsByTagName('input');
    console.log(textInputs[0]);
    Array.from(textInputs).map(input => {
      input.style.textAlign = "center"
    });
  };
  

  // for manual input of values
  handleValueChange = e => {
    e.stopPropagation();
    let { id, value } = e.target;
    value = value > 255 ? 255 : value;
    this.setState({ [id]: Number(value) });
  }

  render () {
    let { red, green, blue, opacity } = this.state;
    let backGroundColor = `rgba(${red}, ${green}, ${blue}, ${opacity})`;
    let fontColor = `rgb(${255-red}, ${255-green}, ${255-blue})`;
    
    /*---styling of components---*/
    const textBoxStyle = {
      // width: '60px',
      width: '2em',
      margin: 0,
      fontSize: '2em',
      height: '4.5vh',
    };

    const appStyle = {
      fontSize: '2em',
      backgroundColor: backGroundColor,
      color: fontColor,
    };

    const textFieldStyle = {
      color: fontColor,
      fontSize: '0.5em',
      height: '1em',
    }

    const underLineStyle = {
      display: 'none',
    }

    const formStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
    /*---end of styling---*/

    return (
      <MuiThemeProvider>
        <div className="App" style={appStyle}>
          {/*<header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
      </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
      </p>*/}
          <span>rgba(</span>
          <form style={formStyle}>
             {/*<input value={this.state.red} type="text" id="red" onChange={this.handleValueChange} onKeyDown={this.handleArrowKeysInput}/>
              <input value={this.state.green} type="text" id="green" onChange={this.handleValueChange} onKeyDown={this.handleArrowKeysInput}/>
              <input value={this.state.blue} type="text" id="blue" onChange={this.handleValueChange} onKeyDown={this.handleArrowKeysInput}/>
          <input value={this.state.opacity} type="text" id="opacity" onChange={this.handleValueChange} onKeyDown={this.handleArrowKeysInput}/>*/}
              <TextField value={this.state.red} type="text" id="red" onChange={this.handleValueChange} onKeyDown={this.handleArrowKeysInput} style={textBoxStyle} inputStyle={textFieldStyle} underlineStyle={underLineStyle}/>
              <span>,</span>
              <TextField value={this.state.green} type="text" id="green" onChange={this.handleValueChange} onKeyDown={this.handleArrowKeysInput} style={textBoxStyle} inputStyle={textFieldStyle} underlineStyle={underLineStyle}/>
              <span>,</span>
              <TextField value={this.state.blue} type="text" id="blue" onChange={this.handleValueChange} onKeyDown={this.handleArrowKeysInput} style={textBoxStyle} inputStyle={textFieldStyle} underlineStyle={underLineStyle}/>
              <span>,</span>
              <TextField value={this.state.opacity} type="text" id="opacity" onChange={this.handleValueChange} onKeyDown={this.handleArrowKeysInput} style={textBoxStyle} inputStyle={textFieldStyle} underlineStyle={underLineStyle}/>
          </form>
          <span>)</span>
        </div>
        <Footer backGroundColor={backGroundColor} fontColor={fontColor}/>
      </MuiThemeProvider>
    );
  }
}

export default App;
