import React, { Component } from 'react';

class Dialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonName: 'Open dialog',
            dialogActive: false
        }
    }
    
    toggleDialog(v) {
        const vid = document.getElementById("myVideo");
        this.setState({ dialogActive: !this.state.dialogActive });
        if(this.state.dialogActive) {
            vid.play();
        }
    }

    render() {

        return(
            <div>
                <h1>Component</h1>
                <button className="button" onClick={() => this.toggleDialog('val')}>
                    { this.state.buttonName }
                </button>

                { this.state.dialogActive &&
                    <div>
                        <video data-depth='50' height='540' id='myVideo' width='620'>
                            <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/ink4.mp4" type="video/mp4" />
                        </video>
                        
                        <div className="dialog">
                            {this.props.data.content}
                        </div>
                    </div>
                }

            </div>
        );
    }
}

export default Dialog;