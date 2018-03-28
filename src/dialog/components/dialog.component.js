import React, { Component } from 'react';
import '../dialog.style.css';

class Dialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonName: 'Open dialog',
            dialogActive: false,
            dialogVisible: true,
            showContent: false
        }


    }
    
    toggleDialog = () => {
        this.setState((prevState) => ({ dialogActive: !prevState.dialogActive }), (state) => {
            if(!this.state.dialogActive) {
                this.streamBackwards();
            } else {
                if(this.rewindInterval) {
                    clearInterval(this.rewindInterval);
                } 
                this.setState({ dialogVisible: true }, () => {
                    this.refs.vidRef.playbackRate = 4.0;
                    this.refs.vidRef.play();
                });
            }
        });
    }

    streamBackwards = () => {
        this.setState({ showContent: false });
        this.rewindInterval = setInterval(() => {
            if(this.refs.vidRef.currentTime === 0) {
                this.setState({dialogVisible: false});
                clearInterval(this.rewindInterval);
            } else {
                this.refs.vidRef.currentTime += -.2;
            }
        }, 30);
    }

    onVideoEnd = () => {
        this.setState({ showContent: true });
    }

    render() {
        return(
            <div>
                <button className="dialog__button" onClick={this.toggleDialog}>
                    { this.state.buttonName }
                </button>

                { this.state.dialogVisible &&
                <div className="dialog__overlay">
                    <div className="dialog">
                        <div className={ this.state.showContent ? 'dialog__content dialog__content_visible' : 'dialog__content' }>
                            <div className="dialog__content-text">
                            Pain needles commodo drool rabid nightmare. . Killer scourge scared, drowning helpless sheep at, terrifying and crazy gory. claw at deteriorated in, creep.
                            </div>
                            <button className="dialog__close" onClick={this.toggleDialog}>Close dialog&nbsp;&nbsp;╳ </button>
                            </div>
                            <video className="dialog__video" style={this.videoStyle} ref="vidRef" onEnded={this.onVideoEnd} src={this.props.videoConfig.videoUrl}>
                            </video>
                    </div>
                </div>
                }

            </div>
        );
    }
}

export default Dialog;