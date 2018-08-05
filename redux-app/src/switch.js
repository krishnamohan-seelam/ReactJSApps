import React, { Component } from 'react'


class RSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedValue :"1"}
        this.setIncrementFactor =this.setIncrementFactor.bind(this)
    }
    setIncrementFactor(event)
    {
        console.log("select:"+event.target.value)
        this.setState({selectedValue:event.target.value})
    }
    render() {
        return (
            <div className="ui form">
                <div className="inline fields">
                    <label>Increment by </label>
                    <div className="field" >
                        <div className="ui radio checkbox">
                            <input type="radio" name="incrementfactor" checked={this.state.selectedValue ==="1"} onChange={this.setIncrementFactor} 
                                value ="1"/>
                            <label>1</label>
                        </div>
                        <div className="ui radio checkbox">
                            <input type="radio" name="incrementfactor"
                              checked={this.state.selectedValue ==="2"}
                              onChange={this.setIncrementFactor} 
                                value  ="2"/>
                            <label>2</label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RSwitch;