import React, { Component } from 'react';
import './semantic-ui-css/semantic.css'

const name = "Krishna"
 

const Product = (props) => {
   
 return (  <div class="item">
                <div class="ui tiny image">
                 <img src={props.image}/>
                </div>
    <div class="content">
      <div class="header">{props.title}{props.author}</div>
      <div class="description">
        <p>{props.description}</p>
         <div class = "comments and stars">
          <i class="purple comment icon">{props.num_comments}</i>
          <span> <i class="star icon">{props.points}</i></span>
          </div>
          <div class = "remove"></div>

          <button class="ui button" 
                  onClick={this.onRemove} type="button" >
           Remove
           </button>
          </div>
           </div>
        
        </div>
);

};

const ProductList = (props) => {
  return (props.products.map( product => <Product  key={product.objectID}{...product}/>));
};
class App extends Component {

  state = {products: [
    { 
      title: "React",
      url: "https://facebook.github.io/react/",
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
      image:"http://placehold.it/50",
      description:"Book on React"
    },
    { 
      title: "Machine Learning",
      url: "https://facebook.github.io/react/",
      author: 'Andreas Muller',
      num_comments: 3,
      points: 4,
      objectID:1,
      image:"http://placehold.it/50",
      description:"Book on Machine Learning"
       },
    { 
      title: "Python ",
      url: "https://facebook.github.io/react/",
      author: 'Mark Lutz',
      num_comments: 3,
      points: 4,
      objectID:2,
      image:"http://placehold.it/50",
      description:"Book on Python"
    },
  
  ] }

   

  onRemove = (id)=>{
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.products.filter(isNotId);
      this.setState({ products: updatedList }); 
  }
  render() {
    return (
      <div className="App">
        <h2 class="ui header">Welcome to the Road to learn React , {name} </h2>
        <div class = "ui unstackable items">
        <ProductList products ={this.state.products}/>
        </div>
      </div>
    );
  }
}

export default App;
