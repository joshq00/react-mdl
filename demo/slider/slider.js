import React from 'react';
import ReactDOM from 'react-dom';
import Slider from '../../src/Slider';

function linkToState(target, property) {
    return event => {
        target.setState({
            [property]: event.target.value
        });
    };
}

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slider1: 0,
            slider2: 25
        };
    }

    render() {
        return (
            <div>
                <p>Default Slider</p>
                <Slider min={0} max={100} value={this.state.slider1} onChange={linkToState(this, 'slider1')} />

                <p>Slider with Starting Value</p>
                <Slider min={0} max={100} value={this.state.slider2} onChange={linkToState(this, 'slider2')} />
            </div>
        );
    }
}


ReactDOM.render(<Demo />, document.getElementById('app'));
