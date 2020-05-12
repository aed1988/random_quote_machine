import React, {useState, useEffect} from 'react'
import Welcome from './Welcome';
import Quote2 from './Quote2';

const Content = () => {

  const [content, setContent] = useState({quote: '', author: ''})

  useEffect(() => {
    localStorage.setItem('quote', `Quote: ${content.quote}`)
    localStorage.setItem('author', `Author: ${content.author}`)
    return () => {
      localStorage.removeItem('quote')
      localStorage.removeItem('author')
    }
  }, [content])

  const updateContent = (target) => {
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
     
    setContent({quote: quotesArr[arrNum].quote, author: quotesArr[arrNum].author})

  }

  return (
    (!content.author && !content.quote) 
      ? <Welcome onClick={updateContent}/> 
      : <Quote2 
          {...content}
          onClick={updateContent}
        />
  )
}

export default Content
