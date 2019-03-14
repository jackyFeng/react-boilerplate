import React from 'react';
import BoilingVerdict from './BoilingVerdict';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temprature: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({temprature: e.target.value});
    }

    render() {
        const {temprature} = this.state;
        return (
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input 
                    value={temprature}
                    onChange={this.handleChange} />
                <BoilingVerdict 
                    celsius={parseFloat(temprature)} />
            </fieldset>
        );
    }
}

export default Calculator;