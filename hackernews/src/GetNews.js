import React, { Component } from 'react';

const Item = (props) => {
    return (
        <div class="item" >
            <div class="content">
                <div class="header">
                    <a href={props.url}> {props.title} </a>
                </div>

                <div class="description">
                    {props.points} points | {props.num_comments} comments|
                    {props.author}|<a href={props.url}>{props.url} </a>
                </div>
            </div>
        </div>
    );
};

const ItemsList = (props) => {
    //console.log(props)
    return (props.result.hits.map((items) => <Item key={items.objectID} {...items} />));

}


class NewsAggregator extends Component {
 
    render() {
        if (!this.props.result) { return null; }
        return (<div className="ui divided items">
            <ItemsList result={this.props.result} />
        </div>
        );
    }
}
export default NewsAggregator;