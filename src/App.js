import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App" onClick={this.onClick}>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }

    onClick = () => {
        console.error(3)
        const options = {
            encodingType: 0
        };
        navigator.camera.getPicture(this.successCallback, this.errorCallback, options);
    }

    successCallback = (e) => {
        console.log(1 + e)
    }

    errorCallback = (e) => {
        console.log(2 + e)
    }
}

export default App;
