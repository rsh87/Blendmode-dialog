import React, { Component } from 'react';
import Dialog from './dialog/components/dialog.component';
import './App.css';

//https://next.json-generator.com/api/json/get/E1qqRES84

//https://streamable.com/

//https://www.videezy.com/free-video/ink-drop

//https://codepen.io/jcoulterdesign/pen/QagxgJ

class App extends Component {
    constructor() {
        super();
        this.state = {
            dialogContent: '',
        }
    }

    appStyle = {
        backgroundImage: 'url("https://wallpapertag.com/wallpaper/full/4/6/a/269386-free-download-halloween-wallpaper-1920x1080-for-desktop.jpg")',
        height: '100vh'
    }

    dialogConfigObj = {
        videoUrl: '/bg.mp4'
    }
    
    render() {
        return (
            <div className="App" style={this.appStyle}>
                <Dialog videoConfig={this.dialogConfigObj}/>
            </div>
        );
    }
}

export default App;