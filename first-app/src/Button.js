import React, { Component } from 'react'

class Button extends Component {

    handleClick = () => {
        if (this.props.incrementValue === "Reset") {
            this.props.onClickFunction(this.props.resetCounter);
        }
        else {
            this.props.onClickFunction(this.props.incrementValue);
        }
    };

    render() {
        return (<button class="ui primary button"
            onClick={this.handleClick} >
            {this.props.incrementValue}</button>);
    }
}

const Result = (props) => {
    return (<div> {props.counter}</div>);
};
class ButtonState extends Component {

    state = { counter: 0 }
    incrementCounter = (incrementValue) => {
        this.setState((prevState) =>
            ({ counter: prevState.counter + incrementValue })
        )
    };

    resetCounter = () => {
        this.setState(() => ({ counter: 0 })
        )
    };

    render() {
        return (
            <div>
                <Button incrementValue={1} onClickFunction={this.incrementCounter} />
                <Button incrementValue={2} onClickFunction={this.incrementCounter} />
                <Button incrementValue={3} onClickFunction={this.incrementCounter} />
                <Button incrementValue={5} onClickFunction={this.incrementCounter} />
                <Button incrementValue={"Reset"} onClickFunction={this.resetCounter} />
                <br />
                Result:<Result counter={this.state.counter} />
            </div>
        );
    }
}
export default ButtonState;