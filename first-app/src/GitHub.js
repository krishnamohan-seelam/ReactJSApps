import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
const Card = (props) => {

  return (<div class="ui card">
          <div class="image">
          <img width="75" src={props.avatar_url} alt="Github avatar" />
          </div>
        <div class="content">
        <a class="header">{props.name}</a>
        <div class="meta">
        <span class="company">{props.company}</span>
        </div>
      <div class="description">
        {props.bio}
      </div>
      </div>
      <div class="extra content">
       <a>
        <i class="user icon"></i>
        {props.following}
      </a>
      </div>
      </div>);
};



let data =[
        {
          name:"KrishnaMohan",
          avatar_url:"http://placehold.it/50" ,
          company:"Bank of Andromeda",
          bio:"Computer Programmer",
          following:"22"
        },
        {
          name:"Swathi",
          avatar_url:"http://placehold.it/50" ,
          company:"Tucana Computer Services",
          bio:"Project Manager",
          following:"22"
          
        },
        {
          name:"Geetha",
          avatar_url:"http://placehold.it/50" ,
          company:"Unicent",
          bio:"Student",
          following:"22"
        },

]

const CardList = (props) => {
  return (props.cards.map(card=><Card key={card.id} {...card} />));
}

class Form extends Component {
  state ={userName:''}
  
  handleSubmit = (event) => {
      event.preventDefault();
      //console.log('Event:Submit ' +this.state.userName)
      axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then(resp => { this.props.onSubmit(resp.data);
                      this.setState({userName:''})
                    })
   }
  render()
  {
    return (
      <form onSubmit = {this.handleSubmit}>
      <div class="ui mini form">
      <div class="fields">
      <div class="five wide field">
      <input placeholder="Github id" 
       onChange = { (event)=>this.setState({userName:event.target.value}) }
       type="text" values ={this.state.userName}/>
      </div>
      <div class="two widefield">
      <button class="ui submit button" type ="submit">Submit</button>
      </div>
      </div>
      </div>
      </form>

    );
  }
}

class GitHub extends Component {

  state = {cards: [] }
 addNewCard = (cardInfo) => 
              {
                this.setState(prevState =>(
                {cards:prevState.cards.concat(cardInfo)
                }));
            };
  render() {
    return (
      <div>
      <Form onSubmit={this.addNewCard}/>
      <div class="ui link cards">
      <CardList cards ={this.state.cards}/>
      </div>
      </div>
    );
  }


}

export default GitHub;
