import React, { Component } from 'react'
import { connect } from 'react-redux';
class RSwitch extends Component {
    constructor(props) {
        super(props);
        this.setIncrementFactor =this.setIncrementFactor.bind(this)
    }
    setIncrementFactor(event)
    {
        this.props.dispatch({ type: "SELECTED_INCREMENT_FACTOR",
                              payload:event.target.value   
                            })    
    }
    render() {
        return (
            <div className="ui form">
                <div className="inline fields">
                    <label>Increment or Decrement by </label>
                    <div className="field" >
                        <div className="ui radio checkbox">
                            <input type="radio" name="incrementfactor" checked={this.props.selectedValue ===1} onChange={this.setIncrementFactor} 
                                value ="1"/>
                            <label>1</label>
                        </div>
                        <div className="ui radio checkbox">
                            <input type="radio" name="incrementfactor"
                              checked={this.props.selectedValue ===2}
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
function mapStateToProps(state) {
    return {
        selectedValue: state.selectedValue,
    };
  }
export default connect(mapStateToProps)(RSwitch); 
