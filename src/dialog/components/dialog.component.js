import React, { Component } from 'react';

class Dialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonName: 'Open dialog',
            dialogActive: false
        }
    }
    
    toggleDialog = () => {
        this.setState((prevState) => ({ dialogActive: !prevState.dialogActive }), () => {
            if(this.refs.vidRef) {
                this.refs.vidRef.play();
            }
        });
    }

    render() {

        const videoStyle = {
            mixBlendMode: 'multiply'
          };

        return(
            <div>
                <button className="button" onClick={this.toggleDialog}>
                    { this.state.buttonName }
                </button>

                { this.state.dialogActive &&
                    <div className="dialog">>
                        <video style={videoStyle} ref="vidRef" height='540' width='620' src={this.props.videoConfig.videoUrl}>
                        </video>
                        <div className="dialog__content">
                         
                        </div>
                    </div>
                }

            </div>
        );
    }
}

export default Dialog;