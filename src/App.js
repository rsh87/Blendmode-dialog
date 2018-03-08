import React, { Component } from 'react';
import Dialog from './dialog/components/dialog.component';
import './App.css';

//https://next.json-generator.com/api/json/get/E1qqRES84

//https://streamable.com/

//https://www.videezy.com/free-video/ink-drop

class App extends Component {
    constructor() {
        super();
        this.state = {
            dialogContent: '',
        }

        this.dialogConfigObj = {
            videoUrl: '/bg.mp4'
        }
    }
    
    render() {
        const appStyle = {
            backgroundImage: 'url("https://wallpapertag.com/wallpaper/full/4/6/a/269386-free-download-halloween-wallpaper-1920x1080-for-desktop.jpg")',
            height: '100vh'
        }
        return (
            <div className="App" style={appStyle}>
                <Dialog videoConfig={this.dialogConfigObj}/>
            </div>
        );
    }
}

export default App;