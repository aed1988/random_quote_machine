import React from 'react';
import './App.css';
import Quote from './Quote'
import Welcome from './Welcome'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      quote: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  render() {
    return (
      (!this.state.author && !this.state.quote) 
      ? <Welcome onClick={() => this.handleClick()}/> 
      : <Quote 
          onClick={() => this.handleClick()}
          author = {this.state.author}
          quote = {this.state.quote}
         />
    )
  }
  
   handleClick () {
    const quotesArr = [
      {
      author: 'Nelson Mandela',
      quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.'
    },
    {
      author: 'Walt Disney',
      quote: 'The way to get started is to quit talking and begin doing.'
    },
    {
      author: 'Eleanor Roosevelt',
      quote: 'If life were predictable it would cease to be life, and be without flavor.'
    },
    {
      author: 'James Cameron',
      quote: 'If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success.'
    },
    {
      author: 'Mother Teresa',
      quote: 'Spread love everywhere you go. Let no one ever come to you without leaving happier.'
    }];
     
    const randomNumber = () => Math.floor(Math.random() * quotesArr.length)
    
    const arrNum = randomNumber()
     
    this.setState({ 
      author: quotesArr[arrNum]['author'],
      quote: quotesArr[arrNum]['quote']
    });    
  }
}

export default App;
